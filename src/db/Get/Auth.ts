import prisma from "@/utils/Prisma"

export async function Auth(login: string, password: string) {
  try {
    const user = await prisma.utilisateur.findFirst({
      where: {
        LOGIN: login,
        PASSWORD: password,
      },
    })
    await prisma.$disconnect
    return user
  } catch (e) {
    await prisma.$disconnect
    throw Error("something went wrong with auth" + e)
  }
}
