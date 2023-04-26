import { cn } from "@/utils/cn"
import { VariantProps, cva } from "class-variance-authority"
import { ClassValue } from "clsx"
import Link, { LinkProps } from "next/link"
import { AnchorHTMLAttributes, FC, ReactNode } from "react"

const MLinkVariants = cva("cursor-pointer select-none transition-colors", {
  variants: {
    type: {
      nrm: "h-auto w-auto",
      nav: "box-border w-full h-12 flex justify-start items-center",
      link: "underline underline-offset-2",
      logo: "h-full w-full p-3",
    },
    font: {
      lg: "font-semibold text-xl tracking-wide",
      md: "font-medium text-lg",
      sm: "font-light text-sm tracking-tight",
      none: "",
    },
  },
  defaultVariants: {
    type: "nrm",
    font: "md",
  },
})

interface MLinkProps extends LinkProps, VariantProps<typeof MLinkVariants> {
  children: ReactNode
  className?: string
}

const MLink: FC<MLinkProps> = ({
  className,
  children,
  type,
  font,
  ...props
}) => {
  return (
    <Link className={cn(MLinkVariants({ className, type, font }))} {...props}>
      {children}
    </Link>
  )
}

export default MLink
