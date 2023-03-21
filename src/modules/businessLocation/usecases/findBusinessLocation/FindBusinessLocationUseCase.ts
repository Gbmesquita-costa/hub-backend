import { inject, injectable } from "tsyringe";
import { CreateBusinessLocation } from "../../dtos/IBusinessLocationDTO";
import { IBusinessLocationRepository } from "../../repositories/IBusinessLocationRepository";

@injectable()
class FindBusinessLocationUseCase {
    constructor (
        @inject("BusinessLocationRepository")
        private businessLocation: IBusinessLocationRepository
    ) {}

    async execute (id: string): Promise<CreateBusinessLocation> {
        return await this.businessLocation.findLocationById(id)
    }
}

export { FindBusinessLocationUseCase }