import { Router } from "express"
import { CreateBusinessController } from "../modules/business/usecases/createBusiness/CreateBusinessController"
import { GetBusinessController } from "../modules/business/usecases/getBusiness/GetBusinessController"
import { UpdateBusinessController } from "../modules/business/usecases/updateBusiness/UpdateBusinessController"
import { DeleteBusinessController } from "../modules/business/usecases/deleteBusiness/DeleteBusinessController"
import { ensureAuthenticated } from "../modules/middlewares/ensureAuthenticated"
import { FindBusinessController } from "../modules/business/usecases/findBusiness/FindBusinessController"

const businessRoutes = Router()
const businessController = new CreateBusinessController()
const businessReturned = new GetBusinessController()
const businessFinded = new FindBusinessController()
const businessUpdated = new UpdateBusinessController()
const businessDeleted = new DeleteBusinessController()

businessRoutes.post("/createBusiness", ensureAuthenticated, businessController.handle)
businessRoutes.get("/businessReturned", ensureAuthenticated, businessReturned.handle)
businessRoutes.get("/businessFinded/:id", ensureAuthenticated, businessFinded.handle)
businessRoutes.put("/updateBusiness/:id", ensureAuthenticated, businessUpdated.handle)
businessRoutes.delete("/deleteBusiness/:id", ensureAuthenticated, businessDeleted.handle)

export { businessRoutes }