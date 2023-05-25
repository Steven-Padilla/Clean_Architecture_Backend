
import { Request, Response } from "express";
import { CreateProductsByListUseCase } from "../../aplication/usesCases/createProductsByListUseCase.js";
import { Product } from "../../domain/entities/Product.js";


export class CreateProductsByListController {
  constructor(readonly createProductsByListUseCase: CreateProductsByListUseCase) { }

  async run(req: Request, res: Response) {
    const listProducts = req.body as Array<Product>;
    const arrProductsJson = new Array<[string, string, number]>
    console.log(listProducts);
    
    listProducts['products'].forEach((product: { name: string; description: string; price: number; })=>{
      arrProductsJson.push([product.name,product.description,product.price])
    })
    
    const product = await this.createProductsByListUseCase.run(arrProductsJson);
    return res.status(200).json(product);
  }
}