import { FC } from "react";
import Link from "next/link";

// component
import { ChatUser } from "./chatUser";

interface IIndexPage {}

export const IndexPage: FC<IIndexPage> = ({}) => {
  return <ChatUser />;
};
