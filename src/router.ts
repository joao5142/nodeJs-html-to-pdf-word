import { Router } from "express";
import routerProfessor from "./routes/professor";

const router: Router = Router();

//Routes
router.use("/professor", routerProfessor);

export { router };
