import express from "express";
import asyncHandler from "express-async-handler";
import Pad from "../models/padModel.js";

const router = express.Router();

router.get(
  "/",-
  asyncHandler(async (req, res) => {
    const pads = await Pad.find({});
    res.json(pads);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const pad = await Pad.findById(req.params.id);
    if (pad) {
      res.json(pad);
    } else {      res.status(404);
      console.log("Pad not found");
      throw new Error("Pad not found!");
    }
  })
);

export default router;