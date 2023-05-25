import { Request, Response } from "express";

import { GetAllProductsUseCase } from "../../aplication/usesCases/getAllProductsUseCase";

export class GetAllProductsController {
  constructor(readonly getAllProductsUseCase: GetAllProductsUseCase) { }

  async run(req: Request, res: Response) {
    const listProducts=await this.getAllProductsUseCase.run();
    return res.status(200).json(listProducts);
  }
}