import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

interface IUser {
  email: string;
  name: string;
  password: string;
  login: string;
}

const CreateService = async (data: IUser): Promise<User> => {
  const { email, name, password, login } = data;

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
      login,
    },
  });

  return user;
};

export default CreateService;
