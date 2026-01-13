import { useNavigate } from "react-router-dom";
import "../assets/homepage.css";
export default function Homepage() {
  const navigate = useNavigate();

  return (
    <div className="mainPagelayout">
      <p>this is Homepage</p>
      <button onClick={() => navigate("/login")}>Click to Login</button>
    </div>
  );
}
