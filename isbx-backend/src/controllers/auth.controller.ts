import { Request, Response } from "express";
import { generateToken } from "../services/auth.service";

const mockUser = {
  id: 1,
  email: "test@example.com",
  password: "password123",
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (email !== mockUser.email || password !== mockUser.password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = generateToken({
    userId: mockUser.id,
    email: mockUser.email,
  });

  res.json({ token });
};
