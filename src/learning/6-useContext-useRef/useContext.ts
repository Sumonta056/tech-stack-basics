import { createContext, useContext } from "react";

export interface User {
  name: string;
  isSubscribed: boolean;
}

export const DashboardContext = createContext<User | undefined>(undefined);

export function useUserContext() {
  const user = useContext(DashboardContext);
  if (user === undefined) {
    throw new Error("useUserContext must be used within a DashboardProvider");
  }
  return user;
}
