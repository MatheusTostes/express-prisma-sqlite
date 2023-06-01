import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

interface IUser {
  id: string;
  email: string;
  name: string;
  password: string;
  login: string;
}

const UpdateService = async (data: IUser): Promise<User> => {
  const { id, email, name, password, login } = data;

  const user = await prisma.user.update({
    data: {
      name,
      email,
      password,
      login,
    },
    where: {
      id: Number(id),
    },
  });

  return user;
};

export default UpdateService;
