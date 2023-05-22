import { GetAllProductsUseCase } from "../aplication/usesCases/getAllProductsUseCase.js";
import { CreateProductUseCase } from "../aplication/usesCases/createProductUseCase.js";
import { GetAllProductsController } from "./controllers/getAllProductsController.js";
import { CreateProductController } from "./controllers/CreateProductController.js";
import { PgProductRepositoryImpl } from "./repositoriesImpl/PgProductRepositoryImpl.js";
import { GetByIdProductsUseCase } from '../aplication/usesCases/getByIdProductsUseCase.js';
import { GetByIdProductController } from './controllers/getByIdProductController.js';

const pgProductRepositoryImpl = new PgProductRepositoryImpl();
const getAllProductsUseCase = new GetAllProductsUseCase(pgProductRepositoryImpl);
const createProductUseCase = new CreateProductUseCase(pgProductRepositoryImpl);
const getByIdProductUseCase = new GetByIdProductsUseCase(pgProductRepositoryImpl);
export const getByIdProductController = new GetByIdProductController(getByIdProductUseCase)
export const getAllProductsController = new GetAllProductsController(getAllProductsUseCase)
export const createProductController = new CreateProductController(createProductUseCase)