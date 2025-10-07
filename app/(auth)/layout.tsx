import React from "react";

type AuthLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

function AuthLayout(props: AuthLayoutProps) {
  return <main>{props.children}</main>;
}

export default AuthLayout;
