import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "./components/home/Footer";
import { Header } from "./components/home/Header";
import background from "@/../public/images/black-background-here.jpg";
import styles from "./styles.module.css";
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
        <Header/>
        <div className={styles.homeHereBackground}>
            <Image src={background} alt={"background image"} fill/>
        </div>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
