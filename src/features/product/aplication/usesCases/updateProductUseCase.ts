import { ProductRepository } from "../../domain/repositories/ProductRepository";

export class UpdateProductUseCase {
    constructor(
        readonly productRepository: ProductRepository,
    ) { }
    async run(id:number,name: string, description: string, price: number) {
        return await this.productRepository.updateProduct(id,name, description, price);
    }
}