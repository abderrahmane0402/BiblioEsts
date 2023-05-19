"use client"
import { useRouter } from "next/navigation"
import Button from "./ui/Button"

const Logout = () => {
  const router = useRouter()
  return (
    <Button
      size={"sm"}
      btype='submit'
      onClick={() => {
        sessionStorage.clear()
        router.push("/")
      }}
    >
      log out
    </Button>
  )
}

export default Logout
