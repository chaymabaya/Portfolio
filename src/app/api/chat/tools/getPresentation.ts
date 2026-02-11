import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Chaymae Baya. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "Here is a little bit about me, you can see it above!",
        //"I'm Chaymae Baya, a 26-year-old engineer specialized in Embedded Electronics. I hold a Master’s in Embedded Electronics (2025) from Ibn Tofaïl University, Kenitra, and a Bachelor’s in Physics (2023). I enjoy designing and developing embedded systems, robotics, and AI-powered smart devices. I’m passionate about turning complex technical problems into practical solutions, constantly learning, and taking on challenging projects. Outside of tech, I like exploring new technologies and creative problem-solving.",

    };
  },
});