import express from 'express';

import './config/env';
import { connect } from './config/mongo';

(async () => {
  const isConnected = await connect();
  if (!isConnected) return;

  const server = express();

  server.listen(3001, () => console.log('Server is running'));
})();
