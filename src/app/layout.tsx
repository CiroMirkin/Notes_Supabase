import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notes",
  description: "Notes app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`darkbody ${inter.className}`}>
        <main className="max-w-6xl mx-auto min-h-screen">
          {children} <Toaster />
        </main>
      </body>
    </html>
  );
}
