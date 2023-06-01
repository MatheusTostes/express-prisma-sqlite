import { User } from '@prisma/client';
import prisma from '../../utils/prisma';

interface IUser {
  id: string;
  email: string;
  name: string;
  password: string;
  login: string;
}

const UpdateService = async (data: IUser): Promise<User> => {
  const { id, email, name, password, login } = data;

  let user = await prisma.user.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!user) {
    throw new Error('USER_NOT_FOUND');
  }

  user = await prisma.user.update({
    where: {
      id: Number(id),
    },
    data: {
      email,
      name,
      password,
      login,
    },
  });

  return user;
};

export default UpdateService;
