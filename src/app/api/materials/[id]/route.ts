import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/client";

interface Props {
  params: {
    id: string;
  };
}

export async function GET(request: NextRequest, { params: { id } }: Props) {
  const materialId = id;

  try {
    const material: {
      id: string;
      name: string;
      type: string;
      size: string | null;
      uploadDate: Date;
      uploaderId: string;
      fileUrl: string;
      category: string;
      comments?: Comment[];
    } | null = await prisma.material.findUnique({
      where: { id: materialId },
    });
    if (!material) {
      return new NextResponse(JSON.stringify({ error: "Material not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    const fileExtension = material.name.split(".").pop();
    const fileUrl = `/files/${materialId}.${fileExtension}`;

    material.fileUrl = fileUrl;

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

    material.comments = comments as unknown as Comment[];

    return new NextResponse(JSON.stringify(material), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: (error as any).message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export async function DELETE(request: NextRequest, { params: { id } }: Props) {
  const materialId = id;

  try {
    // Check if the material has comments
    const comments = await prisma.comment.findMany({
      where: { materialId: materialId },
    });

    if (comments.length > 0) {
      // Material has comments, cannot delete
      return new NextResponse(
        JSON.stringify({ message: "Cannot delete material with comments" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    // No comments, safe to delete
    await prisma.material.delete({
      where: { id: materialId },
    });

    return new NextResponse(
      JSON.stringify({ message: "Material deleted successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error: any) {
    // Handle possible errors
    return new NextResponse(
      JSON.stringify({ message: "Server error", error: error.message }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
