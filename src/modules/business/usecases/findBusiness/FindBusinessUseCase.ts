import { inject, injectable } from "tsyringe";
import { CreateBusiness } from "../../dtos/ICreateBusinessDTO";
import { IBusinessRepository } from "../../repositories/IBusinessRepository";

@injectable()
class FindBusinessUseCase {
    constructor (
        @inject("BusinessRepository")
        private business: IBusinessRepository
    ) {}

    async execute (id: string): Promise<CreateBusiness> {
        return await this.business.findBusinessById(id)
    }
}

export { FindBusinessUseCase }