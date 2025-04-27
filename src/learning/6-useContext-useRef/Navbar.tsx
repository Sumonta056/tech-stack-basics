import { useUserContext } from "./useContext";

function Navbar() {
  const user = useUserContext();
  return (
    <div className="font-bold text-blue-600">
      You are in the Navbar, {user.name}
    </div>
  );
}

export default Navbar;
