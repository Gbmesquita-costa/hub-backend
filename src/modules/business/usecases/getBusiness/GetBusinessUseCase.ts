import { inject, injectable } from "tsyringe";
import { CreateBusiness } from "../../dtos/ICreateBusinessDTO";
import { IBusinessRepository } from "../../repositories/IBusinessRepository";

@injectable()
class GetBusinessUseCase {
    constructor (
        @inject("BusinessRepository")
        private business: IBusinessRepository
    ) {}

    async execute (id: string): Promise<CreateBusiness[]> {
        return await this.business.getAllBusiness(id)
    }
}

export { GetBusinessUseCase }