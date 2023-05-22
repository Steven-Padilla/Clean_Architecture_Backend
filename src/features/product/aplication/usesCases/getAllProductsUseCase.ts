import { ProductRepository } from "../../domain/repositories/ProductRepository.js";

export class GetAllProductsUseCase {
    constructor (
        readonly productRepository: ProductRepository,
    ){}
    async run() {
        return await this.productRepository.getAll();
      }
}