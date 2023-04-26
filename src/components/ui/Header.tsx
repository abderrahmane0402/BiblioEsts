import { cn } from "@/utils/cn"
import { VariantProps, cva } from "class-variance-authority"
import { FC } from "react"

const HeaderVariants = cva("px-2 py-2 ", {
  variants: {
    size: {
      lg: "font-bold text-3xl tracking-wide",
      md: "font-semibold text-2xl tracking-normal",
      sm: "font-normal text-xl tracking-tight",
      full : "w-full text-[15px]",
      aj : "w-[179px] h-[41] bg-[#CA3CFF]/80 text-white"
    },
  },
  defaultVariants: {
    size: "lg",
  },
})

interface HeaderProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof HeaderVariants> {}

const Header: FC<HeaderProps> = ({ children, className, size, ...props }) => {
  return (
    <h1 className={cn(HeaderVariants({ className, size }))} {...props}>
      {children}
    </h1>
  )
}

export default Header
