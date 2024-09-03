/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  FaFilePdf,
  FaFileWord,
  FaFileImage,
  FaFileVideo,
  FaDownload,
  FaUserCircle,
  FaChevronRight,
  FaHome,
} from "react-icons/fa";
import FileIcon from "@/app/components/FileIcon";
import Link from "next/link";

import { useSession, signOut, signIn } from "next-auth/react";

interface CommentType {
  id: string;
  content: string;
  commentDate: string;
  userId: string; // Assuming the user model has more data you might want to use here
}

interface ItemType {
  id: string;
  name: string;
  type: string;
  size: string;
  fileUrl: string;
  description: string;
  comments: CommentType[];
}

const ItemDetailPage = ({ params: { id } }: { params: { id: string } }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const [item, setItem] = useState<ItemType | null>(null);
  const [comments, setComments] = useState<CommentType[]>([]);
  const [newComment, setNewComment] = useState("");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/materials/${id}`);
        const data = await response.json();
        if (response.ok) {
          setItem(data);
          setComments(data.comments || []);
        } else {
          console.error("Failed to fetch material:", data);
        }
      } catch (error) {
        console.error("Failed to fetch material:", error);
      }
    };
    fetchData();
  }, [id]);

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      try {
        const response = await fetch(`/api/materials/${id}/comments`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content: newComment,
            userId: session?.user?.name,
          }),
        });
        const comment = await response.json();
        if (response.ok) {
          setComments([...comments, comment]);
          setNewComment("");
        } else {
          console.error("Failed to post comment:", comment);
        }
      } catch (error) {
        console.error("Failed to post comment:", error);
      }
    }
  };

  if (!item) {
    return <div className="p-8">Item not found</div>;
  }

  const renderFileContent = () => {
    switch (item.type) {
      case "video/mp4":
        return (
          <video controls className="w-full h-full">
            <source src={item.fileUrl} type="video/mp4" />
          </video>
        );
      case "image/jpeg":
      case "image/png":
        return (
          <img
            src={item.fileUrl}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        );
      default:
        return <FileIcon type={item.type} iconStyle="text-2xl h-full w-full" />;
    }
  };

  return (
    <div
      ref={contentRef}
      className="min-h-screen bg-gray-100 pt-10 overflow-hidden"
    >
      {/* Breadcrumb Navigation */}
      <nav className="py-4 px-6 bg-white border-b">
        <div className="max-w-7xl mx-auto flex items-center space-x-2 text-gray-600 overflow-hidden">
          <FaHome className="text-blue-500" />
          <span
            className="text-sm cursor-pointer hover:underline"
            onClick={() => router.push("/")}
          >
            Home
          </span>
          <FaChevronRight className="text-xs" />
          <span
            className="text-sm cursor-pointer hover:underline"
            onClick={() => router.back()}
          >
            Library
          </span>
          <FaChevronRight className="text-xs" />
          <span className="text-sm text-gray-800 font-semibold text-ellipsis">
            {item.name}
          </span>
        </div>
      </nav>
      <section className="py-10 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {!item.type.includes("video") ? (
            <>
              <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg h-[60vh] grid-rows-3">
                {renderFileContent()}
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">
                  {item.name}
                </h1>
                <p className="text-lg text-gray-600 mb-4">{item.description}</p>
                <div className="text-3xl font-semibold text-blue-600 mb-6">
                  {parseFloat(item.size) > 1024
                    ? `${(parseFloat(item.size) / 1024 / 1024).toFixed(2)} MB`
                    : `${item.size} KB`}
                </div>
                <Link
                  href={item.fileUrl}
                  download
                  className="flex items-center justify-center bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  <FaDownload className="mr-2" /> Download
                </Link>
              </div>
            </>
          ) : (
            <div className="flex-row gap-10">
              <div className="bg-gray-200 mx-auto rounded-lg overflow-hidden shadow-lg h-[75vh] flex-col w-[70vw]">
                {renderFileContent()}
              </div>
              <div className="flex flex-col justify-center pt-5">
                <h1 className="text-2xl font-bold text-gray-800 mb-2 mt-2">
                  {item.name}
                </h1>
                <p className="text-lg text-gray-600 mb-4">{item.description}</p>
                <div className="text-3xl font-semibold text-blue-600 mb-6">
                  {parseFloat(item.size) > 1024
                    ? `${(parseFloat(item.size) / 1024 / 1024).toFixed(2)} MB`
                    : `${item.size} KB`}
                </div>
                <Link
                  href={item.fileUrl}
                  download
                  className="flex items-center justify-center bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 w-3/5"
                >
                  <FaDownload className="mr-2" /> Download
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">
            Discussion Forum
          </h2>
          <form onSubmit={handleCommentSubmit} className="mb-6">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Ask a question or share your thoughts..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
              rows={4}
              required
            />
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition duration-300"
            >
              Post Comment
            </button>
          </form>
          <div className="space-y-4">
            {comments.map((comment, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow"
              >
                <FaUserCircle className="w-8 h-8 text-gray-400" />
                <div className="flex-1">
                  <p className="text-gray-700">{comment.content}</p>
                  <span className="text-xs text-gray-400">
                    Anonymous - Just now
                  </span>
                </div>
              </div>
            ))}
            {comments.length === 0 && (
              <p className="text-gray-600">
                No comments yet. Be the first to comment!
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItemDetailPage;
