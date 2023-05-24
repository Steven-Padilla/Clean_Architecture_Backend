import { GetAllProductsUseCase } from "../aplication/usesCases/getAllProductsUseCase.js";
import { CreateProductUseCase } from "../aplication/usesCases/createProductUseCase.js";
import { GetAllProductsController } from "./controllers/getAllProductsController.js";
import { CreateProductController } from "./controllers/CreateProductController.js";
import { PgProductRepositoryImpl } from "./repositoriesImpl/PgProductRepositoryImpl.js";
import { GetByIdProductsUseCase } from '../aplication/usesCases/getByIdProductsUseCase.js';
import { GetByIdProductController } from './controllers/getByIdProductController.js';
import { UpdateProductController } from './controllers/updateProductController.js';
import { UpdateProductUseCase } from '../aplication/usesCases/updateProductUseCase.js';
import { DeleteProductController } from './controllers/deleteProductController.js';
import { DeleteProductsUseCase } from "../aplication/usesCases/deleteProductUseCase.js";
import { GetByNameProductsUseCase } from '../aplication/usesCases/getByNameProductsUseCase.js';
import { GetByNameProductController } from './controllers/getByNameProductController.js';

// Main repository
const pgProductRepositoryImpl = new PgProductRepositoryImpl();

//Dependency to get all products 
const getAllProductsUseCase = new GetAllProductsUseCase(pgProductRepositoryImpl);
export const getAllProductsController = new GetAllProductsController(getAllProductsUseCase)

//Dependency to create a product
const createProductUseCase = new CreateProductUseCase(pgProductRepositoryImpl);
export const createProductController = new CreateProductController(createProductUseCase)

//Dependency to get a product by id
const getByIdProductUseCase = new GetByIdProductsUseCase(pgProductRepositoryImpl);
export const getByIdProductController = new GetByIdProductController(getByIdProductUseCase)

//Dependency to update a product
const updateProductUseCase = new UpdateProductUseCase(pgProductRepositoryImpl);
export const updateProductController= new UpdateProductController(updateProductUseCase);

//Dependenciy to delete a product
const deleteProductsUseCase= new DeleteProductsUseCase(pgProductRepositoryImpl);
export const deleteProductsController = new DeleteProductController(deleteProductsUseCase);

//Dependency to get by name
const getByNameUseCase = new GetByNameProductsUseCase(pgProductRepositoryImpl);
export const getByNameProductsController =new GetByNameProductController(getByNameUseCase);