import { useEffect, useState } from "react";
import { getUsers } from "../api/users";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then((data) => setUsers(data.users))
      .catch(() => alert("Unauthorized"));
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
};

export default Users;
