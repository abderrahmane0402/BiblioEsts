"use server"

import { cookies } from "next/headers"

const LogOut = async (formData: FormData) => {
  cookies().set("login", "")
  console.log("ok")
}

export default LogOut
