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
    async createProductByList(listProducts: Array<[string, string, number]>): Promise<Array<[Product, boolean]>> {
        const products = new Array<Product>;
        listProducts.forEach(product => {
            products.push(new Product({ name:product[0], description:product[1], price:product[2]}));

        })
        const response = new Array<[Product, boolean]>;
        products.forEach(async product => {
            const values = product.dataValues
            const responseDB=await Product.findOrCreate({
                where: { name:values.name },
                defaults: {
                    name:values.name,
                    description:values.description,
                    price:values.price
                }
            })
            response.push(responseDB)
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
    async getByName(name: string): Promise<Product | null> {
        const tarjet= await Product.findOne({where:{name}});
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
