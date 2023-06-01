import { Request, Response } from 'express';
import ListUsers from '../services/UserServices/ListUsers';
import UpdateService from '../services/UserServices/UpdateService';
import CreateService from '../services/UserServices/CreateService';
import ShowService from '../services/UserServices/ShowService';
import DeleteService from '../services/UserServices/DeleteService';

export const createService = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const user = await CreateService(body);

    return res.status(201).json(user);
  } catch (err) {
    return res.status(400).json({ message: (err as Error).message });
  }
};

export const updateService = async (req: Request, res: Response) => {
  const { body } = req;
  const { id } = req.params;

  try {
    const user = await UpdateService({ id, ...body });

    return res.status(201).json(user);
  } catch (err) {
    return res.status(400).json({ message: (err as Error).message });
  }
};

export const listUsers = async (req: Request, res: Response) => {
  try {
    const users = await ListUsers();

    return res.status(200).json(users);
  } catch (err) {
    return res.status(400).json({ message: (err as Error).message });
  }
};

export const showUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await ShowService(id);

    return res.status(200).json(user);
  } catch (err) {
    return res.status(400).json({ message: (err as Error).message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await DeleteService(id);

    return res.status(200).json({ message: 'User deleted' });
  } catch (err) {
    return res.status(400).json({ message: (err as Error).message });
  }
};
