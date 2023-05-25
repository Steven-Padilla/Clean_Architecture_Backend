import { Request, Response } from "express";

import { DeleteProductsUseCase } from "../../aplication/usesCases/deleteProductUseCase";

export class DeleteProductController {
  constructor(readonly deleteProductsUseCase: DeleteProductsUseCase) { }

  async run(req: Request, res: Response) {
    const{id}=req.params
    const product=await this.deleteProductsUseCase.run(Number(id));
    return res.status(200).json(product);
  }
}