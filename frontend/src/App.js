import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import { useState } from "react";

function App() {
  const [refresh, setRefresh] = useState(false);
  return (
    <div>
      <UserForm onUserAdded={() => setRefresh(!refresh)} />
      <UserList key={refresh}/>
    </div>
  );
}

export default App;
