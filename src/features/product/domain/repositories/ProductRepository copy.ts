import { Product } from "../entities/product.js";

export interface UserRepository {
    getAll(): Promise<Array<Product>>;
    getById(id: number): Promise<Product | null>;
    createProduct(name: string, description: string, price: number): Promise<Product | null>;
    deleteById(id: number): Promise<string | null>;
}