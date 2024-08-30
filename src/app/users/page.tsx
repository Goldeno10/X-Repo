import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";

interface Props {
  searchParams: {
    sortBy: string;
  };
}

const UsersPage = async ({ searchParams: { sortBy } }: Props) => {
  return (
    <>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      <h1> Users</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <UserTable sortBy={sortBy} />
      </Suspense>
    </>
  );
};

export default UsersPage;
