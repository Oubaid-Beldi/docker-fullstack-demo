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
        <div className="error">{error}</div>
        <button onClick={fetchUsers} style={{ marginTop: 16 }}>
          Retry
        </button>
      </div>
    );

  if (!users.length)
    return (
      <div className="empty-state">
        <p>No users yet. Add your first user above!</p>
      </div>
    );

  return (
    <div className="user-list-container">
      <h2>Users</h2>
      <div className="user-grid">
        {users.map((u) => (
          <div className="user-card" key={u.id || u._id}>
            <div className="user-name">{u.name}</div>
            {u.email && <div className="user-email">{u.email}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
