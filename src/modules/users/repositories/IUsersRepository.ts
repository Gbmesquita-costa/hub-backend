import { CreateUser } from "../dtos/ICreateUserDTO"

interface IUsersRepository {
    createUser: ({ name, email, password }: CreateUser) => Promise<void>;
    findByEmail: (email: string) => Promise<CreateUser>;
    findUserById: (id: string) => Promise<CreateUser>;
}

export { IUsersRepository }