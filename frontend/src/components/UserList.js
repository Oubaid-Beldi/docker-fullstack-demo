import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      // If you have "proxy" in package.json this can be just '/api/users'
      const res = await axios.get("/api/users");
      setUsers(res.data || []);
    } catch (err) {
      setError(err.message || "Failed to fetch users");
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <Loader message="Loading users..." />;

  if (error)
    return (
      <div>
        <div style={{ color: "red", marginBottom: 8 }}>Error: {error}</div>
        <button onClick={fetchUsers}>Retry</button>
      </div>
    );

  if (!users.length) return <div>No users found.</div>;

  return (
    <ul>
      {users.map((u) => (
        <li key={u.id || u._id}>
          {u.name} {u.email ? `- ${u.email}` : ""}
        </li>
      ))}
    </ul>
  );
}
