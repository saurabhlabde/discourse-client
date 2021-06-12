import Head from "next/head";

// component
import { IndexPage } from "../modules/index";

const Home = () => {
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
