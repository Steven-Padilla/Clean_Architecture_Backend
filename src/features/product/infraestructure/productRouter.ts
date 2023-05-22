import express from 'express';
import { getAllProductsController, createProductController, getByIdProductController } from './dependencies.js' 
const productRouter = express.Router();

productRouter.get("/getall/",getAllProductsController.run.bind(getAllProductsController));
productRouter.get("/getbyid/:id",getByIdProductController.run.bind(getByIdProductController));

productRouter.post("/createProduct/",createProductController.run.bind(createProductController));

export { productRouter };