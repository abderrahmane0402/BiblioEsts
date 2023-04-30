import { cn } from "@/utils/cn"
import { VariantProps, cva } from "class-variance-authority"
import { type } from "os"
import { FC, ParamHTMLAttributes } from "react"

const ParagraphVariants = cva("font-normal flex items-center", {
  variants: {
    type: {
      sub_title: "text-gray-500",
      nrm: "text-black",
      nav: "text-white",
      sub_nav: "hover:text-[#CA3CFF]",
      warning:"text-red-700 font-bold"
    },
    size: {
      lg: "text-xl",
      md: "text-lg",
      sm: "text-md",
      xl: "font-bold text-3xl tracking-wide",
    },
  },
  defaultVariants: {
    type: "nrm",
    size: "sm",
  },
})

interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof ParagraphVariants> {
  active?: boolean
}

const Paragraph: FC<ParagraphProps> = ({
  active,
  type,
  size,
  className,
  children,
  ...props
}) => {
  let style: String | undefined
  if (type == "sub_nav") {
    style = active ? "text-[#CA3CFF]" : "text-white"
  }

  return (
    <p
      className={cn(ParagraphVariants({ className, size, type }), style)}
      {...props}
    >
      {children}
    </p>
  )
}

export default Paragraph
