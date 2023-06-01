import prisma from '../../utils/prisma';

// create a type based on prisma User but without password

interface IUser {
  id: number;
  email: string;
  name: string;
  login: string;
  createdAt: Date;
  updatedAt: Date;
}

const ListUsers = async (): Promise<IUser[]> => {
  const users = await prisma.user.findMany({
    // exclude password
    select: {
      id: true,
      name: true,
      email: true,
      login: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return users;
};

export default ListUsers;
