import express from "express";
import cors from "cors";
import errorHandler from "./middleware/error";
import authRouter from "./routers/auth-router";
import myBoardsRouter from "./routers/my-boards-router";
import boardsRouter from "./routers/boards-router";

const app = express();
const port = 5500;

const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use("/", authRouter);
app.use("/", myBoardsRouter);
app.use("/boards", boardsRouter);

app.use(errorHandler);

app.listen(port, () => console.log(`Escuchando al puerto ${port}`));
