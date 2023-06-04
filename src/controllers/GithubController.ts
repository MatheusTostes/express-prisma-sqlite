/* eslint-disable import/prefer-default-export */
import { Request, Response } from 'express';
import ShowService from '../services/GitHubUserServices/ShowService';

export const showUser = async (req: Request, res: Response) => {
  const { githubUser } = req.params;

  try {
    const user = await ShowService(githubUser);

    return res.status(200).json(user);
  } catch (err: any) {
    if (err.response.statusText === 'Not Found') {
      return res.status(404).json({ message: 'USER_NOT_FOUND' });
    }

    return res.status(400).json({ message: err.response.statusText });
  }
};
