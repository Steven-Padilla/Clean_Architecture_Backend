import { Product } from "../../domain/entities/Product.js";
import { ProductRepository } from "../../domain/repositories/ProductRepository.js";

export class PgProductRepositoryImpl implements ProductRepository {

    async getAll(): Promise<Product[]> {
        const listProducts = await Product.findAll();
        return listProducts;
    }
    async createProduct(name: string, description: string, price: number): Promise<[Product, boolean]> {
        const product = new Product({ name, description, price });
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
    async updateProduct(id:number,name: string, description: string, price: number): Promise<Product> {
        const product=await this.getById(id)
        await product.update({
            name,
            description,
            price
        })
        return product;
    }
    async getById(id: number): Promise<Product | null> {
        const tarjet= await Product.findByPk(id);
        return tarjet;
    }

    async deleteById(id: number): Promise<string>{
        const tarjet= await Product.findByPk(id);
        if (tarjet){
            const {name}=tarjet
            await tarjet.destroy();
            return `Product with name: <${name}> successfully deleted`
        }else{
            return `Product with id: ${id} not found`;
        }
    }
}
