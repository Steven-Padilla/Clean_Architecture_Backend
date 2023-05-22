import { Product } from "../../domain/entities/product.js";
import { ProductRepository } from "../../domain/repositories/ProductRepository.js";

export class PgProductRepositoryImpl implements ProductRepository {

    async getAll(): Promise<Product[]> {
        const listProducts = await Product.findAll();
        return listProducts;
    }
    async createProduct(name: string, description: string, price: number): Promise<[Product, boolean]> {
        console.log(description);

        const product = new Product({ name, description, price });
        console.log(product.dataValues);
        const values = product.dataValues
        const response = await Product.findOrCreate({
            where: { name },
            defaults: {
                name:values.name,
                description:values.description,
                price:values.price
            }
        })
        return response;
    }

}
