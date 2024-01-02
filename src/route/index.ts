import * as express from "express"
import RegionalDataController from "../controllers/RegionalDataController"

const router = express.Router()

router.post("/regionaldata", RegionalDataController.create)
router.get("/regionaldata", RegionalDataController.getAll)
router.delete("/regionaldata/:id", RegionalDataController.delete)
router.put("/regionaldata/:id", RegionalDataController.update)

export default router;