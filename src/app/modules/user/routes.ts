import express from "express"
import { UserControllers } from "./controllers"
const router = express.Router()

router.get("/", UserControllers.getAllUsers)

export const UserRoutes = router