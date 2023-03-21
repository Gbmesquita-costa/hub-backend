import { inject, injectable } from "tsyringe";
import { CreateBusinessLocation } from "../../dtos/IBusinessLocationDTO";
import { IBusinessLocationRepository } from "../../repositories/IBusinessLocationRepository";

@injectable()
class UpdateBusinessLocationUseCase {
    constructor (
        @inject("BusinessLocationRepository")
        private businessLocation: IBusinessLocationRepository
    ) {}

    async execute ({ id, name, cep, city, neighborhood, number, state, street }: CreateBusinessLocation): Promise<CreateBusinessLocation> {
        return await this.businessLocation.updateBusinessLocation({
            id: id,
            name: name, 
            cep: cep,
            city: city,
            neighborhood: neighborhood,
            number: number,
            state: state,
            street: street
        })
    }
}

export { UpdateBusinessLocationUseCase }