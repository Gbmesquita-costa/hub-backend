import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateBusinessLocationUseCase } from "./UpdateBusinessLocationUseCase";

class UpdateBusinessLocationController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, cep, city, neighborhood, number, state, street } = request.body
        const { id } = request.params

        const updateBusinessLocation = container.resolve(UpdateBusinessLocationUseCase)
        
        const businessLocationUpdated = await updateBusinessLocation.execute({
            id: id,
            name: name,
            cep: cep,
            city: city,
            neighborhood: neighborhood,
            number: number,
            state: state,
            street: street
        })

        return response.json({
            message: "Local atualizado com sucesso",
            businessLocationUpdated: businessLocationUpdated 
        })
    }
}

export { UpdateBusinessLocationController }