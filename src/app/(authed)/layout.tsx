import "~/styles/globals.css";

import { type Metadata } from "next";
import { UserButton } from "@clerk/nextjs";
import { SidebarTrigger } from "~/components/ui/sidebar";
import { SidebarProvider } from "~/components/ui/sidebar";
import { AppSidebar } from "~/components/side-bar";

export const metadata: Metadata = {
  title: "Handing Agent Dashboard",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function AuthedLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
