import prisma from '../../utils/prisma';

// create a type based on prisma User but without password

interface IUser {
  email: string;
  name: string;
}

const ListUsers = async (): Promise<IUser[]> => {
  const users = await prisma.user.findMany({
    select: {
      name: true,
      email: true,
    },
  });

  return users;
};

export default ListUsers;
