import { VariantProps, cva } from "class-variance-authority"
import { FC } from "react"

const CardVariants = cva(
  "h-full bg-white shadow-lg",
  {
    variants: {
      type: {
        mini: "w-1/4",
        mid: "w-1/2",
        full: "w-full",
      },
    },
  }
)

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof CardVariants> {}

export const Card: FC<CardProps> = ({
  children,
  type,
  className,
  ...props
}) => {
  return (
    <div className={CardVariants({ className, type })} {...props}>
      {children}
    </div>
  )
}
