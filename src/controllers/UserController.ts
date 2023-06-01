import { Request, Response } from 'express';
import ListUsers from '../services/UserServices/ListUsers';
import UpdateService from '../services/UserServices/UpdateService';
import CreateService from '../services/UserServices/CreateService';
import ShowService from '../services/UserServices/ShowService';

export const createService = async (req: Request, res: Response) => {
  const { body } = req;

  const user = await CreateService(body);

  return res.status(201).json(user);
};

export const updateService = async (req: Request, res: Response) => {
  const { body } = req;
  const { id } = req.params;

  const user = await UpdateService({ id, ...body });

  return res.status(201).json(user);
};

export const listUsers = async (req: Request, res: Response) => {
  const users = await ListUsers();

  return res.status(200).json(users);
};

export const showUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await ShowService(id);

  return res.status(200).json(user);
};
