import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { HydrateClient } from "~/trpc/server";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="flex w-full items-center justify-between p-3">
          <p>Handing Agent</p>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <Button>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          </SignedIn>
        </div>
        <p className="m-auto text-2xl font-bold">
          Welcome to the Handing Agent
        </p>
      </main>
    </HydrateClient>
  );
}
