// src/zod/PostSchema.ts

import { z } from "zod";

export const postSchema = z.object({
  postContent: z.string().min(1, "Post content is required"),
});
