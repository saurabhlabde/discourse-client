import Link from "next/link";

export const IndexPage = () => {
  return (
    <>
      <h1>Hello</h1>
      <Link href="/login">
        <div>
          <h1>LOG IN</h1>
        </div>
      </Link>
      <Link href="/register">
        <div>
          <h1>SIGN UP</h1>
        </div>
      </Link>
    </>
  );
};
