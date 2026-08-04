import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";

export const metadata: Metadata = { title: "Future Brand Lab", description: "Global Technology × Brand Intelligence System" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><div className="min-h-screen lg:flex"><Sidebar /><main className="min-w-0 flex-1">{children}</main></div></body></html>;
}
