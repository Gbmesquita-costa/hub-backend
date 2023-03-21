import { inject, injectable } from "tsyringe"
import { IBusinessRepository } from "../../repositories/IBusinessRepository"

@injectable()
class DeleteBusinessUseCase {
    constructor (
        @inject("BusinessRepository")
        private business: IBusinessRepository
    ) {}

    async execute (id: string): Promise<void> {
        await this.business.deleteBusiness(id)
    }
}

export { DeleteBusinessUseCase }