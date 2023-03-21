import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetUserUseCase } from "./GetUserUseCase";

class GetUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.user

        const getUser = container.resolve(GetUserUseCase)
        const userFinded = await getUser.execute(id)

        return response.json(userFinded)
    }
}

export { GetUserController }