import express from "express";
import { createUser } from "../services/auth.services";

const authRouter = express.Router();

authRouter.post("/singup", async (req, res) => {
  try {
    console.log(req.body);
    const body = await createUser(req.body);
    res.status(200).json({
      ok: true,
      data: body,
    });
  } catch (error) {
    console.log(error);
  }
});

export default authRouter;
