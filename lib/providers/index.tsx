"use client";

import AuthProvider from "./AuthProvider";

const CustomProvider = ({ children }: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default CustomProvider;
