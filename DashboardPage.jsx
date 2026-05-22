import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();

  const user = auth.currentUser;

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="dashboard">
      <h1>Welcome to VerifyKE</h1>

      <h2>{user?.displayName || "User"}</h2>

      <p>{user?.email}</p>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default DashboardPage;