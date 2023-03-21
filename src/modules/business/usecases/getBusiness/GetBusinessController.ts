import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetBusinessUseCase } from "./GetBusinessUseCase";

class GetBusinessController {
    async handle (request: Request, response: Response): Promise<Response> {
        const { id } = request.user
        const getBusiness = container.resolve(GetBusinessUseCase)

        const businessReturned = await getBusiness.execute(id)

        return response.json(businessReturned)
    }
}

export { GetBusinessController }