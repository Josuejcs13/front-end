import { z } from "zod";

export type registerData = z.infer<typeof registerSchema>;

const registerSchema = z.object({
  email: z.string().email().min(1),
  password: z.string().min(8),
  name: z.string().min(1),
});

export default registerSchema;
