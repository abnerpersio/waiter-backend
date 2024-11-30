import express from 'express';
import path from 'node:path';

import './config/env';
import { connect } from './config/mongo';
import { corsMiddleware } from './middlewares/cors';
import { router } from './router';
import { server, wsServer } from './server';

(async () => {
  const isConnected = await connect();
  if (!isConnected) return;

  server.use(corsMiddleware);

  server.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
  server.use(express.json());
  server.use(router);

  wsServer.listen(3001, () => console.log('Server is running'));
})();
