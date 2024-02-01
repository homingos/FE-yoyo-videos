import { signOut } from "next-auth/react";
import React from "react";
import DashBoardClient from "./dashBoardClient";

export default function Page() {
  return (
    <DashBoardClient />
  );
}
