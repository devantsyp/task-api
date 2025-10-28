import { param } from 'express-validator';
import { checkValidationResults } from './handleValidationErrors.js';

export const validateSearchById = [
  param('id')
    .notEmpty()
    .withMessage('This field must not be empty')
    .bail()
    .isInt()
    .withMessage('ID must be a number'),

  checkValidationResults,
];
