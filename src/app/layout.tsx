import type { Metadata } from "next";
import { Footer } from "./components/here/home/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Here we go",
  description: "A little page of animation and components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
