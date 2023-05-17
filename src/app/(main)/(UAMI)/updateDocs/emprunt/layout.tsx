import { Button, Button2 } from "./Button";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex justify-center items-center pt-2 gap-4">
        <Button name="prof" />
        <Button name="etudiant" />
        <Button2 name="livre" />
        <Button2 name="pfe" />
      </div>
      <div className="h-full w-full">{children}</div>
    </div>
  );
};

export default Layout;
