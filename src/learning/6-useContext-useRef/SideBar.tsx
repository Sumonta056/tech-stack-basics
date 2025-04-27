import { useUserContext } from "./useContext";

function SideBar() {
  const user = useUserContext();
  return (
    <div className="text-red-500">You are in the sidebar, {user.name}</div>
  );
}

export default SideBar;
