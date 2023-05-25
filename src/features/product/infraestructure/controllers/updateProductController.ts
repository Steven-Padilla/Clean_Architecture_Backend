
import { Request, Response } from "express";
import { UpdateProductUseCase } from "../../aplication/usesCases/updateProductUseCase";
import { Product } from "../../domain/entities/Product";


export class UpdateProductController {
  constructor(readonly updateProductUseCase: UpdateProductUseCase) { }

  async run(req: Request, res: Response) {
    const body = req.body as Product;
    
    const product = await this.updateProductUseCase.run(body.id,body.name, body.description, body.price);
    return res.status(200).json(product);
  }
}