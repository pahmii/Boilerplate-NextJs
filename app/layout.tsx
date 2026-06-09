import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Client from "./client";
import { cn } from "@/lib/utils";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NEXTJS EXAMPLE",
  description: "NEXTJS EXAMPLE",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        plusJakartaSans.variable,
        plusJakartaSans.className,
        "font-sans",
      )}>
      <body className="min-h-full flex flex-col">
        <Client>{children}</Client>
      </body>
    </html>
  );
}
