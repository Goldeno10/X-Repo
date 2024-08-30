import { sort } from "fast-sort";
import Link from "next/link";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortBy: string;
}

const UserTable = async ({ sortBy }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  let users: User[] = await res.json();
  const sortedUsers = sort(users).asc(
    sortBy === "email" ? (u) => u.email : (u) => u.name
  );

  return (
    <>
      <h1>Sort by = {sortBy}</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>
              <Link href="/users?sortBy=name">Name</Link>
            </th>
            <th>
              <Link href="/users?sortBy=email">Email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserTable;
