import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user, setUser } = useContext(UserContext);
  const handleLogin = () => {
    setUser({ id: 1, name: "Mert", surname: "Çiril" });
  };
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <br />
      <code>{JSON.stringify(user)}</code>
      <br />
      {!user ? (
        <button onClick={handleLogin}>Login</button>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}
    </div>
  );
}

export default Profile;
