import { cn } from '@/utils/cn'
import { VariantProps, cva } from 'class-variance-authority'
import { FC } from 'react'

const InputVariants = cva(
    'h-8'
)

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> , VariantProps<typeof InputVariants> {}

const Input: FC<InputProps> = ({className ,...props}) => {
    return <input className={cn(InputVariants({className}))} {...props}/>
}

export default Input