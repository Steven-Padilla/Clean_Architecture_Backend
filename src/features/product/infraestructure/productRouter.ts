import express from 'express';
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

productRouter.post("/createProduct/",createProductController.run.bind(createProductController));
productRouter.post("/updateProduct/",updateProductController.run.bind(updateProductController));
productRouter.delete("/deleteProduct/:id",deleteProductsController.run.bind(deleteProductsController));

export { productRouter };