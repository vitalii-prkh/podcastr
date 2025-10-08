import React from "react";
import Image from "next/image";

type AuthLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

function AuthLayout(props: AuthLayoutProps) {
  return (
    <main className="relative h-screen w-full">
      <div className="absolute size-full">
        <Image
          src="/images/bg-img.png"
          alt="background"
          fill
          className="size-full"
        />
      </div>
      {props.children}
    </main>
  );
}

export default AuthLayout;
