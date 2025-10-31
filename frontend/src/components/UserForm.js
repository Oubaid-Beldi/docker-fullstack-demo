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
    <form onSubmit={handleSubmit} style={{ marginBottom: 16 }}>
      <div>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled={submitting}
        />
      </div>
      <div>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={submitting}
        />
      </div>

      {submitting ? (
        <Loader message="Saving..." />
      ) : (
        <button type="submit">Add User</button>
      )}

      {error && <div style={{ color: "red", marginTop: 8 }}>{error}</div>}
    </form>
  );
}
