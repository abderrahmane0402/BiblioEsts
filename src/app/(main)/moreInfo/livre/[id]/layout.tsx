import { FC, ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return <div className="h-full w-full flex gap-4 py-3">{children}</div>;
};
export default RootLayout;
