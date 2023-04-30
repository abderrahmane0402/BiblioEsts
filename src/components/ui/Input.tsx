import { cn } from "@/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import { FC } from "react";

const InputVariants = cva(
    "h-8 w-full bg-slate-200 border-2 border-blue-700/50 hover:border-blue-700  focus:border-blue-700 focus:outline-none rounded-md  font-thin text-lg"
);

interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof InputVariants> { }

const Input: FC<InputProps> = ({ className, ...props }) => {
    return <input className={cn(InputVariants({ className }))} {...props} />;
};

export default Input;
