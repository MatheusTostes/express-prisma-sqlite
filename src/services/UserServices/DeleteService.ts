import prisma from '../../utils/prisma';

const DeleteService = async (id: string): Promise<void> => {
  const user = await prisma.user.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!user) {
    throw new Error('USER_NOT_FOUND');
  }

  await prisma.user.delete({
    where: {
      id: Number(id),
    },
  });
};

export default DeleteService;
