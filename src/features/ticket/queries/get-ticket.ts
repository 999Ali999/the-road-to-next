import prisma from "@/lib/prisma"

export const getTicket = async (id: string) => {
  return await prisma.ticket.findUnique({
    where: {
      id
    }
  })  
}

//  this is request memoization

// export const getTicket = cache( async (id: string) => {
//   return await prisma.ticket.findUnique({
//     where: {
//       id
//     }
//   })  
// })