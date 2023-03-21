import { Router } from "express"

import { userRoutes } from "./users.routes"
import { businessRoutes } from "./business.routes"
import { businessLocationRoutes } from "./businessLocation.routes"

const routes = Router()

routes.use(userRoutes)
routes.use(businessRoutes)
routes.use(businessLocationRoutes)

export { routes }