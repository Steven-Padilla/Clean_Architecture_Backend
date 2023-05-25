import { ProductRepository } from "../../domain/repositories/ProductRepository";

export class DeleteProductsUseCase {
    constructor (
        readonly productRepository: ProductRepository,
    ){}
    async run(id:number) {
        return await this.productRepository.deleteById(id);
      }
}