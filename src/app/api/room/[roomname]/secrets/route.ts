import { auth, currentUser } from '@clerk/nextjs/server';
import { NextResponse, NextRequest } from 'next/server';
import { db } from '../../../../../../lib/db';
import { notFound } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export const GET = async (req: NextRequest, { params }: { params: { roomname: string } }) => {
  const { roomname } = params;

  // Fetch secrets from the database
  const secrets = await db.secret.findMany({
    where: {
      roomname,
    },
  });

  return NextResponse.json(secrets);
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
      return new NextResponse('Room not found', { status: 404 });
    }
  
    const envVariables = body.text.split('\n').map((line: string) => {
      const [key, value] = line.split('=');
      return { key, value: value.replace(/"/g, '') };
    });
  
    const secrets = await db.secret.createMany({
      data: envVariables.map((envVar: { key: string; value: string }) => ({
        userId: body.userId,
        roomId: room.id,
        roomname,
        username: body.username,
        key: envVar.key,
        value: envVar.value,
      })),
    });
    revalidatePath(`/passwords/${roomname}`)
    return NextResponse.json(secrets);
  };
  