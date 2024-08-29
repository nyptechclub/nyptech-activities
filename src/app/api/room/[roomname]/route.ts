import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { db } from '../../../../../lib/db';
export const GET = async (req: NextRequest, { params }: { params: { roomname: string } }) => {
    const room = await db.room.findUnique({
      where: {
        roomname: params.roomname,
      },
    });
  
    if (!room) {
      return new NextResponse('Room not found', { status: 404 });
    }
  
    return NextResponse.json(room);
  };
export const POST = async (req: NextRequest, { params }: { params: { roomname: string } }) => {
  const { roomname } = params;
  const body = await req.json();

  const room = await db.room.findUnique({
    where: {
      roomname,
    },
  });

  if (!room) {
    const hashedPassword = await bcrypt.hash(body.password, 10);
    const newRoom = await db.room.create({
      data: {
        roomname,
        password: hashedPassword,
      },
    });

    return NextResponse.json(newRoom);
  } else {
    // If room exists, verify the password
    const isPasswordCorrect = await bcrypt.compare(body.password, room.password);
    if (!isPasswordCorrect) {
      return new NextResponse('Invalid password', { status: 401 });
    }
    return NextResponse.json(room);
  }
};
