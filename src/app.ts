import 'dotenv/config';
import express, { Express, Response } from 'express';
import helmet from 'helmet';
import compression from 'compression';
import routesv1 from './routes';
const app: Express = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(compression());

// Routes
app.use('/', routesv1);

// Health check endpoint
app.get('/health', (_, res: Response) => {
  res.send('Express + TypeScript Server');
});

// Start the server
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

export default app;
