import Joi from "joi";

export function getErrorClass(error) {
  if (!error) {
    return undefined;
  }

  return "inputError";
}

export const validationSchemaObject = {
  email: Joi.string().required().email({ tlds: {} }),
  stringRequired: Joi.string().required(),
  anyOptional: Joi.any().optional(),
};
