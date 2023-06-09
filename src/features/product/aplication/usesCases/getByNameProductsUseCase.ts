import { ProductRepository } from "../../domain/repositories/ProductRepository";

export class GetByNameProductsUseCase {
    constructor (
        readonly productRepository: ProductRepository,
    ){}
    async run(name:string) {
        return await this.productRepository.getByName(name);
      }
}