import express, { json, Request, Response } from "express";
import httpStatus from "http-status";
import "express-async-errors";
import { petsRouter } from "./routers";
import { erroHandler } from "./middlewares/error-middleware";

const app = express();
app.use(json());

app
  .get("/health", (req: Request, res: Response) =>
    res.sendStatus(httpStatus.OK)
  )
  .use(petsRouter)
  .use(erroHandler);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Serve up and running on port ${port}`));
