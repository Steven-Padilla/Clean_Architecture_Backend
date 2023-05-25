import express from 'express';
import { config } from './config';
import { productRouter } from './features/product/infraestructure/productRouter';
import * as bodyParser from 'body-parser'
const { port } = config.server;
const app = express();


app.use(bodyParser.json());
app.use("/products/", productRouter)
app.listen(port, () => {
    console.log(`[APP] - Starting application on port ${port}`);
});

