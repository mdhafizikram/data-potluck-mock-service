import { Request, Response } from 'express';
import { readFile } from 'fs';

export const mockService = async (req: Request, res: Response): Promise<void> => {
  const { JOURNEY } = req.query;

  try {
    const data = await new Promise((resolve, reject) => {
      readFile(`src/mockData/${JOURNEY}.json`, 'utf8', (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(JSON.parse(data));
      });
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
