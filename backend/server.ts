import express from 'express';
import 'express-async-errors';
import errorHandler from './src/errors/handler';
import cors from 'cors';
import './src/database/connections';
import routes from './routes'

const app = express();

const port =  process.env.PORT || 8084;

app.use(cors());

app.use(express.json());

app.use(routes);

app.use(errorHandler)
app.listen( port);

