import { Router } from "express";

const petsRouter = Router();

petsRouter.post("/post");
petsRouter.get("/pets");
petsRouter.get("/pets/:id");
petsRouter.put("/pets/:id");
petsRouter.delete("/pets/:id");

export { petsRouter };
