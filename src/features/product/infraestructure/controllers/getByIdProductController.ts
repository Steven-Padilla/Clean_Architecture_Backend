import { Request, Response } from "express";

import { GetByIdProductsUseCase } from "../../aplication/usesCases/getByIdProductsUseCase.js";

export class GetByIdProductController {
  constructor(readonly getByIdProductsUseCase: GetByIdProductsUseCase) { }

  async run(req: Request, res: Response) {
    const{id}=req.params
    const product=await this.getByIdProductsUseCase.run(Number(id));
    return res.status(200).json(product);
  }
}