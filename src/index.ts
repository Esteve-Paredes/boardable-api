import express from "express";
import cors from "cors";
import authRouter from "./routers/auth-router";

const app = express();
const port = 5500;

const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use("/", authRouter);

app.listen(port, () => console.log(`Escuchando al puerto ${port}`));
