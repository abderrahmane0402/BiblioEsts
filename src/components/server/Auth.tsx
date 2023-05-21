"use server";

import { Authentication } from "@/db/Post/Auth";
import { cookies } from "next/headers";
export async function Auth(formData: FormData) {
  try {
    const login = formData.get("login") as string,
      pass = formData.get("pass") as string;
    const user = await Authentication(login, pass);
    if (user) {
      cookies().set("login", login);
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
}
