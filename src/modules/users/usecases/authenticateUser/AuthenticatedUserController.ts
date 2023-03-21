import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
    async handle (request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body

        const authenticatedUser = container.resolve(AuthenticateUserUseCase)
    
        const userAuthenticated = await authenticatedUser.execute({
            email: email,
            password: password
        })

        return response.json(userAuthenticated)
    }
}

export { AuthenticateUserController }