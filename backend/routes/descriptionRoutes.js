import express from "express";
import {getAllValues} from "../controllers/Description.js";
 
const router = express.Router();
 
router.get('/',getAllValues);
 
export default router;