import express from 'express';
import { getAllProductsController, createProductController } from './dependencies.js' 
const productRouter = express.Router();

productRouter.get("/getall/",getAllProductsController.run.bind(getAllProductsController));

productRouter.post("/createProduct/",createProductController.run.bind(createProductController));

export { productRouter };