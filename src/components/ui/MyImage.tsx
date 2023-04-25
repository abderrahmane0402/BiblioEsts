import { FC } from "react"
import Image, { ImageProps, StaticImageData } from "next/image"
import { cn } from "@/utils/cn"

interface MyImageProps extends ImageProps {}

const MyImage: FC<MyImageProps> = ({ className, ...props }) => {
  return (
    <Image
      className={cn(className, "object-cover")}
      fill
      quality={100}
      priority
      {...props}
    />
  )
}

export default MyImage
