import { useRouter } from "next/router";
import { useEffect } from "react";

export const LogoutPage = () => {
  const router = useRouter();

  useEffect(() => {
    removeToken();
    router.push("/login");
  }, []);

  const removeToken = () => {
    localStorage.removeItem("JWT_TOKEN");
    localStorage.removeItem("USER");
    localStorage.removeItem("UID");
  };

  return <></>;
};
