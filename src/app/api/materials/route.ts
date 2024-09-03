import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function GET(request: NextRequest) {
  try {
    const materials = await prisma.material.findMany({
      select: {
        id: true,
        name: true,
        type: true,
        size: true,
        uploader: {
          select: {
            email: true,
          },
        },
        comments: {
          select: {
            id: true,
          },
        },
      },
    });

    return new NextResponse(JSON.stringify(materials), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: (error as Error).message }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
