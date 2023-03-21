import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindBusinessLocationUseCase } from "./FindBusinessLocationUseCase";

class FindBusinessLocationController {
    async handle (request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        
        const findBusinessLocation = container.resolve(FindBusinessLocationUseCase)

        const businessLocationFinded = await findBusinessLocation.execute(id)

        return response.json(businessLocationFinded)
    }
}

export { FindBusinessLocationController }