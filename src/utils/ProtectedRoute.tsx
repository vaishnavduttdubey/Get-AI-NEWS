import { PropsWithChildren, useEffect } from "react";
import useUserDataStore from "@/zustang/useUserData";
import { useNavigate } from "react-router-dom";

type ProtectedRouteProps = PropsWithChildren<{}>;

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isLoggedIn } = useUserDataStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) navigate("/login", { replace: true });
  }, [navigate, isLoggedIn]);

  return <>{isLoggedIn ? children : null}</>;
};

export default ProtectedRoute;
