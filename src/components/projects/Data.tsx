// File: data.tsx

import Image from 'next/image';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// --- PROJECT DATABASE ---
// This array holds the detailed information for each project.
const PROJECT_CONTENT = [
    {
    // --- NEW AI-NATIVE PORTFOLIO PROJECT ---
    title: 'AI-Native Portfolio',
    description:
      'Static portfolios are boring. Mine talks back. The world’s first AI-native portfolio where an AI avatar answers your questions about me in real time.',
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Mistral AI API',
      'OpenAI API',
      'Node.js',
      'Vercel',
    ],
    date: 'August 2025', // <-- TODO: Update with your project date
    links: [
      {
        name: 'Live Demo - You Are Here!',
        url: 'https://www.yuvraj.bio',
      },
      {
        name: 'GitHub Repository',
        url: 'https://github.com/yuvraj0412s/ai-native-portfolio',
      },
    ],
    images: [
      { src: '/projects/ai-portfolio-chat.png', alt: 'The AI Native Portfolio chat interface in action' },
      { src: '/projects/ai-portfolio-home.png', alt: 'Homepage of the AI Native Portfolio' },
    ],
  },
  {
  title: 'Smart Access Control System',
  description:
    'Designed and implemented a smart security system combining RFID authentication and facial recognition. The door unlocks automatically when a valid RFID card or a recognized face is detected, using embedded hardware and real-time computer vision.',
  techStack: [
    'Python',
    'OpenCV',
    'FaceNet',
    'Raspberry Pi',
    'Camera Module',
    'RFID',
    'Embedded Linux',
  ],
  date: '2024',
  links: [],
  images: [
    {
      src: '/projects/access-control.png',
      alt: 'Smart access control system with RFID and face recognition',
    },
  ],
},

  {
  title: 'AI-Powered Medical Assistance Robot',
  description:
    'Developed an intelligent robotic assistant integrating computer vision and AI for patient interaction. The system performs facial recognition, emotion analysis, and real-time perception using NVIDIA Jetson hardware.',
  techStack: [
    'Jetson Nano',
    'Jetson TX2 NX',
    'Python',
    'ROS',
    'OpenCV',
    'FaceNet',
    'Embedded Linux',
  ],
  date: '2025',
  links: [],
  images: [
    {
      src: '/projects/medical-robot.png',
      alt: 'AI-powered medical assistance robot',
    },
  ],
},
  {
  title: 'Real-Time Digital Audio Noise Filtering',
  description:
    'Designed and implemented a real-time digital filter to remove noise from audio signals. The system was tested and validated using MATLAB and DSP techniques.',
  techStack: [
    'MATLAB',
    'Digital Signal Processing',
    'Real-Time Filtering',
    'Audio Signal Analysis',
  ],
  date: '2024',
  links: [],
  images: [
    {
      src: '/projects/dsp-audio.png',
      alt: 'Real-time audio noise filtering using DSP',
    },
  ],
},
  
   
];

// --- COMPONENT & INTERFACE DEFINITIONS ---
// Define interface for project prop
interface ProjectProps {
  title: string;
}

// This component dynamically renders the project details
const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data from the database
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// --- MAIN DATA EXPORT ---
// This is the data used by your main portfolio page.
export const data = [
   {
    category: 'AI & Next.js',
    title: 'AI-Native Portfolio',
    src: '/projects/ai-portfolio-preview.png', // <-- TODO: Make sure you have a preview image at this path
    content: (
      // The `title` here MUST match the full title in PROJECT_CONTENT
      <ProjectContent project={{ title: 'AI-Native Portfolio' }} />
    ),
  },
  {
    category: 'Embedded AI & Robotics',
    title: 'Smart Access Control System',
    src: '/projects/agroai-preview.png', // Use the main homepage screenshot for the preview
    content: (
      <ProjectContent project={{ title: 'AgroAI' }} />
    ),
  },
  {
    category: 'Full-Stack & AI',
    title: 'Holohype',
    src: '/projects/holohype-preview.png', // <-- TODO: Make sure you have a preview image at this path
    content: (
      <ProjectContent project={{ title: 'Holohype' }} />
    ),
  },
  {
    category: 'Frontend Development',
    title: 'Old Portfolio',
    src: '/projects/old-portfolio-preview.png', // <-- TODO: Make sure you have a preview image at this path
    content: (
      <ProjectContent project={{ title: 'Old Portfolio' }} />
    ),
  },
  {
    category: 'Frontend Development',
    title: 'YouTube Clone',
    src: '/projects/yt-clone-preview.png', // <-- TODO: Make sure you have a preview image at this path
    content: (
      <ProjectContent project={{ title: 'YouTube Clone' }} />
    ),
  },
  {
    category: 'Edge Computing',
    title: 'Latency-Aware Task Partitioning',
    src: '/projects/RP_preview.png', // Placeholder image
    content: (
      <ProjectContent project={{ title: 'Latency-Aware Task Partitioning' }} />
    ),
  },
];