"use client";

import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

interface ProjectData {
  category: string;
  title: string;
  videoSrc: string;
  description: string;
  features: string[];
  technologies: string[];
  challenges: string[];
  learnings: string[];
  githubLink?: string;
  liveDemoLink?: string;
}

const projectsDataWithVideos: ProjectData[] = [
  {
    category: "AI/ML (LLM Survival Guide)",
    title: "The Survival Guide",
    videoSrc: "/videos/hackocalypse-demo.mp4",
    description: "A Retrieval-Augmented Generation (RAG) system built with Groq API, designed to help survivors navigate an apocalyptic scenario by processing map data and real-time threats.",
    features: [
      "Real-time threat assessment and resource tracking",
      "Dynamic survival plan generation based on changing conditions",
      "Efficient processing and indexing of complex map descriptions",
      "Contextual awareness of real-time updates (zombie movements, weather, safe zones)",
    ],
    technologies: ["Python", "Groq API (LLM)", "FAISS (Vector Search)", "Streamlit (Web Interface)"],
    challenges: [
      "Integrating diverse information streams (static map + dynamic updates)",
      "Ensuring real-time response generation within a 5-second limit",
      "Developing robust prompting strategies for actionable survival plans",
      "Maintaining temporal and spatial context for accurate decision-making",
    ],
    learnings: [
      "Practical application of RAG systems for dynamic problem-solving",
      "Optimizing LLM interactions for speed and accuracy",
      "Strategies for real-time data ingestion and context management",
      "Building interactive web interfaces for AI applications",
    ],
    githubLink: "https://github.com/Ayushi40804/hackocalypsebot",
    liveDemoLink: "https://hackocalypse-demo.vercel.app",
  },
  {
    category: "Cybersecurity (Vulnerability Scanning Tool)",
    title: "ARACHNET",
    videoSrc: "/videos/arachnet-demo.mp4",
    description: "This tool provides comprehensive scanning for common web vulnerabilities like XSS, IDOR, and SQLi, designed for ethical hacking and penetration testing.",
    features: [
      "XSS detection (various payloads)",
      "IDOR vulnerability identification",
      "SQL Injection detection (time-based, error-based)",
      "Terminal-based interface",
    ],
    technologies: ["Python", "Requests Library", "BeautifulSoup", "SQLMap API (hypothetical)"],
    challenges: [
      "Handling different types of HTTP responses",
      "Developing robust regex patterns for detection",
      "Ensuring efficiency in scanning large applications",
    ],
    learnings: [
      "Deepened understanding of web vulnerabilities",
      "Improved error handling and logging practices",
      "Techniques for asynchronous request handling",
    ],
    githubLink: "https://github.com/ayushi40804",
  },
  {
    category: "Web Development (Proxy Server)",
    title: "CRISP",
    videoSrc: "/videos/crisp-demo.mp4",
    description: "A lightweight web proxy server with a graphical user interface, built to intercept, inspect, and modify HTTP/HTTPS requests and responses in real-time.",
    features: [
      "Intercept HTTP/HTTPS traffic",
      "View request/response headers and bodies",
      "Modify requests/responses before forwarding",
      "Simple graphical interface for ease of use",
    ],
    technologies: ["Python", "Flask", "Tkinter (for GUI)", "Socket Programming"],
    challenges: [
      "Implementing HTTPS interception (SSL/TLS handling)",
      "Ensuring stable connections across various websites",
      "Optimizing for performance and low latency",
    ],
    learnings: [
      "Advanced network programming concepts",
      "Understanding of proxy protocols and HTTP/HTTPS intricacies",
      "GUI development best practices",
    ],
    githubLink: "https://github.com/ayushi40804",
  },
  {
    category: "AI/ML & Security",
    title: "Hacktoberfest '24 Contributions",
    videoSrc: "/videos/hacktoberfest-demo.mp4",
    description: "Contributions to various open-source projects during Hacktoberfest 2024, including AI/ML model development, network security tools, and speech technology.",
    features: [
      "Stable Diffusion LoRA model for custom image generation (Pokemon theme)",
      "Cross-platform Port Scanner for network reconnaissance",
      "Text-to-Speech tool using DeepSpeech for speech synthesis",
    ],
    technologies: ["Python", "PyTorch", "Hugging Face Diffusers", "Go (for Port Scanner)", "DeepSpeech", "TensorFlow"],
    challenges: [
      "Adapting to diverse codebases and project requirements",
      "Debugging and optimizing AI models",
      "Collaborating effectively in open-source environments",
    ],
    learnings: [
      "Practical application of ML concepts in real-world scenarios",
      "Best practices for secure coding and network tool development",
      "Open-source contribution workflows and community engagement",
    ],
    githubLink: "https://github.com/Ayushi40804/stablediffusionlora",
    liveDemoLink: "https://holopin.io/@ayushi40804",
  },
  {
    category: "VS Code Extension",
    title: "Language Setup",
    videoSrc: "/videos/language_setup.mp4",
    description: "A VS Code extension designed to streamline the initial setup of development environments by detecting project language, checking for tools, suggesting extensions, and assisting with dependency installation.",
    features: [
      "Automatic language detection (Python, Node.js, C/C++)",
      "Tool and runtime checks with guided installation",
      "Recommended VS Code extension suggestions",
      "Local dependency installation prompts (e.g., `pip install`, `npm install`)",
      "Automated workspace settings application",
    ],
    technologies: ["TypeScript", "Node.js", "VS Code Extension API"],
    challenges: [
      "Handling diverse language-specific requirements and configurations",
      "Ensuring cross-platform compatibility for tool detection and installation",
      "Managing user prompts and notifications within the VS Code environment",
      "Maintaining an up-to-date list of recommended extensions and settings",
    ],
    learnings: [
      "Deepened understanding of VS Code extension development lifecycle",
      "Best practices for interacting with the VS Code API",
      "Strategies for automating environment setup across different languages",
      "User experience considerations for developer tools",
    ],
    githubLink: "https://github.com/Ayushi40804/Language-Setup",
    liveDemoLink: "https://marketplace.visualstudio.com/items?itemName=Ayushi40804.language-setup",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-10 bg-transparent flex flex-wrap justify-center gap-6">
      <h2 className="w-full text-center text-3xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans mb-10">
        My Projects
      </h2>
      {projectsDataWithVideos.map((project, index) => (
        <CardContainer
          key={index}
          containerClassName="py-0"
          className="inter-var"
        >
          <CardBody
            className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] rounded-xl border
            p-4"
          >
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {project.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {project.description.substring(0, 150)}...
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <video
                src={project.videoSrc}
                className="w-full object-cover rounded-xl group-hover/card:shadow-xl h-48"
                autoPlay
                loop
                muted
                playsInline
              >
                Your browser does not support the video tag.
              </video>
            </CardItem>

            <div
              className="flex justify-between items-center
              mt-4"
            >
              {project.githubLink && (
                <CardItem
                  translateZ={20}
                  as="a"
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors duration-200"
                >
                  <FaGithub className="h-6 w-6" />
                </CardItem>
              )}
              {project.liveDemoLink && (
                <CardItem
                  translateZ={20}
                  as="a"
                  href={project.liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors duration-200"
                >
                  <HiOutlineExternalLink className="h-6 w-6" />
                </CardItem>
              )}
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </section>
  );
}