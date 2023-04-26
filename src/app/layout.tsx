
import "./globals.css";
import { Nunito } from "next/font/google";
import { Metadata } from "next";
import { FC, ReactNode } from "react";
import { NextFont } from "next/dist/compiled/@next/font";


export const metadata: Metadata = {
  title: "Biblio",
  description: "application de gestion de bibliothique",
};

interface RootLayoutProps {
  children: ReactNode;
}

const nunito: NextFont = Nunito({ weight: "400", subsets: ["latin"] });

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" className={nunito.className}>
      <body className="flex flex-col bg-platinum h-screen">
        {children}
      </body>
    </html>
  );
};
export default RootLayout;
