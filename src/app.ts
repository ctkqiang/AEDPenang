import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import aed from './routes/aed';

const app: Application = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Route setup
app.use('/aed', aed);

app.get('/', (req, res) => {
    res.send({
        route: "/",
        message: "Hello World From 上饶满星科技!",
    message_from_developer: "For services do contact me johnmelodymel@qq.com"
  });    
});


export default app;
