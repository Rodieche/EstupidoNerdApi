import { Router } from "express";
import { getTropos } from "../controllers/Tropo.controllers";

const router = Router();

router.route('/')
    .get(getTropos)

export default router;