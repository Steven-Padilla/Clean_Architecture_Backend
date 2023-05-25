import { Request, Response } from "express";

import { GetByNameProductsUseCase } from "../../aplication/usesCases/getByNameProductsUseCase";

export class GetByNameProductController {
  constructor(readonly getByNameProductsUseCase: GetByNameProductsUseCase) { }

  async run(req: Request, res: Response) {
    const{name}=req.params
    const product=await this.getByNameProductsUseCase.run(name);
    return res.status(200).json(product);
  }
}