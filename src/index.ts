import express from 'express';
import path from 'node:path';

import './config/env';
import { connect } from './config/mongo';
import { corsMiddleware } from './middlewares/cors';
import { router } from './router';

(async () => {
  const isConnected = await connect();
  if (!isConnected) return;

  const server = express();

  server.use(corsMiddleware);

  server.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
  server.use(express.json());
  server.use(router);

  server.listen(3001, () => console.log('Server is running'));
})();
