import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import { pipeline } from "stream";
import { promisify } from "util";
import prisma from "../../../../../prisma/client";

const pump = promisify(pipeline);

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const formData = await req.formData();
    if (!formData.has("files")) {
      return NextResponse.json(
        { status: "fail", data: "No file found" },
        { status: 400 }
      );
    }
    const files = formData.getAll("files");
    if (files.length > 1) {
      return NextResponse.json(
        { status: "fail", data: "Only one file allowed" },
        { status: 400 }
      );
    }
    const file: any = files[0];
    const allowedTypes = [
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      "video/mp4",
      "application/pdf",
    ];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { status: "fail", data: "Invalid file type" },
        { status: 400 }
      );
    }

    // Creating the initial material entry
    const material = await prisma.material.create({
      data: {
        name: file.name,
        type: file.type,
        size: file.size.toString(),
        uploaderId: formData.get("uploaderId") as string,
        category: formData.get("category") as string,
        fileUrl: "", // Temporary empty string, will update after file saved
      },
    });

    // Construct the file path using the material id
    const filePath = `./public/files/${material.id}.${file.name
      .split(".")
      .pop()}`;

    // Save the file to the local storage
    await pump(file.stream(), fs.createWriteStream(filePath));

    // Update the fileUrl with the correct path
    const updatedMaterial = await prisma.material.update({
      where: { id: material.id },
      data: { fileUrl: filePath },
    });

    return NextResponse.json(
      { status: "success", data: updatedMaterial },
      { status: 201 }
    );
  } catch (e: any) {
    console.error(e);
    return NextResponse.json(
      { status: "fail", data: e.message },
      { status: 500 }
    );
  }
}
