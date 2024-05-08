import { Request, Response, NextFunction } from 'express';
import { z, ZodError } from 'zod';
import { StatusCodes } from 'http-status-codes';

/**
 * Middleware function to validate request data against a given schema.
 * @param {z.ZodObject<any, any>} schema - The schema to validate against.
 * @returns {import('express').RequestHandler} - The middleware function.
 */

export function validateData(
  schema: z.ZodObject<any, any>
): import('express').RequestHandler {
  /**
   * Middleware function to validate request data.
   * @param {Request} req - The request object.
   * @param {Response} res - The response object.
   * @param {NextFunction} next - The next middleware function.
   */
  return function (req: Request, res: Response, next: NextFunction) {
    try {
      const allParams = {
        ...req.params,
        ...req.query,
      };
      schema.parse(allParams);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessages = error.errors.map((issue: any) => ({
          message: `${issue.path.join('.')} is ${issue.message}`,
        }));
        res
          .status(StatusCodes.BAD_REQUEST)
          .json({ error: 'Invalid data', details: errorMessages });
      } else {
        res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ error: 'Internal Server Error' });
      }
    }
  };
}
