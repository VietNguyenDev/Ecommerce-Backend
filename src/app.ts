import * as dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import express, {Application, Request, Response} from 'express';
import productRoute from "./http/routes/product.routes";
import categoryRoute from "./http/routes/category.routes";
import userRoute from "./http/routes/user.routes";
import favoriteRoute from "./http/routes/favorite.routes";
import commentRoute from "./http/routes/comment.routes";
import shippingRoute from "./http/routes/shipping.routes";
import cartRoute from "./http/routes/cart.routes";
import orderRoute from "./http/routes/order.routes";

//App variables
dotenv.config();
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 8080;

//App config
const app: Application = express();
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.send('HomePage');
});

//routers
app.use('/api', productRoute);
app.use('/api', categoryRoute);
app.use('/api', userRoute);
app.use('/api', favoriteRoute);
app.use('/api', commentRoute);
app.use('/api', shippingRoute);
app.use('/api', cartRoute);
app.use('/api', orderRoute);

app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});