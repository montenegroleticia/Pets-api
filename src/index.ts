import express, { json, Request, Response } from "express";
import httpStatus from "http-status";
import { petsRouter } from "./routers";

const app = express();
app.use(json());

app
  .get("health", (req: Request, res: Response) => res.sendStatus(httpStatus.OK))
  .use(petsRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Serve up and running on port ${port}`));
