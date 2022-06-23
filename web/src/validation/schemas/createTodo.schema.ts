import * as yup from 'yup';

import * as MESSAGES from '../messages';

export const createTodoSchema = yup.object().shape({
  title: yup
    .string()
    .trim()
    .min(3, MESSAGES.INCORRECT_MIN_LENGTH_3)
    .max(32, MESSAGES.INCORRECT_MAX_LENGTH_32)
    .required(MESSAGES.REQUIRE_MESSAGE),
  description: yup
    .string()
    .trim()
    .min(3, MESSAGES.INCORRECT_MIN_LENGTH_3)
    .max(255, MESSAGES.INCORRECT_MAX_LENGTH_255),
});
