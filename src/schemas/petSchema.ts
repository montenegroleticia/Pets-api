import joi from "joi";

export const PetSchema = joi.object({
  type: joi.string().required(),
  name: joi.string().required(),
  age: joi.number().min(0).required(),
});
