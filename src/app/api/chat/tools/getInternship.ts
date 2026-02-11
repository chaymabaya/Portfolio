import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    "Gives a summary of what kind of internship I'm looking for, plus my contact info and how to reach me. Use this tool when the user asks about my internship search or how to contact me for opportunities.",
  parameters: z.object({}),
  execute: async () => {
    return `Here’s what I’m looking for 👇

- 📅 **Availability**: Open to immediate opportunities
- 🌍 **Location**: Preferably **Rabat** , **Kenitra** or anywhere in the **Morroco**
- 🧑‍💻 **Focus**: Data Science, Embedded Electronics, IoT Systems, Robotics, AI/ML applications in electronics
- 🛠️ **Stack**: C, VHDL, MATLAB, Raspberry Pi, Arduino, TIA Portal, ROS, Node-RED, Jetson Nano , Python , React, SQL, TensorFlow
- ✅ **What I bring**:  Experience in designing embedded systems, implementing AI models on edge devices, developing automation and smart systems, and real-time data processing. Proven ability to translate technical requirements into functional hardware-software solutions.
- 🔥 Highly motivated, quick learner, and ready to tackle complex engineering challenges

📬 **Contact me** via:
- Email: baya.chaymae123@gmail.com
- LinkedIn: [linkedin.com/in/chaymae-baya/](- LinkedIn:https://www.linkedin.com/in/chaymae-baya/)
- GitHub: [github.com/chaymabaya](https://github.com/chaymabaya)

Let's build cool shit together ✌️
    `;
  },
});
