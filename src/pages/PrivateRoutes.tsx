import type { AuthUser } from "@/types/user";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = ({ user }: { user: AuthUser | null }) => {
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
