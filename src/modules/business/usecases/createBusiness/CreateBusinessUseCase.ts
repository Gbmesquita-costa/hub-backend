import { inject, injectable } from "tsyringe";
import { CreateBusiness } from "../../dtos/ICreateBusinessDTO";
import { IBusinessRepository } from "../../repositories/IBusinessRepository";

@injectable()
class CreateBusinessUseCase {
    constructor (
        @inject("BusinessRepository")
        private business: IBusinessRepository
    ) {}

    async execute ({ name, website, cnpj, userId }: CreateBusiness): Promise<void> {
        await this.business.createBusiness({
            name: name,
            website: website,
            cnpj: cnpj,
            userId: userId
        })
    }
}

export { CreateBusinessUseCase }