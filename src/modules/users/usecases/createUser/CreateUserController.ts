import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body

        const userUseCase = container.resolve(CreateUserUseCase)

        await userUseCase.execute({
            name: name,
            email: email,
            password: password
        })

        return response.status(201).json("Usuário criado com sucesso")
    }
}

export { CreateUserController }