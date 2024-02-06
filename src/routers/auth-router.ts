import express from "express";
/* import { createUser } from "../services/auth.services"; */

const authRouter = express.Router();

authRouter.post("/singup", async (req, res) => {
  try {
    /* const body = await createUser(req.body); */
    res.status(200).json({
      ok: true,
      data: {
        username: "esteve",
      },
    });
  } catch (error) {
    console.log(error);
  }
});

export default authRouter;
