// import prisma from "@/utils/Prisma";
// import {
//   approvisionement,
//   exemplaire,
//   fournisseur,
//   livre,
// } from "@prisma/client";

// export async function setAprolivre(
//   Plivre: approvisionement,
//   fournisseur: any,
//   livre: livre[]
// ) {
//   try {
//     await prisma.approvisionement.create({
//       data: {
//         fournisseur: {
//           create: { ...fournisseur },
//         },
//         contient: {},
//       },
//     });
//     await prisma.$disconnect;
//   } catch (e) {
//     await prisma.$disconnect;
//     throw Error("somthing went wrong" + e);
//   }
// }
