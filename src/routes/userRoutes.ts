import express from 'express';
import { validateData } from '../middleware/requestValidation';
import {
  userRegistrationSchema,
  userLoginSchema,
} from '../schemas/userSchemas';

const userRouter = express.Router();

import { registerUser, loginUser } from '../controllers/userController';

userRouter.post(
  '/register',
  validateData(userRegistrationSchema),
  registerUser
);
userRouter.post('/login', validateData(userLoginSchema), loginUser);

export default userRouter;
