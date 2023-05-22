import { Product } from "../entities/product.js";

export interface ProductRepository {
    getAll(): Promise<Array<Product>>;
    // getById(id: number): Promise<Product | null>;
    createProduct(name: string, description: string, price: number): Promise<[Product,boolean]>;
    // deleteById(id: number): Promise<string | null>;
}