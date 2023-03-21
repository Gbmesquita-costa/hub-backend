import express, { NextFunction, Request, Response } from "express"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

import "express-async-errors"
import "reflect-metadata"
import "./shared/index"
import { routes } from "./routes/routes"

const app = express()
const port = process.env.PORT || 3333

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.text())

app.use(cors())
app.use(routes)

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return response.status(400).json({
            message: err.message
        })
    }

    return response.status(500).json({
        status: "Error",
        message: `Internal server error - ${err}`
    })
})

app.listen(port, () => {
    console.log(`Executando o servidor na porta: ${port}`)
})