import { ProductRepository } from "../../domain/repositories/ProductRepository";

export class CreateProductUseCase {
    constructor(
        readonly productRepository: ProductRepository,
    ) { }
    async run(name: string, description: string, price: number) {
        return await this.productRepository.createProduct(name, description, price);
    }
}