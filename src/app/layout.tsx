import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Metadata } from "next";
import { NextFont } from "next/dist/compiled/@next/font";
import { Roboto } from "next/font/google";
import { FC, ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Biblio",
  description: "application de gestion de bibliothique",
};

interface RootLayoutProps {
  children: ReactNode;
}

const nunito: NextFont = Roboto({ weight: "400", subsets: ["latin"] });

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" className={nunito.className}>
      <body className="flex flex-col bg-platinum h-screen">
        {children}
        <div id="modal"></div>
      </body>
    </html>
  );
};
export default RootLayout;
