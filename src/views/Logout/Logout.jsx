import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signOut } from "../..//lib/firebase";
function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    signOut(auth).then(() => {
      navigate("/");
    });
  });
  return <></>;
}

export default Logout;
