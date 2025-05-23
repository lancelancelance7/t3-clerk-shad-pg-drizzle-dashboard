import { SignUp } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <SignUp />
    </div>
  );
}
