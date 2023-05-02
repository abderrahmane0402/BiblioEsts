import { cn } from "@/utils/cn"
import { VariantProps, cva } from "class-variance-authority"
import { FC } from "react"

const ButtonVariants = cva(
  "hover:shadow-[0_0_0_1px_black]  focus:shadow-[0_0_0_2px] rounded-[4px] flex items-center justify-center",
  {
    variants: {
      size: {
        full: "w-full h-10 font-semibold text-xl px-2 py-2",
        lg: "w-32 h-10",
        md: "w-28 h-10 font-semibold text-xl",
        sm:'w-20 h-9',
        auto:'px-3 py-2'
      },
      btype: {
        submit: "bg-gloucous text-white",
        delete: "bg-rblack text-white",
        warning: "bg-red-700 text-white/80",
      },
    },
    defaultVariants: {
      size: "lg",
      btype: "submit",
    },
  }
)
interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {}

const Button: FC<ButtonProps> = ({
  children,
  className,
  size,
  btype,
  ...props
}) => {
  return (
    <button
      className={cn(ButtonVariants({ size, className, btype }))}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
