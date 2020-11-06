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
/*
app.get("/studant/:id", (req: Request, res: Response) =>{
    // here we will have logic to return user by id
});

app.post("/studant", (req: Request, res: Response) =>{
    // here we will have logic to save a user
});

app.put("/studant/:id", (req: Request, res: Response) =>{
    // here we will have logic to update a user by a given user id
});

app.delete("/studant/:id", (req: Request, res: Response) => {
    // here we will have logic to delete a user by a given user id
});*/

// start express server
// start the Express server
app.use(errorHandler)
app.listen( port);

