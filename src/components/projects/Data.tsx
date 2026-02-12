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
    date: 'FEBRUARY 2026', // <-- TODO: Update with your project date
    links: [
      // {
      //   name: 'Live Demo - You Are Here!',
      //   url: 'https://www.yuvraj.bio',
      // },
      {
        name: 'GitHub Repository',
        url: 'https://github.com/chaymabaya/Portfolio',
      },
    ],
    images: [
      { src: '/projects/ai-portfolio-chat.png', alt: 'The AI Native Portfolio chat interface in action' },
      { src: '/projects/ai-portfolio-home.png', alt: 'Homepage of the AI Native Portfolio' },
    ],
  },
  
  {
  title: 'Facial Emotion Recognition for Elderly People using Jetson Nano',
  description:
    'Developed a real-time facial emotion recognition system dedicated to elderly people using NVIDIA Jetson Nano. The system detects faces, analyzes emotional states, and enables intelligent monitoring through embedded AI and edge computing. Designed for healthcare and assistive robotics applications.',
  techStack: [
    'Jetson Nano',
    'Python',
    'ROS',
    'OpenCV',
    'FaceNet',
    'Embedded Linux',
    'TensorFlow / PyTorch',
    'Computer Vision',
    'Edge AI',
    "'FER2013' Dataset",
  ],
  date: '2025',
  links: [
      { name: 'GitHub Repository', url: 'https://github.com/chaymabaya/Detection_of_emotion' },
  ],
  images: [
    {
      src: '/projects/Facial_Emotion_Recognition.png',
      alt: 'Facial emotion recognition system on Jetson Nano',
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
      src: '/projects/Real_Time_Digital_Audio.png',
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
    src: '/projects/ai-portfolio-home.png', // <-- TODO: Make sure you have a preview image at this path
    content: (
      // The `title` here MUST match the full title in PROJECT_CONTENT
      <ProjectContent project={{ title: 'AI-Native Portfolio' }} />
    ),
  },
  {
    category: 'Embedded AI & Computer Vision',
    title: 'Facial Emotion Recognition',
    src: '/projects/Facial_Emotion_Recognition.png', // Use the main homepage screenshot for the preview
    content: (
      <ProjectContent project={{ title: 'Facial Emotion Recognition - Jetson Nano' }} />
    ),
  },
  {
    category: 'DSP & Audio Processing',
    title: 'Real-Time Digital Audio Processing',
    src: '/projects/Real_Time_Digital_Audio.png', // Use the main homepage screenshot for the preview
    content: (
      <ProjectContent project={{ title: 'Real-Time Digital Audio Processing' }} />
    ),
  },
 
];