import { Button, Button2 } from "./Button";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="h-full w-full">{children}</div>
    </div>
  );
};

export default Layout;
