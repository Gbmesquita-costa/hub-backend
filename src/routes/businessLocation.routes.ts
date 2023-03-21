import { Router } from "express"
import { CreateBusinessLocationController } from "../modules/businessLocation/usecases/createBusinessLocation/CreateBusinessLocationController";
import { GetBusinessLocationController } from "../modules/businessLocation/usecases/getBusinessLocation/GetBusinessLocationController";
import { FindBusinessLocationController } from "../modules/businessLocation/usecases/findBusinessLocation/FindBusinessController";
import { UpdateBusinessLocationController } from "../modules/businessLocation/usecases/updateBusinessLocation/UpdateBusinessLocationController";
import { DeleteBusinessLocationController } from "../modules/businessLocation/usecases/deleteBusinessLocation/DeleteBusinessLocationController";
import { ensureAuthenticated } from "../modules/middlewares/ensureAuthenticated";

const businessLocationRoutes = Router()

const businessLocationController = new CreateBusinessLocationController()
const businessLocationReturned = new GetBusinessLocationController()
const businessLocationFinded = new FindBusinessLocationController()
const businessLocationUpdated = new UpdateBusinessLocationController()
const businessLocationDeleted = new DeleteBusinessLocationController()

businessLocationRoutes.post("/createLocation/:id", ensureAuthenticated, businessLocationController.handle)
businessLocationRoutes.get("/locationReturned/:id", ensureAuthenticated, businessLocationReturned.handle)
businessLocationRoutes.get("/locationFinded/:id", ensureAuthenticated, businessLocationFinded.handle)
businessLocationRoutes.put("/updateLocation/:id", ensureAuthenticated, businessLocationUpdated.handle)
businessLocationRoutes.delete("/deleteLocation/:id", ensureAuthenticated, businessLocationDeleted.handle)

export { businessLocationRoutes }