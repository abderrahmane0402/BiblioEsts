import { cn } from "@/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import { FC } from "react";

const ButtonVariants = cva(
  " hover:shadow-[0_0_0_1px_black]  focus:shadow-[0_0_0_2px] rounded-[4px]",
  {
    variants: {
      size: {
        full: "w-full  h-12  flex items-center justify-center  my-4 font-semibold text-xl ",
        lg: "w-[179px] h-[41px]  flex  items-center justify-center ",
        md : "w-2/5 flex h-10  items-center justify-center  my-4 font-semibold text-xl"
      },
    },
    defaultVariants: {
      size: "lg",
    },
  }
);
interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {}

const Button: FC<ButtonProps> = ({ children, className, size, ...props}) => {
  return <button className={cn(ButtonVariants({size,className}))} {...props}>{children}</button>;
};

export default Button;
