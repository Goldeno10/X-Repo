/* eslint-disable @next/next/no-img-element */
"use client";
import { signIn, useSession } from "next-auth/react";
import React, { useState } from "react";

const categories = ["Computer Engineering", "Electrical Engineering"];
const allowedTypes = [
  "image/jpeg",
  "image/png",
  "application/pdf",
  "application/msword",
  "application/vnd.ms-excel",
  "application/vnd.ms-powerpoint",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "video/mp4",
];
const maxFileSize = 20 * 1024 * 1024; // 20 MB

const UploadPage = () => {
  const { data: session } = useSession();
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Computer Engineering");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (!session) {
    return (
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-4 items-center min-h-screen">
        <div className="md:col-span-2">
          <img
            src="/registration_page_banner.webp"
            alt="Banner"
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
        </div>
        <div className="md:col-span-1 space-y-6">
          <h1 className="text-2xl font-bold text-center">Upload Material</h1>
          <p className="text-red-500 text-center">
            You must be logged in to upload files.
          </p>
          <button onClick={() => signIn()} className="btn btn-primary w-full">
            Sign In
          </button>
        </div>
      </div>
    );
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (
      selectedFile &&
      allowedTypes.includes(selectedFile.type) &&
      selectedFile.size <= maxFileSize
    ) {
      setFile(selectedFile);
      setError("");
    } else {
      setError("Invalid file type or file size too large.");
      setFile(null);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!session) {
      setError("You must be logged in to upload files.");
      return;
    }
    if (!file) {
      setError("No valid file selected.");
      return;
    }

    const formData = new FormData();
    formData.append("files", file);
    formData.append("name", name);
    formData.append("category", category);
    formData.append("uploaderId", session.user!.email ?? "");

    setIsLoading(true);
    try {
      const response = await fetch("/api/materials/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const result = await response.json();
      console.log(result);
      alert("Upload successful!");
      setIsLoading(false);
    } catch (error) {
      console.error("Upload error:", error);
      setError((error as Error).message || "Upload failed");
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-4 items-center min-h-screen">
      <div className="md:col-span-2">
        <img
          src="/registration_page_banner.webp"
          alt="Banner"
          className="rounded-lg shadow-lg w-full h-full object-cover"
        />
      </div>
      <div className="md:col-span-1 space-y-6">
        <h1 className="text-2xl font-bold text-center">Upload Material</h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleUpload} className="space-y-4">
          <input
            type="text"
            placeholder="Enter material name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered w-full"
            required
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="select select-bordered w-full"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <input
            type="file"
            onChange={handleFileChange}
            className="input input-bordered w-full"
            required
          />
          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={isLoading}
          >
            {isLoading ? "Uploading..." : "Upload"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadPage;
