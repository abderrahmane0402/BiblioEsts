'use client'
import Paragraph from "@/ui/Paragraph"
import { cn } from "@/utils/cn"
import * as RadixForm from "@radix-ui/react-form"
import { FC } from "react"

const FormControl = RadixForm.Control
const FormSubmit = RadixForm.Submit
const FormRoot = RadixForm.Root

interface FormLabelProps extends RadixForm.FormLabelProps {}

const FormLabel: FC<FormLabelProps> = ({ children, className, ...props }) => {
  return (
    <RadixForm.Label  className={cn(className, "")} {...props}>
      <Paragraph size={"sm"}>{children}</Paragraph>
    </RadixForm.Label>
  )
}

interface FormMessageProps extends RadixForm.FormMessageProps {}

const FormMessage: FC<FormMessageProps> = ({ children, ...props }) => {
  return (
    <RadixForm.Message {...props}>
      <Paragraph size={"sm"} type='warning'>
        {children}
      </Paragraph>
    </RadixForm.Message>
  )
}

interface FormFieldProps extends RadixForm.FormFieldProps {}

const FormField: FC<FormFieldProps> = ({ children, className, ...props }) => {
  return (
    <RadixForm.Field className={cn(className, "w-full")} {...props}>
      {children}
    </RadixForm.Field>
  )
}
export { FormLabel, FormMessage, FormField, FormSubmit, FormRoot, FormControl }

// <Form.Root onSubmit={handleSubmit} className="w-full">
//         <Form.Field name='email'>
//           <div className="flex justify-between">
//             <Form.Label>Email</Form.Label>
//           </div>
//           <Input />
//         </Form.Field>
//         {/* <Myinput
//           name='password'
//           label='Password'
//           type='password'
//           onChange={(e) => setPass(e.target.value)}
//         />
//        </div>
//       <br />
//       <button
//         type='submit'
//         className='bg-gray-700 text-white  rounded w-14 h-8 text-center'
//       >
//         {" "}
//         Login{" "}
//       </button>
//       <div className={"pt-3"}>
//         <Link href={"/main"} className='text-blue-500 underline '>
//           Forget_Password?
//         </Link>
//       </div>
//       <div>
//         <Link href={"/login/sign_up"} className='text-blue-500 underline'>
//           Sign_up
//         </Link> */}
//       </Form.Root>
