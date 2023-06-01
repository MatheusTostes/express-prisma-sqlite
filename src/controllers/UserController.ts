import { Request, Response } from 'express';
import UpdateService from '../services/UserServices/UpdateService';
import CreateService from '../services/UserServices/CreateService';

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
