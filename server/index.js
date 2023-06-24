import express from 'express';
import { PORT } from './config.js';

import indexRoutes from './routes/index.routes.js';
import favoritoRoutes from './routes/favoritos.routes.js';

const app = express();

app.use(express.json());

app.use(indexRoutes);
app.use(favoritoRoutes);

app.listen(PORT);
console.log(`conectado ${PORT}`);