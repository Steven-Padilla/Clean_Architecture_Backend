import { ProductRepository } from "../../domain/repositories/ProductRepository.js";

export class GetByIdProductsUseCase {
    constructor (
        readonly productRepository: ProductRepository,
    ){}
    async run(id:number) {
        return await this.productRepository.getById(id);
      }
}