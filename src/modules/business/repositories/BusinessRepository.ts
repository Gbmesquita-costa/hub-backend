import { prismaClient } from "../../../database/prisma";
import { CreateBusiness } from "../dtos/ICreateBusinessDTO";
import { IBusinessRepository } from "./IBusinessRepository"

export class BusinessRepository implements IBusinessRepository {
    constructor ( private prisma = prismaClient ) {}

    async createBusiness({ name, website, cnpj, userId }: CreateBusiness): Promise<void> {
        await this.prisma.business.create({
            data: {
                name: name,
                website: website,
                cnpj: cnpj,
                userId: userId
            }
        })
    }

    async getAllBusiness(id: string): Promise<CreateBusiness[]> {
        return await this.prisma.business.findMany({ 
            where: { 
                userId: id 
            },
            include: {
                LocalBusiness: true
            }
        })
    }

    async findBusinessById(id: string): Promise<CreateBusiness> {
        return await this.prisma.business.findUnique({ where: { id: id }})
    }

    async updateBusiness({ id, name, website, cnpj }: CreateBusiness): Promise<CreateBusiness> {
        return await this.prisma.business.update({
            data: {
                name: name,
                website: website,
                cnpj: cnpj,
            },
            where: {
                id: id
            }
        })
    }

    async deleteBusiness(id: string): Promise<CreateBusiness> {
        return await this.prisma.business.delete({ 
            where: { id: id },
            include: {
                LocalBusiness: true
            } 
        })
    }
}