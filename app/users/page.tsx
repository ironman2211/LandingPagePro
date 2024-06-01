import React from "react";
import Button from "./componenets/Button";
interface User {
  id: number;
  name: string;
}
const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: User[] = await res.json();
  return (
    <div>
      <div>users</div>
      <br />
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <p>{new Date().toLocaleTimeString()}</p>
      <Button></Button>
    </div>
  );
};

export default UsersPage;
