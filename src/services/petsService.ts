import { notFoundError } from "../errors";
import { PetPostOrPut } from "../protocols/pet";
import {
  deletePetRepository,
  getPetByIdRepository,
  getPetsRepository,
  postPetsRepository,
  putPetRepository,
} from "../repositories/petsRepository";

export async function postPetsService(pet: PetPostOrPut) {
  return await postPetsRepository(pet);
}

export async function getPetsService() {
  return await getPetsRepository();
}

export async function getPetByIdService(id: number) {
  const pet = await getPetByIdRepository(id);
  if (!pet) {
    throw notFoundError();
  }
  return pet;
}

export async function putPetService(id: number, pet: PetPostOrPut) {
  await getPetByIdService(id);
  return await putPetRepository(id, pet);
}

export async function deletePetService(id: number) {
  await getPetByIdService(id);
  return await deletePetRepository(id);
}
