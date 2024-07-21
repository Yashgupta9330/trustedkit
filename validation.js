import { z } from "zod";

export const LoginSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }).optional(),
    password: z.string().min(1, { message: "Password is required" }).min(8, { message: "Password must be at least 8 characters long" })
  });
  
  
  