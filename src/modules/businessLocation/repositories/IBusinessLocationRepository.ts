import { CreateBusinessLocation } from "../dtos/IBusinessLocationDTO"

interface IBusinessLocationRepository {
    createBusinessLocation: ({ name, city, neighborhood, cep, number, state, street, businessId }: CreateBusinessLocation) => Promise<void>
    getBusinessLocation: (id: string) => Promise<CreateBusinessLocation[]>
    findLocationById: (id: string) => Promise<CreateBusinessLocation>
    updateBusinessLocation: ({ id, name, city, neighborhood, cep, number, state, street }: CreateBusinessLocation) => Promise<CreateBusinessLocation>
    deleteBusinessLocation: (id: string) => Promise<CreateBusinessLocation>
}

export { IBusinessLocationRepository }