import { ProductRepository } from "../../domain/repositories/ProductRepository.js";

export class CreateProductsByListUseCase {
    constructor(
        readonly productRepository: ProductRepository,
    ) { }
    async run(products : Array<[string, string, number]>) {
        return await this.productRepository.createProductByList(products);
    }
}