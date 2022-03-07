import express from "express";
import {
    getAllHistories,
    createHistory,
    getHistoryById,
    deleteHistory
} from "../controllers/History.js";

import {resolve} from "../middleware/resolve.js"

const router = express.Router();

router.get('/', getAllHistories);
router.get('/:id', getHistoryById);
router.post('/', resolve ,createHistory);
// router.patch('/:id', updateProduct);
router.delete('/:id', deleteHistory);

export default router;