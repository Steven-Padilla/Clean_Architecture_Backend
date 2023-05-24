import express from 'express';
import { getByNameProductsController } from './dependencies.js';
const productRouter = express.Router();

import { 
    getAllProductsController, 
    createProductController, 
    getByIdProductController, 
    updateProductController,
    deleteProductsController,
} from './dependencies.js' 


productRouter.get("/getall/",getAllProductsController.run.bind(getAllProductsController));
productRouter.get("/getbyid/:id",getByIdProductController.run.bind(getByIdProductController));
productRouter.get("/getbyname/:name",getByNameProductsController.run.bind(getByNameProductsController));

productRouter.post("/createProduct/",createProductController.run.bind(createProductController));
productRouter.post("/updateProduct/",updateProductController.run.bind(updateProductController));
productRouter.delete("/deleteProduct/:id",deleteProductsController.run.bind(deleteProductsController));

export { productRouter };