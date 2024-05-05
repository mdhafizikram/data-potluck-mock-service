import { Request, Response } from "express";

export const registerUser = (req: Request, res: Response) => {
  // Handle user registration logic using validated data from req.body
  res.json({ message: "User registered successfully", data: req.body });
};

export const loginUser = (req: Request, res: Response) => {
  // Handle user login logic using validated data from req.body
  res.json({ message: "User logged in successfully", data: req.body });
};
