import z from "zod";

export const schema = z.object({
  url: z.string().url({ message: "Please enter a valid URL" }).min(1, { message: "URL is required" }),
});

export type FormData = z.infer<typeof schema>;
