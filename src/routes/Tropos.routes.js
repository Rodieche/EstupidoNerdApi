import { Router } from "express";
import { getTropo, getTropos } from "../controllers/Tropo.controllers";

const router = Router();

router.route('/')
    .get(
        getTropos
    )

router.route('/:id')
    .get(
        getTropo
    )

export default router;