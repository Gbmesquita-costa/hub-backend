import { Router } from "express"
import { CreateUserController } from "../modules/users/usecases/createUser/CreateUserController"
import { AuthenticateUserController } from "../modules/users/usecases/authenticateUser/AuthenticatedUserController"
import { ensureAuthenticated } from "../modules/middlewares/ensureAuthenticated"
import { GetUserController } from "../modules/users/usecases/getUser/GetUserController"

const userRoutes = Router()
const userController = new CreateUserController()
const authenticateController = new AuthenticateUserController()
const getuserController = new GetUserController()

userRoutes.post("/createUser", userController.handle)
userRoutes.post("/login", authenticateController.handle)
userRoutes.get("/getUser", ensureAuthenticated, getuserController.handle)

export { userRoutes }