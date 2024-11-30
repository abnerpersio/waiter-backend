import express from 'express';
import http from 'node:http';
import { Server as SocketServer } from 'socket.io';

export const server = express();
export const wsServer = http.createServer(server);
export const io = new SocketServer(wsServer);
