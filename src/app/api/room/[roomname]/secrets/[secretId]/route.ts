import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../../../../../../lib/db';

export const PATCH = async (req: NextRequest, { params }: { params: { roomname: string, secretId: string } }) => {
  const { value } = await req.json();

  const updatedSecret = await db.secret.update({
    where: {
      id: params.secretId,
    },
    data: {
      value,
    },
  });

  return NextResponse.json(updatedSecret);
};
