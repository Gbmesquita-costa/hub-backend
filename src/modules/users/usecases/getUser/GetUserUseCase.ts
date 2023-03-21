import { inject, injectable } from "tsyringe"
import { IUsersRepository } from "../../repositories/IUsersRepository"
import { CreateUser } from "../../dtos/ICreateUserDTO"

@injectable()
class GetUserUseCase {
    constructor(
        @inject("UsersRepository")
        private user: IUsersRepository
    ) {}

    async execute(id: string): Promise<CreateUser> {
        return await this.user.findUserById(id)   
    }
}

export { GetUserUseCase }