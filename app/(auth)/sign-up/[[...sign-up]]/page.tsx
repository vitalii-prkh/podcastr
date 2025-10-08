import {SignUp} from "@clerk/nextjs";

function PageSignIn() {
  return (
    <div className="flex-center glassmorphism-auth h-screen w-full">
      <SignUp />
    </div>
  );
}

export default PageSignIn;
