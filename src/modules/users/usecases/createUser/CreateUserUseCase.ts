import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { CreateUser } from "../../dtos/ICreateUserDTO";

@injectable()
class CreateUserUseCase {
    constructor (
        @inject("UsersRepository")
        private user: IUsersRepository
    ) {}

    async execute ({ email, name, password }: CreateUser): Promise<void> {
        const userAlreadyExists = await this.user.findByEmail(email)

        if (userAlreadyExists) {
            throw new Error("User already exists")
        }

        await this.user.createUser({
            name: name,
            email: email,
            password: password
        })
    }
}

export { CreateUserUseCase }