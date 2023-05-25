import * as express from 'express';
const productRouter = express.Router();

import { 
    getAllProductsController, 
    createProductController, 
    getByIdProductController, 
    updateProductController,
    deleteProductsController,
    createProductsByListController,
    getByNameProductsController
} from './dependencies.js' 


productRouter.get("/getall/",getAllProductsController.run.bind(getAllProductsController));
productRouter.get("/getbyid/:id",getByIdProductController.run.bind(getByIdProductController));
productRouter.get("/getbyname/:name",getByNameProductsController.run.bind(getByNameProductsController));

productRouter.post("/createProduct/",createProductController.run.bind(createProductController));
productRouter.post("/createByList/",createProductsByListController.run.bind(createProductsByListController));
productRouter.post("/updateProduct/",updateProductController.run.bind(updateProductController));
productRouter.delete("/deleteProduct/:id",deleteProductsController.run.bind(deleteProductsController));

export { productRouter };