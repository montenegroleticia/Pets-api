import { Router } from "express";
import {
  deletePet,
  getPetById,
  getPets,
  postPets,
  putPet,
} from "../controllers";
import { validateSchema } from "../middlewares/schemaMiddleware";
import { PetSchema } from "../schemas/petSchema";

const petsRouter = Router();

petsRouter.post("/post", validateSchema(PetSchema), postPets);
petsRouter.get("/pets", getPets);
petsRouter.get("/pets/:id", getPetById);
petsRouter.put("/pets/:id", validateSchema(PetSchema), putPet);
petsRouter.delete("/pets/:id", deletePet);

export { petsRouter };
