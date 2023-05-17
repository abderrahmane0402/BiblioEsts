"use server";
import { Authentication } from "@/db/Post/Auth";

export async function Auth(formData: FormData) {
  try {
    const login = formData.get("login") as string,
      pass = formData.get("pass") as string;
    const user = await Authentication(login, pass);
    return user ? true : false;
  } catch (error) {
    console.log(error);
    return false;
  }
}
