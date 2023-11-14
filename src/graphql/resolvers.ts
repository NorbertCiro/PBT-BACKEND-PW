import { MyContext } from '../context/index';
export const resolvers = {
  Query: {
    getUsers: async (_: unknown, _args: unknown, context: MyContext) => {
      try {

        const users = await context.prisma.user.findMany({
          select: {
            id: true,
            name: true,
            roleId: true,
          },
        });
        return users;

      } catch (error) {
        throw new Error("Error al obtener los usuarios");
      }
    },

    getUserById: async (_:unknown, args: {userId:string} , context:MyContext) => {
      try {
        const user = await context.prisma.user.findUnique({
          where: {
            id: args.userId,
          },
          select: {
            id: true,
            name: true,
            roleId: true,
          },
        });

        return user;
      } catch (error) {
        throw new Error("Error al obtener usuario por ID");
      }
    },
    getTokenSession: async(_: unknown, args: {userId:string}, context: MyContext) => {
      try {
        const token = await context.prisma.session.findMany({
          where: {
            userId: args.userId
          },
          select: {
            sessionToken: true,
          },
        });
        return token? {sessionToken:token[0].sessionToken}: null;
      } catch (error) {
        throw new Error("Error al obtener token de sesión");
      } 
    },
  },
  Mutation: {},
};