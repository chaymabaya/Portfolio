
import { tool } from "ai";
import { z } from "zod";


export const getSports = tool({
  description:
    "This tool will show some photos of Chaymae enjoying her hobbies and sports",
  parameters: z.object({}),
  execute: async () => {
    return "HHere are some pictures of me enjoying cycling and staying active! ";
  },
});