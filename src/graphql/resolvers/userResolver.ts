import { MyContext } from '../../context/index';

const userResolver = {
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

    getUserByEmail: async (_: unknown, args: { email: string }, context: MyContext) => {
      try {
        const user = await context.prisma.user.findUnique({
          where: {
            email: args.email,
          },
          select: {
            id: true,
            name: true,
            roleId: true,
          },
        });

        if (!user) {
          throw new Error("Usuario no encontrado");
        }

        return user;
      } catch (error) {
        throw new Error("Error al obtener usuario por correo electrónico");
      }
    },
  },
};

module.exports = userResolver;

