import { cn } from "@/utils/cn";
import * as Toast from "@radix-ui/react-toast";
import { cva, VariantProps } from "class-variance-authority";
import { FC } from "react";

const Provider = Toast.Provider;
const ToastViewport = Toast.Viewport;
const ToastActions = Toast.Action;

const RootVariants = cva(
  "w-80 h-auto rounded-lg p-4 shadow-lg flex justify-between items-center gap-2",
  {
    variants: {
      Ttype: {
        success: "bg-green-500 text-white",
        error: "bg-red-500 text-white",
        warning: "bg-yellow-500 text-white",
        info: "bg-blue-500 text-white",
        default: "bg-gray-500 text-white",
      },
    },
    defaultVariants: {
      Ttype: "default",
    },
  }
);

interface RootProps
  extends Toast.ToastProps,
    VariantProps<typeof RootVariants> {
  children: React.ReactNode;
}

const Root: FC<RootProps> = ({ children, className, Ttype, ...props }) => {
  return (
    <Toast.Root className={cn(RootVariants({ className, Ttype }) , 'data-[state=open]:animate-slideIn data-[state=closed]:animate-hide')} {...props}>
      {children}
    </Toast.Root>
  );
};

interface TitleProps extends Toast.ToastTitleProps {}

const Title: FC<TitleProps> = ({ children, className, ...props }) => {
  return (
    <Toast.Title className={cn(className, "text-lg font-bold")} {...props}>
      {children}
    </Toast.Title>
  );
};

interface DescriptionProps extends Toast.ToastDescriptionProps {}

const Description: FC<DescriptionProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Toast.Description
      className={cn(className, "text-sm font-light")}
      {...props}
    >
      {children}
    </Toast.Description>
  );
};

interface CloseProps extends Toast.ToastCloseProps {}

const Close: FC<CloseProps> = ({ children, className, ...props }) => {
  return (
    <Toast.Close className={cn(className, "text-sm font-light")} {...props}>
      {children}
    </Toast.Close>
  );
};


export {
  Provider,
  ToastViewport,
  ToastActions,
  Root,
  Title,
  Description,
  Close,
};

// default () => (
//   <Toast.Provider>
//     <Toast.Root>
//       <Toast.Title />
//       <Toast.Description />
//       <Toast.Action />
//       <Toast.Close />
//     </Toast.Root>

//     <Toast.Viewport />
//   </Toast.Provider>
// );
