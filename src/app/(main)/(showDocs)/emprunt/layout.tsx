import Link from "next/link";
import { Button, Button2, Button3 } from "./Button";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex justify-center items-center pt-2 gap-4">
        <Button2 name="livre" />
        <Button2 name="pfe" />
        <Button3 name="encours" />
        <Button3 name="historique" />
      </div>
      <div className="h-full w-full">{children}</div>
    </div>
  );
};

export default Layout;
