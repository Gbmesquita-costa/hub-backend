import { inject, injectable } from "tsyringe";
import { CreateBusinessLocation } from "../../dtos/IBusinessLocationDTO";
import { IBusinessLocationRepository } from "../../repositories/IBusinessLocationRepository";

@injectable()
class CreateBusinessLocationUseCase {
    constructor (
        @inject("BusinessLocationRepository")
        private businessLocation: IBusinessLocationRepository
    ) {}

    async execute ({ name, cep, city, neighborhood, number, state, street, businessId }: CreateBusinessLocation): Promise<void> {
        await this.businessLocation.createBusinessLocation({
            cep: cep,
            city: city,
            name: name,
            neighborhood: neighborhood,
            number: number,
            state: state,
            street: street,
            businessId: businessId
        })
    }
}

export { CreateBusinessLocationUseCase }