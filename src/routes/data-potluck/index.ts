import { Request, Response } from 'express';
import { makeApiRequest } from '../../services/axios.service';

/**
 * Handles the data-potluck route.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @returns {Promise<void>}
 */

export const dplService = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const payload = {
      body: JSON.stringify(req.body),
      httpMethod: req.method,
      resource: req.path,
      queryStringParameters: req.query,
    };

    const response = await makeApiRequest(payload);

    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Error occurred:', error);

    res.status(500).json({ error: 'Internal Server Error' });
  }
};
