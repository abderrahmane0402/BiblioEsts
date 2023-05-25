import { Metadata } from "next"
import { FC, ReactNode } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Biblio",
  description: "application de gestion de bibliothique",
}

interface RootLayoutProps {
  children: ReactNode
}


const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang='en'>
      <body className='flex flex-col bg-[#F4F5FA] h-screen'>
        {children}
        <div id='modal'></div>
      </body>
    </html>
  )
}
export default RootLayout
