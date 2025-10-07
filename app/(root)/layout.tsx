import React from "react";

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

function RootLayout(props: RootLayoutProps) {
  return (
    <div>
      <main>
        <p className="text-white-1">LEFT SIDEBAR</p>
        {props.children}
        <p className="text-white-1">RIGHT SIDEBAR</p>
      </main>
    </div>
  );
}

export default RootLayout;
