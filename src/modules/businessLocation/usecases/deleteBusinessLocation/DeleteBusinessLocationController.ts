import { Request, Response } from "express"
import { container } from "tsyringe"
import { DeleteBusinessLocationUseCase } from "./DeleteBusinessLocationUseCase"

class DeleteBusinessLocationController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params

        const deleteBusinessLocation = container.resolve(DeleteBusinessLocationUseCase)
        
        const businessLocationDeleted = await deleteBusinessLocation.execute(id)

        return response.json({
            message: "Local deletado com sucesso",
            businessLocationDeleted: businessLocationDeleted
        })
    }
}

export { DeleteBusinessLocationController }