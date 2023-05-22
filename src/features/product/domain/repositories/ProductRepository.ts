import { Product } from "../entities/Product.js";

export interface ProductRepository {
    getAll(): Promise<Array<Product>>;
    getById(id: number): Promise<Product | null>;
    createProduct(name: string, description: string, price: number): Promise<[Product,boolean]>;
    updateProduct(id:number,name: string, description: string, price: number): Promise<Product>;
    // deleteById(id: number): Promise<string | null>;
}