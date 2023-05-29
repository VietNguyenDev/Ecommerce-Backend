import * as dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import express, {Application, Request, Response} from 'express';

//App variables
dotenv.config();
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

//App config
const app: Application = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('HomePage');
});

app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});