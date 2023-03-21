import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { UsersRepositories } from "../users/repositories/UsersRepositories";

interface UserIdProps {
    sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authheader = request.headers.authorization

    if (!authheader) {
        throw new Error("Token missing")
    }

    const [, token] = authheader.split(" ") // Bearer Token

    try {
        const { sub: user_Id } = verify(token, process.env.JWT) as UserIdProps

        const userTokenId = new UsersRepositories()
        const user_token_id = await userTokenId.findUserById(user_Id)

        if (!user_token_id) {
            throw new Error("Usuário não existe")
        }

        request.user = {
            id: user_Id
        }

        return next()

    } catch (error) {
        throw new Error(`Invalid Token => ${error.message}`)
    }
}