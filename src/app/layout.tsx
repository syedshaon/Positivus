import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceG = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Positivus",
  description: "Coded by Mashi",
};

import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceG.className} bg-csBG`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
