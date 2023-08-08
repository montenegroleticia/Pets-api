import { Router } from "express";
import {
  deletePet,
  getPetById,
  getPets,
  postPets,
  putPet,
} from "../Controllers";

const petsRouter = Router();

petsRouter.post("/post", postPets);
petsRouter.get("/pets", getPets);
petsRouter.get("/pets/:id", getPetById);
petsRouter.put("/pets/:id", putPet);
petsRouter.delete("/pets/:id", deletePet);

export { petsRouter };
