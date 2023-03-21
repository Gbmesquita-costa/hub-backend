import { inject, injectable } from "tsyringe";
import { CreateBusiness } from "../../dtos/ICreateBusinessDTO";
import { IBusinessRepository } from "../../repositories/IBusinessRepository";

@injectable()
class UpdateBusinessUseCase {
    constructor (
        @inject("BusinessRepository")
        private business: IBusinessRepository
    ) {}

    async execute ({ id, name, website, cnpj }: CreateBusiness): Promise<CreateBusiness> {
        return await this.business.updateBusiness({
            id: id,
            name: name,
            website: website,
            cnpj: cnpj
        })
    }
}

export { UpdateBusinessUseCase }