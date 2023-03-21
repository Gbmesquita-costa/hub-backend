import { Request, Response } from "express"
import { container } from "tsyringe"
import { DeleteBusinessUseCase } from "./DeleteBusinessUseCase"

class DeleteBusinessController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params

        const deleteBusiness = container.resolve(DeleteBusinessUseCase)
        
        const businessDeleted = await deleteBusiness.execute(id)

        return response.json({
            message: "Empresa deletada com sucesso",
            businessDeleted: businessDeleted
        })
    }
}

export { DeleteBusinessController }