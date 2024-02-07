import express from "express";
import jwt from "jsonwebtoken";
import { createUser, validateCredentials } from "../services/auth.services";
import { validationHandler } from "../middleware/validation";
import { userSchema } from "../models/user";

const authRouter = express.Router();

authRouter.post(
  "/signup",
  validationHandler(userSchema),
  async (req, res, next) => {
    try {
      const user = await createUser(req.body);
      res.status(200).json({
        ok: true,
        data: {
          id: user.id,
          username: user.username,
        },
      });
    } catch (error) {
      next(error);
    }
  }
);

const jwtSecret = "ultra-secret";

authRouter.post("/login", async (req, res, next) => {
  try {
    const user = await validateCredentials(req.body);
    const payload = { userId: user.id, userName: user.username };
    const token = jwt.sign(payload, jwtSecret, { expiresIn: "40m" });
    res.status(201).json({
      ok: true,
      data: {
        token: token,
      },
    });
  } catch (error) {
    next(error);
  }
});

export default authRouter;
