import { Request, Response } from 'express';
import { makeApiRequest } from '../../services/axios.service';

export const dplService = async (req: Request, res: Response): Promise<void> => {
  const payload = {
    body: JSON.stringify(req.body),
    httpMethod: req.method,
    resource: req.path,
    queryStringParameters: req.query,
  };

  try {
    const response = await makeApiRequest(payload);

    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
