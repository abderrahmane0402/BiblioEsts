import { FC } from "react"
import Image, { ImageProps, StaticImageData } from "next/image"
import { cn } from "@/utils/cn"

interface MyImageProps extends ImageProps {}

const MyImage: FC<MyImageProps> = ({ className, ...props }) => {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      className={cn(className, "object-cover")}
      fill
      quality={100}
      {...props}
    />
  )
}

export default MyImage
