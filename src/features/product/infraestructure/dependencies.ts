import { GetAllProductsUseCase } from "../aplication/usesCases/getAllProductsUseCase";
import { CreateProductUseCase } from "../aplication/usesCases/createProductUseCase";
import { GetAllProductsController } from "./controllers/getAllProductsController";
import { CreateProductController } from "./controllers/CreateProductController";
import { PgProductRepositoryImpl } from "./repositoriesImpl/PgProductRepositoryImpl";
import { GetByIdProductsUseCase } from '../aplication/usesCases/getByIdProductsUseCase';
import { GetByIdProductController } from './controllers/getByIdProductController';
import { UpdateProductController } from './controllers/updateProductController';
import { UpdateProductUseCase } from '../aplication/usesCases/updateProductUseCase';
import { DeleteProductController } from './controllers/deleteProductController';
import { DeleteProductsUseCase } from "../aplication/usesCases/deleteProductUseCase";
import { GetByNameProductsUseCase } from '../aplication/usesCases/getByNameProductsUseCase';
import { GetByNameProductController } from './controllers/getByNameProductController';
import { CreateProductsByListUseCase } from '../aplication/usesCases/createProductsByListUseCase';
import {CreateProductsByListController } from './controllers/CreateProductsByListController';

// Main repository
const pgProductRepositoryImpl = new PgProductRepositoryImpl();

//Dependency to get all products 
const getAllProductsUseCase = new GetAllProductsUseCase(pgProductRepositoryImpl);
export const getAllProductsController = new GetAllProductsController(getAllProductsUseCase)

//Dependency to create a product
const createProductUseCase = new CreateProductUseCase(pgProductRepositoryImpl);
export const createProductController = new CreateProductController(createProductUseCase)

//Dependency to create a product
const createProductsByListUseCase = new CreateProductsByListUseCase(pgProductRepositoryImpl);
export const createProductsByListController = new CreateProductsByListController(createProductsByListUseCase);

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