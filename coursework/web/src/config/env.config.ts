import * as z from "zod";

const schema = z.object({
  VITE_API_URL: z.url()
});

export const Env = schema.parse(import.meta.env);
