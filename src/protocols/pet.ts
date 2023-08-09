export type Pet = {
  id: number;
  type: string;
  name: string;
  age: number;
};

export type PetPostOrPut = Omit<Pet, "id">;
