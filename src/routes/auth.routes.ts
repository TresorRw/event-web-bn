import { Router } from "express";
import { AllUsers, LogUser, RegisterUser } from "../controllers/Auth";

export const AuthRoutes = Router();

AuthRoutes.post("/signup", RegisterUser);
AuthRoutes.post("/signin", LogUser);
AuthRoutes.get("/users", AllUsers);
