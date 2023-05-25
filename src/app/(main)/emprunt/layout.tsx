import { PageHeader2 } from "./Links"
import { Card } from "@/components/ui/Card"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-full h-full flex flex-col gap-2'>
      <div className='h-full pb-2'>
        <Card type={"full"} className='rounded-3xl flex flex-col'>
          <PageHeader2 />
          <div className='h-full w-full'>{children}</div>
        </Card>
      </div>
    </div>
    // <div className="w-full h-full flex flex-col">
    //   <div className="flex justify-center items-center pt-2 gap-4">
    //     <Button2 name="livre" />
    //     <Button2 name="pfe" />
    //     <Button3 name="encours" />
    //     <Button3 name="historique" />
    //   </div>
    //   <div className="h-full w-full">{children}</div>
    // </div>
  )
}

export default Layout
