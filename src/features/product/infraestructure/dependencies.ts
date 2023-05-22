import { GetAllProductsUseCase } from "../aplication/usesCases/getAllProductsUseCase.js";
import { CreateProductUseCase } from "../aplication/usesCases/CreateProductUseCase.js";
import { GetAllProductsController } from "./controllers/getAllProductsController.js";
import { CreateProductController } from "./controllers/CreateProductController.js";
import { PgProductRepositoryImpl } from "./repositoriesImpl/PgProductRepositoryImpl.js";

const pgProductRepositoryImpl = new PgProductRepositoryImpl();
const getAllProductsUseCase = new GetAllProductsUseCase(pgProductRepositoryImpl);
const createProductUseCase = new CreateProductUseCase(pgProductRepositoryImpl);
export const getAllProductsController = new GetAllProductsController(getAllProductsUseCase)
export const createProductController = new CreateProductController(createProductUseCase)