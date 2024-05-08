import express, { Express, Request, Response } from 'express';
import routesv1 from './routes';
import 'dotenv/config';

const app: Express = express();
const port = process.env.PORT || 3000;

app.get('/health', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use('/', routesv1);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

export default app;
