import {SignIn} from "@clerk/nextjs";

function PageSignIn() {
  return (
    <div className="flex-center glassmorphism-auth h-screen w-full">
      <SignIn />
    </div>
  );
}

export default PageSignIn;
