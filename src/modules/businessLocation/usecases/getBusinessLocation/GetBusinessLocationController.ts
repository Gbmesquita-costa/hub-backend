import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetBusinessLocationUseCase } from "./GetBusinessLocationUseCase";

class GetBusinessLocationController {
    async handle (request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const getBusinessLocation = container.resolve(GetBusinessLocationUseCase)

        const businessLocationReturned = await getBusinessLocation.execute(id)

        return response.json(businessLocationReturned)
    }
}

export { GetBusinessLocationController }