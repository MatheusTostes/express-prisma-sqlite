import { User } from '@prisma/client';
import prisma from '../../utils/prisma';

const ShowService = async (id: string): Promise<User> => {
  const user = await prisma.user.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!user) {
    throw new Error('USER_NOT_FOUND');
  }

  return user;
};

export default ShowService;
