"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <div className="flex bg-slate-200 p-5">
      <Link href="/" className="mr-5">
        Home
      </Link>
      <Link href="/users" className="mr-5">
        User
      </Link>
      {status === "loading" && <div>Loading...</div>}

      {status === "authenticated" && (
        <Link href="/api/auth/signout" className="mr-5">
          Sign Out
        </Link>
      )}
      {status === "authenticated" && (
        <>
          <div className="mr-5">{session.user?.name}</div>
          <Link href="/api/auth/signout" className="mr-5">
            Sign Out
          </Link>
        </>
      )}
    </div>
  );
};

export default NavBar;
