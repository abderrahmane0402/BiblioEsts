import prisma from "@/utils/Prisma"

export async function Auth(login: string, password: string) {
  try {
    const user = await prisma.utilisateur.findFirst({
      where: {
        LOGIN: login,
        PASSWORD: password,
      },
    })
    return user
  } catch (e) {
    throw Error("something went wrong with auth" + e)
  }
}
