import { useEffect, useState } from "react";
import axios from "axios";
import "./Users.scss";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: string;
}

const User = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  let Users = users.map((user) => (
    <div key={user.id}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/2048px-Breezeicons-actions-22-im-user.svg.png"
        alt="user"
      />
      <h2>
        {user.firstName} {user.lastName}
      </h2>
      <p>{user.age} Ans</p>
    </div>
  ));

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "http://dummyjson.com/users?limit=4&skip"
        );
        setUsers(response.data.users);
      } catch (err) {
        setError("Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return <div className="user container">{Users}</div>;
};

export default User;
