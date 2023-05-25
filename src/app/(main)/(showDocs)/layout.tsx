import { PageHeader2 } from "@/components/PageHeader2";
import { Card } from "@/ui/Card";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <div className="h-full pb-2">
        <Card type={"full"} className="rounded-3xl flex flex-col">
          <PageHeader2 />
          {children}
        </Card>
      </div>
    </div>
  );
};

export default Layout;
