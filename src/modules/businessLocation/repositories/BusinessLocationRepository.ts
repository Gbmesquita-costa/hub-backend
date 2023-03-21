import { prismaClient } from "../../../database/prisma";
import { CreateBusinessLocation } from "../dtos/IBusinessLocationDTO";
import { IBusinessLocationRepository } from "./IBusinessLocationRepository"

export class BusinessLocationRepository implements IBusinessLocationRepository {
    constructor ( private prisma = prismaClient ) {}

    async createBusinessLocation({ name, city, neighborhood, cep, number, state, street, businessId }: CreateBusinessLocation): Promise<void> {
        await this.prisma.localBusiness.create({
            data: {
                name: name,
                city: city,
                neighborhood: neighborhood,
                cep: cep,
                number: number,
                state: state,
                street: street,
                businessId: businessId
            }
        })
    }

    async getBusinessLocation(id: string): Promise<CreateBusinessLocation[]> {
        return await this.prisma.localBusiness.findMany({ where: { businessId: id } })
    }

    async findLocationById(id: string): Promise<CreateBusinessLocation> {
        return await this.prisma.localBusiness.findUnique({ where: { id: id }})
    }

    async updateBusinessLocation({ id, name, city, neighborhood, cep, number, state, street }: CreateBusinessLocation): Promise<CreateBusinessLocation> {
        return await this.prisma.localBusiness.update({
            data: {
                name: name,
                city: city,
                neighborhood: neighborhood,
                cep: cep,
                number: number,
                state: state,
                street: street
            },
            where: {
                id: id
            }
        })
    }

    async deleteBusinessLocation(id: string): Promise<CreateBusinessLocation> {
        return await this.prisma.localBusiness.delete({ where: { id: id } })
    }
}