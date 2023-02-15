import Home from "./Home";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../components/contexts/UserContext";

export default function Users() {
  const navigate = useNavigate;
  const { currentUser } = useContext(UserContext);
  return (
    <div>
      <button
        onClick={() => {
          navigate(`login/${currentUser.userName}`);
        }}
      >
        Log Out
      </button>
    </div>
  );
}
