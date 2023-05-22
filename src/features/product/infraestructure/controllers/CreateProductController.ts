
import { Request, Response } from "express";
import { CreateProductUseCase } from "../../aplication/usesCases/createProductUseCase.js";
import { Product } from "../../domain/entities/Product.js";


export class CreateProductController {
  constructor(readonly createProductUseCase: CreateProductUseCase) { }

  async run(req: Request, res: Response) {
    const body = req.body as Product;
    
    const product = await this.createProductUseCase.run(body.name, body.description, body.price);
    return res.status(200).json(product);
  }
}