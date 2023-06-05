import { NextFunction, Request, Response } from 'express';
import prisma from '../utils/prisma';

const passwordMinLength = 6;

const checkEmailInUse = async (emailToCheck: string, id: number | null) => {
  let whereCondition;

  if (id) {
    whereCondition = {
      email: emailToCheck,
      NOT: {
        id,
      },
    };
  } else {
    whereCondition = {
      email: emailToCheck,
    };
  }

  const emailInUse = await prisma.user.findFirst({
    where: whereCondition,
  });
  return emailInUse;
};

const checkLoginInUse = async (loginToCheck: string, id: number | null) => {
  let whereCondition;

  if (id) {
    whereCondition = {
      login: loginToCheck,
      NOT: {
        id,
      },
    };
  } else {
    whereCondition = {
      login: loginToCheck,
    };
  }

  const loginInUse = await prisma.user.findFirst({
    where: whereCondition,
  });
  return loginInUse;
};

const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

const checkDataUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void | Response> => {
  const id = Number(req.params.id) || null;
  const { name, email, password, login } = req.body;

  let message;

  if (!name) {
    message = 'NAME_REQUIRED';
  }
  if (!email) {
    message = 'EMAIL_REQUIRED';
  }
  if (await checkEmailInUse(email, id)) {
    message = 'EMAIL_ALREADY_IN_USE';
  }
  if (!email.match(emailRegex)) {
    message = 'INVALID_EMAIL';
  }
  if (!password || password.length < passwordMinLength) {
    message = 'PASSWORD_MUST_CONTAIN_AT_LEAST_6_CHARACTERS';
  }
  if (!login) {
    message = 'LOGIN_REQUIRED';
  }
  if (await checkLoginInUse(login, id)) {
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
