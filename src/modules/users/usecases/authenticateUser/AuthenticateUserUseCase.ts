import { sign } from "jsonwebtoken"
import { compare } from "bcrypt"

import { IUsersRepository } from "../../repositories/IUsersRepository"
import { inject, injectable } from "tsyringe";

interface UserAuthenticated {
    tokenSign: string;
    user: {
        name: string;
        email: string;
    }
}

interface AuthenticateUser {
    email: string;
    password: string;
}

@injectable()
class AuthenticateUserUseCase {
    constructor (
        @inject("UsersRepository")
        private userAuthenticated: IUsersRepository
    ) {}

    async execute ({ email, password }: AuthenticateUser): Promise<UserAuthenticated> {
        const userExists = await this.userAuthenticated.findByEmail(email)

        if (!userExists) {
            throw new Error("E-mail ou senha inválidos")
        }

        const comparePasswords = await compare(password, userExists.password)

        if (!comparePasswords) {
            throw new Error("E-mail ou senha inválidos")
        }

        const tokenSign = sign({}, process.env.JWT, {
            subject: userExists.id,
            expiresIn: "1d" // Expires in 1 day 
        })

        const token: UserAuthenticated = {
            tokenSign,
            user: {
                name: userExists.name,
                email: userExists.email
            }
        }

        return token
    }
}

export { AuthenticateUserUseCase }