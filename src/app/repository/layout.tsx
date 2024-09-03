import React from "react";
import SideBar from "./SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen overflow-auto">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6 overflow-y-auto scrollbar-hide">
        {children}
      </main>
    </div>
  );
}
