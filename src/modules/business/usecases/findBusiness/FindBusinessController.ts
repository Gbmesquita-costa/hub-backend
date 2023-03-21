import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindBusinessUseCase } from "./FindBusinessUseCase";

class FindBusinessController {
    async handle (request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        
        const findBusiness = container.resolve(FindBusinessUseCase)

        const businessFinded = await findBusiness.execute(id)

        return response.json(businessFinded)
    }
}

export { FindBusinessController }