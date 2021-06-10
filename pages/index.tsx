import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

// component
import { IndexPage } from "../modules/index";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    const token: string | null = localStorage.getItem("JWT_TOKEN");
    if (!token) {
      router.push("/login");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Discourse</title>
        <meta name="description" content="Discourse by discourse" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IndexPage />
    </>
  );
};

export default Home;
