"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

const SessionValidate = () => {
  const router = useRouter()
  useEffect(() => {
    if (!sessionStorage.getItem("login")) router.push("/")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <></>
}

export default SessionValidate
