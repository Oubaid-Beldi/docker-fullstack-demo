import React, { useState } from "react";
import axios from "axios";
import Loader from "./Loader";

export default function UserForm({ onUserAdded = () => {} }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      await axios.post("/api/users", { name, email });
      setName("");
      setEmail("");
      onUserAdded();
    } catch (err) {
      setError(err.message || "Failed to add user");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled={submitting}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={submitting}
        />
      </div>

      {submitting ? (
        <Loader message="Adding user..." />
      ) : (
        <button type="submit">Add User</button>
      )}

      {error && <div className="error">{error}</div>}
    </form>
  );
}
