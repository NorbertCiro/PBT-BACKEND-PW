import { MyContext } from '../../../context/index';

const getTopUsersByMonitoringCount = async (
  _: unknown,
  args: { start: Date; end: Date },
  context: MyContext
) => {
  try {
    const topUsers = await context.prisma.userMonitoring.findMany({
      take: 3,
      orderBy: { usage: 'desc' },
      where: {
        createdAt: {
          gte: args.start,
          lte: args.end,
        },
      },
      select: {
        id: true,
        usage: true,
        description: true,
        createdAt: true,
        User: {
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
      },
    });

    return topUsers;
  } catch (error) {
    throw new Error("Error al obtener los tres usuarios principales por registros en UserMonitoring");
  }
};

export default getTopUsersByMonitoringCount;