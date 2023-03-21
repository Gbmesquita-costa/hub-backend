import { hash } from "bcrypt"

import { prismaClient } from "../../../database/prisma"
import { CreateUser } from "../dtos/ICreateUserDTO";
import { IUsersRepository } from "./IUsersRepository";

class UsersRepositories implements IUsersRepository {
    constructor(private prisma = prismaClient) {}
    
    async createUser({ name, email, password }: CreateUser): Promise<void> {
        const hashPassword = await hash(password, 10)
        
        await this.prisma.users.create({
            data: {
                name: name,
                email: email,
                password: hashPassword
            }
        })
    }
    
    async findByEmail(email: string): Promise<CreateUser> {
        return await this.prisma.users.findUnique({ where: { email: email } })
    }

    async findUserById(id: string): Promise<CreateUser> {
        return await this.prisma.users.findUnique({ where: { id: id } })
    }
}

export { UsersRepositories }