import { NextFunction, Request, Response } from 'express';
import prisma from '../utils/prisma';

const checkEmailInUse = async (emailToCheck: string) => {
  const emailInUse = await prisma.user.findUnique({
    where: {
      email: emailToCheck,
    },
  });
  return emailInUse;
};

const checkLoginInUse = async (loginToCheck: string) => {
  const loginInUse = await prisma.user.findUnique({
    where: {
      login: loginToCheck,
    },
  });
  return loginInUse;
};

const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

const checkDataUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void | Response> => {
  const { name, email, password, login } = req.body;

  let message;

  if (!name) {
    message = 'NAME_REQUIRED';
  } else if (!email) {
    message = 'EMAIL_REQUIRED';
  } else if (await checkEmailInUse(email)) {
    message = 'EMAIL_ALREADY_IN_USE';
  } else if (!email.match(emailRegex)) {
    message = 'INVALID_EMAIL';
  } else if (!password || password.length < 5) {
    message = 'PASSWORD_MUST_CONTAIN_AT_LEAST_6_CHARACTERS';
  } else if (!login) {
    message = 'LOGIN_REQUIRED';
  } else if (await checkLoginInUse(login)) {
    message = 'LOGIN_ALREADY_IN_USE';
  }

  if (message) {
    return res.status(400).json({
      status: 'error',
      message,
    });
  }

  return next();
};

export default checkDataUserMiddleware;
