import express from "express";
import { getShippingByUserId } from "../controller/Shipping/getShipping.controller";
import { createShipping } from "../controller/Shipping/createShipping.controller";
import { updateShipping } from "../controller/Shipping/updateShipping.controller";
import { deleteShipping } from "../controller/Shipping/deleteShipping.controller";

const router = express.Router();

router.get("/shipping/:userId", getShippingByUserId);
router.post("/shipping/:id", deleteShipping);
router.post("/shipping", createShipping);
router.put("/shipping/:id", updateShipping);

export default router;