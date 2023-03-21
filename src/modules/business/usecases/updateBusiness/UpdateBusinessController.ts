import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateBusinessUseCase } from "./UpdateBusinessUseCase";

class UpdateBusinessController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, website, cnpj } = request.body
        const { id } = request.params

        const updateBusiness = container.resolve(UpdateBusinessUseCase)
        
        const businessUpdated = await updateBusiness.execute({
            id: id,
            name: name,
            website: website,
            cnpj: cnpj
        })

        return response.json({
            message: "Empresa atualizada com sucesso",
            businessUpdated: businessUpdated 
        })
    }
}

export { UpdateBusinessController }