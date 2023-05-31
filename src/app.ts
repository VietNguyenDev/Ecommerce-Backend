import * as dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import express, {Application, Request, Response} from 'express';
import productRoute from "./http/routes/product.routes";
import categoryRoute from "./http/routes/category.routes";

//App variables
dotenv.config();
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 8080;

//App config
const app: Application = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('HomePage');
});

app.use('/api', productRoute);
app.use('/api', categoryRoute);

app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});