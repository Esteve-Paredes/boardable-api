import express from "express";
import jwt from "jsonwebtoken";
import { createUser, validateCredentials } from "../services/auth.services";
import { validationHandler } from "../middleware/validation";
import { userSchema } from "../models/user";

const authRouter = express.Router();
const jwtSecret = "ultra-secret";

authRouter.post(
  "/signup",
  validationHandler(userSchema),
  async (req, res, next) => {
    try {
      const userCreated = await createUser(req.body);
      const user = await validateCredentials(req.body);
      const payload = { userId: user.id, userName: user.username };
      const token = jwt.sign(payload, jwtSecret, { expiresIn: "40m" });
      res.status(200).json({
        ok: true,
        data: {
          id: user.id,
          username: user.username,
          token: token,
        },
      });
    } catch (error) {
      next(error);
    }
  }
);

authRouter.post("/login", async (req, res, next) => {
  try {
    const user = await validateCredentials(req.body);
    const payload = { userId: user.id, userName: user.username };
    const token = jwt.sign(payload, jwtSecret, { expiresIn: "40m" });
    res.status(201).json({
      ok: true,
      data: {
        id: user.id,
        username: user.username,
        token: token,
      },
    });
  } catch (error) {
    next(error);
  }
});

export default authRouter;
