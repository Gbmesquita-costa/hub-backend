import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateBusinessUseCase } from "./CreateBusinessUseCase";

class CreateBusinessController {
    async handle (request: Request, response: Response): Promise<Response> {
        const { name, website, cnpj} = request.body
        const { id } = request.user
        
        const businessUseCase = container.resolve(CreateBusinessUseCase)

        await businessUseCase.execute({
            name: name,
            website: website,
            cnpj: cnpj,
            userId: id
        })

        return response.status(201).json("Empresa criada com sucesso")
    }
}

export { CreateBusinessController }