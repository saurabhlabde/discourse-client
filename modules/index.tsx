import { FC, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// component
import { ChatUser } from "./chatUser";

export const IndexPage: FC = () => {
  const [hasLoading, setHasLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const token: string | null = localStorage.getItem("JWT_TOKEN");
    if (!token) {
      router.push("/login");
    } else {
      setHasLoading(false);
    }
  }, []);

  if (hasLoading) {
    return <h1>Loading...</h1>;
  }

  if (!hasLoading) {
    return <ChatUser />;
  }
};
