import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import { useState } from "react";

function App() {
  const [refresh, setRefresh] = useState(false);
  return (
    <div>
      <h1>User Management</h1>
      <div className="container">
        <UserForm onUserAdded={() => setRefresh(!refresh)} />
        <UserList key={refresh} />
      </div>
    </div>
  );
}

export default App;
