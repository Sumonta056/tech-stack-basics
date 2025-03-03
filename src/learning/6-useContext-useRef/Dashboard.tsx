import Navbar from "./Navbar";
import SideBar from "./SideBar";
import NewPost from "./useRef";
import { useUserContext } from "./useContext";

function Dashboard() {
  const user = useUserContext();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {user.name}</p>
      <p>
        {user.isSubscribed ? "You are subscribed" : "You are not subscribed"}
      </p>
      <div className="grid grid-cols-2 gap-4">
        <Navbar />
        <SideBar />
        <NewPost />
      </div>
    </div>
  );
}

export default Dashboard;
