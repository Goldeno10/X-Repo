import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../../prisma/client";

// Fetch comments for a specific material
export async function GET(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  const materialId = id;

  try {
    const comments = await prisma.comment.findMany({
      where: { materialId: materialId },
      orderBy: { commentDate: "desc" },
      include: {
        user: {
          select: {
            name: true,
          },
        },
      },
    });

    console.log("XXXXXXX CCCCCCCCC OOOOOOOOOO  >  ", comments);

    return new NextResponse(JSON.stringify(comments), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching comments:", error);
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

// Post a new comment for a specific material
export async function POST(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  const materialId = id;

  try {
    const data = await request.json();
    const { content, userId } = data; // Expect content and userId from the request body

    if (!content || !userId) {
      return new NextResponse(
        JSON.stringify({ error: "Content and User ID are required" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    const newComment = await prisma.comment.create({
      data: {
        content,
        materialId,
        userId,
      },
    });

    return new NextResponse(JSON.stringify(newComment), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error posting comment:", error);
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
