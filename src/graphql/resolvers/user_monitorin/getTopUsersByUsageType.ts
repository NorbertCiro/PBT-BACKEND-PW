import { MyContext } from '../../../context/index';

const getTopUsersByUsageType = async (
  _: unknown,
  args: { type: string; countryId: string; start: Date; end: Date },
  context: MyContext
) => {
  try {
    // Obtener los tres usuarios principales por tipo específico de uso, en un Country y rango de tiempo
    const topUsers = await context.prisma.userMonitoring.findMany({
      // Limitar la consulta a tres resultados
      take: 3,
      // Ordenar por la columna 'usage' de forma descendente
      orderBy: { usage: 'desc' },
      // Definir condiciones para filtrar los resultados
      where: {
        description: args.type, // Filtrar por tipo específico de uso
        createdAt: {
          gte: args.start, // Filtrar por fecha de creación mayor o igual a la fecha de inicio
          lte: args.end,   // Filtrar por fecha de creación menor o igual a la fecha de fin
        },
        User: {
          some: {
            Country: {
              some: {
                id: args.countryId, // Filtrar por el ID del país proporcionado
              },
            },
          },
        },
      },
      // Seleccionar los campos que se devolverán en el resultado
      select: {
        id: true, // Incluir el ID de UserMonitoring
        usage: true, // Incluir el valor de 'usage'
        description: true, // Incluir la descripción
        createdAt: true, // Incluir la fecha de creación
        User: {
          // Incluir información específica del usuario
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
      },
    });

    // Devolver los resultados obtenidos
    return topUsers;
  } catch (error) {
    // Capturar y lanzar un error en caso de problemas
    throw new Error("Error al obtener los tres usuarios principales por tipo de uso en un país");
  }
};

export default getTopUsersByUsageType;
