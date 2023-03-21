import { container } from "tsyringe";

import { IUsersRepository } from "../modules/users/repositories/IUsersRepository";
import { UsersRepositories } from "../modules/users/repositories/UsersRepositories";

import { IBusinessRepository } from "../modules/business/repositories/IBusinessRepository";
import { BusinessRepository } from "../modules/business/repositories/BusinessRepository";

import { IBusinessLocationRepository } from "../modules/businessLocation/repositories/IBusinessLocationRepository";
import { BusinessLocationRepository } from "../modules/businessLocation/repositories/BusinessLocationRepository";

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepositories
)

container.registerSingleton<IBusinessRepository>(
    "BusinessRepository",
    BusinessRepository
)

container.registerSingleton<IBusinessLocationRepository>(
    "BusinessLocationRepository",
    BusinessLocationRepository
)