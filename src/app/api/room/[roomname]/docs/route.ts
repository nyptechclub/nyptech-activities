import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../../../../../lib/db';
export const GET = async (req: NextRequest, { params }: { params: { roomname: string } }) => {
  const room = await db.docs.findUnique({
    where: {
      room: params.roomname, 
    },include: {
      documents: true,
    },
  });

  if (!room) {
    const newRoom = await db.docs.create({
      data: {
        room: params.roomname,
      },
      include: {
        documents: true, // Include related documents after creation
      },
    });

    return NextResponse.json(newRoom, { status: 201 });
  }

  // Return the found room
  return NextResponse.json(room);
};

export const POST = async (req: NextRequest, { params }: { params: { roomname: string } }) => {
  const { roomname, roomcontent } = await req.json();

  // Find the document based on roomname
  const existingDocument = await db.document.findUnique({
    where: {
      id: params.roomname, // Assuming roomname is a unique field
    },
  });

  if (!existingDocument) {
    // If the document is not found, return a 404 response
    return NextResponse.json({ error: "Document not found" }, { status: 404 });
  }

  // Update the document since it exists
  const updatedDocument = await db.document.update({
    where: {
      id: existingDocument.id, // Use the document's id to update it
    },
    data: {
      roomname: roomname || existingDocument.roomname,
      roomcontent: roomcontent || existingDocument.roomcontent,
    },
  });

  return NextResponse.json(updatedDocument);
};

export const DELETE = async (req: NextRequest, { params }: { params: { roomname: string } }) => {
    const room = await db.document.delete({
      where: {
        id: params.roomname
      }
    });
      return NextResponse.json(room);
  };

  export const PATCH = async (req: NextRequest, { params }: { params: { roomname: string } }) => {
    const {roomname, roomcontent} = await req.json();

    const room = await db.document.create({
      data:{
        roomname: roomname,
        roomcontent: roomcontent,
        docsId: params.roomname,

      }
    });
      return NextResponse.json(room);
  };
  