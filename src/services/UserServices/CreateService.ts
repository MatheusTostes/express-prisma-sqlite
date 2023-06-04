import prisma from '../../utils/prisma';

interface IUser {
  email: string;
  name: string;
  password: string;
  login: string;
}

interface IUserReturn {
  email: string;
  name: string;
  login: string;
}

const CreateService = async (data: IUser): Promise<IUserReturn> => {
  const { email, name, password, login } = data;

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
      login,
    },
  });

  return {
    email: user.email,
    name: user.name,
    login: user.login,
  };
};

export default CreateService;
