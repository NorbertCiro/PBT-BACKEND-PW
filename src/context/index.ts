import { PrismaClient } from "@prisma/client";

export interface MyContext {
  req?: String;
  prisma : PrismaClient
  userId?: string
}

// export const context = async ({req }): Promise<MyContext> => {
//   const prisma = new PrismaClient();

//   // Obtener el token del encabezado de autorización
//   const token = req.headers.authorization;

//   const userId = validateAndDecodeToken(token);

//   return {
//     prisma,
//   };
// };

// // Función de validación y decodificación del token (deberías implementar tu lógica real aquí)
// function validateAndDecodeToken(token: string): string | null {
//   // Implementa tu lógica de validación de token aquí
//   // Si el token es válido, decódifica y devuelve el userId
//   // Si no es válido, devuelve null
//   return null;
// }