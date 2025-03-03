import { useState } from "react";
import Dashboard from "./Dashboard";
import { DashboardContext, User } from "./useContext";

function Index() {
  const [user] = useState<User>({ name: "Mridul", isSubscribed: true });
  return (
    <div>
      <DashboardContext.Provider value={user}>
        <Dashboard />
      </DashboardContext.Provider>
    </div>
  );
}

export default Index;
