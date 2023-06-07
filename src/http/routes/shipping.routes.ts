import express from "express";
import { getShippingByUserId } from "../controller/Shipping/getShipping.controller";
import { createShipping } from "../controller/Shipping/createShipping.controller";
import { updateShipping } from "../controller/Shipping/updateShipping.controller";
import { deleteShipping } from "../controller/Shipping/deleteShipping.controller";
import { auth } from "../middleware/auth";

const router = express.Router();

router.get("/shipping/:userId", auth, getShippingByUserId);
router.post("/shipping/:id", auth, deleteShipping);
router.post("/shipping", auth, createShipping);
router.put("/shipping/:id", auth, updateShipping);

export default router;