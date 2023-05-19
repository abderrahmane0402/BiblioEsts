import "./globals.css"
import { Aleo, Nunito } from "next/font/google"
import { Metadata } from "next"
import { FC, ReactNode } from "react"
import { NextFont } from "next/dist/compiled/@next/font"

export const metadata: Metadata = {
  title: "Biblio",
  description: "application de gestion de bibliothique",
}

interface RootLayoutProps {
  children: ReactNode
}

const nunito: NextFont = Aleo({ weight: "700", subsets: ["latin"] })

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang='en' className={nunito.className}>
      <body className='flex flex-col bg-platinum h-screen'>
        {children}
        <div id='modal'></div>
      </body>
    </html>
  )
}
export default RootLayout
