import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: number };
}

const UserDetailPAge = ({ params: { id } }: Props) => {
  if (id <= 0 || id > 10) {
    notFound();
  }

  return <div>UserDetailPAge {id}</div>;
};

export default UserDetailPAge;
