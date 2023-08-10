import { Request, Response } from "express";
import {
  deletePetService,
  getPetByIdService,
  getPetsService,
  postPetsService,
  putPetService,
} from "../services";
import httpStatus from "http-status";
import { idValidator } from "../utils/idValidator";
import { PetPostOrPut } from "../protocols/pet";

export async function postPets(req: Request, res: Response) {
  try {
    const pet = req.body as PetPostOrPut;
    await postPetsService(pet);

    res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

export async function getPets(req: Request, res: Response) {
  try {
    const pets = await getPetsService();
    res.status(httpStatus.OK).send(pets);
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

export async function getPetById(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    if (!idValidator(id)) return res.sendStatus(httpStatus.BAD_REQUEST);

    const pet = await getPetByIdService(id);
    res.status(httpStatus.OK).send(pet);
  } catch (error) {
    if (error.type === "NotFoundError") {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

export async function putPet(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    if (!idValidator(id)) return res.sendStatus(httpStatus.BAD_REQUEST);

    const pet = req.body as PetPostOrPut;

    await putPetService(id, pet);
    res.sendStatus(httpStatus.OK);
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

export async function deletePet(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    if (!idValidator(id)) return res.sendStatus(httpStatus.BAD_REQUEST);

    await deletePetService(id);
    res.sendStatus(httpStatus.OK);
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}
