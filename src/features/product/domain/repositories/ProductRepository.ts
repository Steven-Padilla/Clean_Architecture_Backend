import { Product } from "../entities/Product";

export interface ProductRepository {
    getAll(): Promise<Array<Product>>;
    getById(id: number): Promise<Product | null>;
    getByName(name: string): Promise<Product | null>;
    createProduct(name: string, description: string, price: number): Promise<[Product,boolean]>;
    createProductByList(listProducts:Array<[string, string, number]>): Promise<Array<[Product,boolean]>>;
    updateProduct(id:number,name: string, description: string,price:number): Promise<Product>;
    deleteById(id: number): Promise<string>;
}