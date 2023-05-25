import { ProductRepository } from "../../domain/repositories/ProductRepository";

export class GetAllProductsUseCase {
    constructor (
        readonly productRepository: ProductRepository,
    ){}
    async run() {
        return await this.productRepository.getAll();
      }
}