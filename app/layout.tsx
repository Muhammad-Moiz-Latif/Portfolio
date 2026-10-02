import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "./components/nav";

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Moiz Latif — Software Engineer",
  description:
    "Software engineer building digital products from concept to production.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ptSans.className} h-full`}>
      <body className="min-h-dvh bg-paper text-ink antialiased">
        <NavBar />
        {children}
      </body>
    </html>
  );
}