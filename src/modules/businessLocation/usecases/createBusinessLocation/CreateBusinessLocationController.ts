import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateBusinessLocationUseCase } from "./CreateBusinessLocationUseCase";

class CreateBusinessLocationController {
    async handle (request: Request, response: Response): Promise<Response> {
        const { name, cep, city, neighborhood, number, state, street } = request.body
        const { id } = request.params
        
        const businessLocation = container.resolve(CreateBusinessLocationUseCase)

        await businessLocation.execute({
            cep: cep,
            city: city,
            name: name,
            neighborhood: neighborhood,
            number: number,
            state: state,
            street: street,
            businessId: id
        })

        return response.status(201).json("Local criado com sucesso")
    }
}

export { CreateBusinessLocationController }