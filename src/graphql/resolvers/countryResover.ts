import { MyContext } from '../../context/index';

const countryResolver = {
  Query: {
    getCountries: async (_: unknown, _args: unknown, context: MyContext) => {
      try {
        const countries = await context.prisma.country.findMany({
          select: {
            id: true,
            name: true,
          },
        });
        return countries;
      } catch (error) {
        throw new Error("Error al obtener los países");
      }
    },
  },
};

module.exports = countryResolver;
