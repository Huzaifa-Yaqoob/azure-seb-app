import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Azure Web App — Next.js",
  description: "A Next.js application deployed on Azure App Service with API routes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <header className="border-b border-zinc-200 px-6 py-4 dark:border-zinc-800">
          <nav className="mx-auto flex max-w-5xl items-center justify-between">
            <Link href="/" className="text-lg font-bold tracking-tight">
              Azure Web App
            </Link>
            <div className="flex gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
              <Link href="/" className="hover:text-zinc-900 dark:hover:text-zinc-100">
                Home
              </Link>
              <Link href="/about" className="hover:text-zinc-900 dark:hover:text-zinc-100">
                About
              </Link>
              <Link href="/api/health" className="hover:text-zinc-900 dark:hover:text-zinc-100">
                Health
              </Link>
            </div>
          </nav>
        </header>
        {children}
        <footer className="border-t border-zinc-200 px-6 py-6 text-center text-sm text-zinc-500 dark:border-zinc-800">
          &copy; {new Date().getFullYear()} Azure Web App. Built with Next.js.
        </footer>
      </body>
    </html>
  );
}
