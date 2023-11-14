import { MyContext } from '../../../context/index';

const getUserMonitoringByTimeRange = async (
  _: unknown,
  args: { email: string; start: Date; end: Date },
  context: MyContext
) => {
  try {
    const user = await context.prisma.user.findUnique({
      where: {
        email: args.email,
      },
      select: {
        id: true,
      },
    });

    if (!user) {
      throw new Error("Usuario no encontrado");
    }

    const userMonitoring = await context.prisma.userMonitoring.findMany({
      where: {
        userId: user.id,
        createdAt: {
          gte: args.start,
          lte: args.end,
        },
      },
    });

    return userMonitoring;
  } catch (error) {
    throw new Error("Error al obtener UserMonitoring por rango de tiempo");
  }
};

export default getUserMonitoringByTimeRange;