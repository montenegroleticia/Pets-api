import { Pet, PetPostOrPut } from "../protocols/pet";
import connection from "../database";

export async function postPetsRepository(pet: PetPostOrPut) {
  const { type, name, age } = pet;
  const result = await connection.query<Pet>(
    `INSERT INTO pets (type, name, age) VALUES ($1, $2, $3)`,
    [type, name, age]
  );
  return result.rows[0];
}

export async function getPetsRepository() {
  const result = await connection.query<Pet>(`SELECT * FROM pets`);
  return result.rows;
}

export async function getPetByIdRepository(id: number) {
  const result = await connection.query<Pet>(`SELECT * FROM pets WHERE id=$1`, [
    id,
  ]);
  return result.rows[0];
}

export async function putPetRepository(id: number, pet: PetPostOrPut) {
  const { type, name, age } = pet;
  const result = await connection.query(
    `UPDATE pets SET type = $1, name = $2, age = $3 WHERE id = $4`,
    [type, name, age, id]
  );
  return result.rowCount;
}

export async function deletePetRepository(id: number) {
  const result = await connection.query(`DELETE FROM pets WHERE id=$1`, [id]);
  return result.rowCount;
}
