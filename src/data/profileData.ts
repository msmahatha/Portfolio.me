
import type { ProfileData } from '@/types/profile';

export const profileData: ProfileData = {
  name: "Madhusudan Mahatha",
  title: "Full Stack Developer | AI & ML Specialist",
  email: "madhusudanmahatha14@gmail.com",
  phone: "+91 6289600599",
  location: "Kolkata, West Bengal, India",
  about: {
    paragraph1: "I’m a passionate Full Stack Developer with a strong focus on Applied Artificial Intelligence and End-to-End System Architecture. I specialize in building scalable web applications and intelligent systems that bridge real-world problems with AI-powered solutions.",
    paragraph3: "Always learning. Always building."
  },
  whatIDo: [
    { icon: "pencil",  title: "Web Design",   text: "Crafting clean, cutting-edge UI/UX with professional expertise." },
    { icon: "code",    title: "Web Development", text: "Building high-quality, scalable websites & APIs." },
    { icon: "cpu", title: "Automations", text: "Developing intelligent automation solutions to streamline processes and enhance efficiency, such as reducing manual data processing by 25% through AI systems." },
    { icon: "briefcase",  title: "Real World Solutions", text: "Architecting practical and impactful solutions, like an ML model improving groundwater level prediction by 85%, for complex real-world challenges." }
  ],
  expertise: [
    { icon: "brainCircuit", title: "AI Model Deployment", text: "Deploying complex models like LSTMs for groundwater prediction and creating context-aware recommendation systems." },
    { icon: "server", title: "End-to-End Systems", text: "Leading innovation in edge-device deployments for AI-driven comic generation and building full-stack applications." },
    { icon: "cloud", title: "Cloud Integration", text: "Expanding my expertise in cloud integration, real-time systems, and scalable backend architecture." },
    { icon: "users", title: "Human-AI Interaction", text: "Refining skills in creating intuitive interfaces for complex AI systems using React, Node.js, and Python." }
  ],
  education: [
    {
      degree: "B.Tech, Brainware University",
      period: "Aug 2022 – Jun 2026 (expected)",
      details: ["9.3 till 6th sem"]
    }
  ],
  work: [
    {
      role: "AI Automation Intern",
      company: "Zoca Ai",
      period: "Mar 2025 – Jul 2025",
      bullets: [
        "Developed and deployed 3 AI-based automation systems using Python, CI/CD, and Jenkins, resulting in a 25% reduction in manual processing time.",
        "Configured and managed over 10 virtual machines (VMware, VirtualBox) for ML model deployment and testing, ensuring 99.9% uptime for development environments.",
        "Collaborated with cross-functional teams to ship Docker-based scalable solutions for automating customer support ticket categorization, which improved routing efficiency by 30%."
      ]
    }
  ],
  projects: [
    {
      name: "Agrokart",
      period: "Jul 2024 - Present",
      tech: "Next.js, TypeScript, Tailwind CSS, Firebase",
      highlights: [
        "A dynamic website for agricultural solutions and goods.",
        "Features a marketplace for farmers to buy and sell products.",
        "Provides resources and solutions for common agricultural challenges."
      ],
      image: "https://images.unsplash.com/photo-1620200423727-8127f75d7f53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMXx8YWdyaWN1bHR1cmV8ZW58MHx8fHwxNzU0MzMxNjQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      dataAiHint: "agriculture market",
      liveLink: "https://agrokart.netlify.app/"
    },
    {
      name: "Cursor for 2D Animation",
      period: "Mar 2025 – Apr 2025",
      tech: "Python, Manim, React.js, Node.js, Express.js, Google Gemini API, JavaScript, Tailwind CSS, AI/ML",
      highlights: [
        "Engineered full-stack application converting natural language prompts into animated videos using AI-powered code generation.",
        "Integrated Google Gemini API for intelligent Python/Manim code generation from user input.",
        "Optimized rendering pipeline for faster video creation."
      ],
      image: "https://images.unsplash.com/photo-1669023414180-4dcf35d943e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxtYW5pbSUyMGNvZGV8ZW58MHx8fHwxNzUzNTk3Njc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      dataAiHint: "animation code",
      link: "https://github.com/msmahatha/Cursor-for-2d-animation",
      liveLink: "https://2danimator.netlify.app/"
    },
    {
      name: "Website Cloner",
      period: "Jan 2025 - Present",
      tech: "Next.js, AI/ML, HTML, CSS, JavaScript, Tailwind CSS",
      highlights: [
        "Leverages AI for a self-healing backend.",
        "Provides real-time analysis of any website's HTML, CSS, and JavaScript.",
        "Smart fetching strategies bypass common hurdles like CORS.",
        "A next-generation tool for developers, designers, and SEO analysts."
      ],
      image: "https://images.unsplash.com/photo-1669023414166-a4cc7c0fe1f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOXx8d2Vic2l0ZSUyMGJ1aWxkZXJ8ZW58MHx8fHwxNzU2Mjg4NzkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      dataAiHint: "website analytics",
      link: "https://github.com/msmahatha/Website-Creator.git",
      liveLink: "https://websitecreator007.netlify.app/"
    },
    {
      name: "Groundwater Level Predictor",
      period: "Sept 2024 – Present",
      tech: "Python, TensorFlow, LSTM, Pandas, NumPy, scikit-learn, AI/ML",
      highlights: [
        "Built LSTM model predicting groundwater levels with 85% accuracy.",
        "Integrated crop-recommendation module for water-table sustainability."
      ],
      image: "https://images.unsplash.com/photo-1677907564161-7279d5aac75f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Z3JvdW5kd2F0ZXJ8ZW58MHx8fHwxNzQ3Mjg5OTY2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      dataAiHint: "water data",
      link: "https://github.com/msmahatha/groundwater-level-",
      liveLink: "https://groundwater.netlify.app/"
    },
    {
      name: "Web File Sharing Platform",
      period: "Nov 2024 – Dec 2024",
      tech: "Next.js, Firebase Storage, Firebase Auth, Tailwind CSS, TypeScript, Firebase",
      highlights: [
        "Developed a secure web platform for easy file uploads, downloads, and sharing.",
        "Implemented user authentication and role-based access control for file permissions.",
        "Enabled real-time notifications for file sharing activities and version history."
      ],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxmaWxlJTIwc2hhcmluZyUyMG9ubGluZXxlbnwwfHx8fDE3NDc3MzAxNDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      dataAiHint: "file sharing",
      liveLink: "https://filesharing007.netlify.app/"
    },
    {
      name: "Ambient Movie Recommendation System",
      period: "Oct 2024 – Nov 2024",
      tech: "Python, TensorFlow, Flask, scikit-learn, OpenWeather API, AI/ML",
      highlights: [
        "Recommends movies using mood, weather, trends & socio-political data with 90% accuracy.",
        "Delivered dynamic filtering algorithms & interactive Flask UI."
      ],
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxtb3ZpZSUyMHJlY29tbWVuZGF0aW9ufGVufDB8fHx8MTc0NzI4OTYwNXww&ixlib=rb-4.1.0&q=80&w=1080",
      dataAiHint: "movie cinema",
      link: "https://github.com/msmahatha/ambient-movie-for-you"
    },
    {
      name: "AI Comic Creator “ComicCrafter”",
      period: "Feb 2025 – Mar 2025",
      tech: "Python, Llama, Mistral, Stable Diffusion, Streamlit, AI/ML",
      highlights: [
        "Locally deployed multimodal comic generator with real-time editing.",
        "Optimised for Intel-based edge devices, reducing latency by 35%."
      ],
      image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxjb21pY2Jvb2t8ZW58MHx8fHwxNzQ3MjkxOTA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      dataAiHint: "comic art",
      link: "https://github.com/msmahatha/ComicCrafter-AI"
    },
    {
      name: "Facial Recognition Attendance System",
      period: "Jan 2024 – Feb 2024",
      tech: "Python, OpenCV, Dlib, Flask, SQLite, AI/ML",
      highlights: [
        "Developed a system to automate attendance tracking using facial recognition.",
        "Achieved 95% accuracy in identifying individuals in varied lighting conditions.",
        "Integrated a web interface for real-time attendance monitoring and report generation."
      ],
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMnx8c2Nob29sJTIwYXR0ZW5kZW5jZXxlbnwwfHx8fDE3NDczNzA1MjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      dataAiHint: "face recognition"
    },
    {
      name: "AI Text Summarizer",
      period: "Dec 2023 – Jan 2024",
      tech: "Python, NLTK, spaCy, Transformers, Flask, AI/ML",
      highlights: [
        "Developed an extractive and abstractive text summarization tool.",
        "Achieved a ROUGE score of 0.45 on benchmark datasets.",
        "Deployed as a simple web service using Flask."
      ],
      image: "https://images.unsplash.com/photo-1739805591936-39f03383c9a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOHx8YWklMjBzdW1tYXJ5fGVufDB8fHx8MTc0NzM3MjE2OHww&ixlib=rb-4.1.0&q=80&w=1080",
      dataAiHint: "text summary"
    },
    {
      name: "TruthGuard - Fact Checking Website",
      period: "Jan 2025 – Feb 2025",
      tech: "Next.js, Genkit (Gemini), Firebase, Tailwind CSS, TypeScript, AI/ML",
      highlights: [
        "Developed an AI-powered fact-checking website to combat misinformation.",
        "Utilized Genkit with Gemini for natural language processing and claim verification.",
        "Achieved 80% accuracy in identifying misleading content from various sources.",
        "Implemented a user-friendly interface for submitting claims and viewing results."
      ],
      image: "https://images.unsplash.com/photo-1585995603666-5bd6b348de9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxmYWtlJTIwbmV3c3xlbnwwfHx8fDE3NDc3MzA3ODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      dataAiHint: "fact check",
      link: "https://github.com/msmahatha/TruthGuard"
    },
    {
      name: "Chess + File upload",
      period: "May 2024 – Jun 2024",
      tech: "Next.js, TypeScript, Tailwind CSS, Firebase, WebSockets",
      highlights: [
        "Invite friends to private rooms and play chess together in real-time.",
        "Upload documents, images, or resources and share them with your opponent.",
        "Manage your games and uploaded files from a personal dashboard.",
        "Clean, responsive design, optimized for desktops, tablets, and mobile devices."
      ],
      image: "https://images.unsplash.com/photo-1523875194681-bedd468c58bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxjaGVzc3xlbnwwfHx8fDE3NTM2MDAxNzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      dataAiHint: "chess game",
      liveLink: "https://whimsical-peony-823e6d.netlify.app/"
    },
    {
      name: "Love Calculator",
      period: "Jun 2024 - Jul 2024",
      tech: "JavaScript, HTML, CSS, Netlify",
      highlights: [
        "Calculates love compatibility based on WhatsApp chat analysis.",
        "Analyzes message frequency, time patterns, emoji use, and conversational dynamics.",
        "Inspired by a viral reel to create a romantic and intelligent web app."
      ],
      image: "https://images.unsplash.com/photo-1516980907201-943c13a8d03c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxsb3ZlfGVufDB8fHx8MTc1MzY1NzkyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      dataAiHint: "love calculator",
      liveLink: "https://love-calculator007.netlify.app/"
    },
    {
      name: "YouTube → Spotify Playlist Converter",
      period: "May 2025 – Aug 2025",
      tech: "Java, Spring Boot, Spotify API, YouTube API",
      highlights: [
        "Built a REST API to convert YouTube playlists into Spotify playlists with OAuth2 authentication, async processing, and Swagger docs; deployed using Maven with Docker support."
      ],
      image: "https://i.ibb.co/b3wJvCj/youtube-spotify.png",
      dataAiHint: "youtube spotify",
      link: "https://github.com/msmahatha/youtubePlaylistToSportifyPlaylist"
    }
  ],
  skills: {
    "Programming Languages": ["Python", "Java", "JavaScript", "SQL", "TypeScript"],
    "Frameworks & Libraries": ["Next.js", "React", "Node.js", "Flask", "Streamlit"],
    "AI/ML": ["OpenCV", "scikit-learn", "LSTM", "Neural Networks", "TensorFlow", "Pandas", "NumPy", "Stable Diffusion", "Llama", "Mistral", "Genkit"],
    "Databases": ["MongoDB", "SQLite", "Supabase"],
    "Cloud & DevOps": ["Docker", "Oracle Cloud", "Firebase", "VM management", "Git", "IBM Cloud"]
  },
  certifications: [
    "Intel Unnati Training 2025",
    "Getting Started with Artificial Intelligence by IBM",
    "Database Management System Certification Infosys Springboard",
    "Java Programming Training Spoken Tutorial Project IIT Bombay"
  ],
  extras: [
    "Organiser, Texibition – Annual Tech Fest (2024) – boosted turnout by 30%.",
    "Organiser, Chess Tournament (2023) – managed 200+ participants.",
    "Lead, Texibition 2K25 – Annual Tech Fest (2025) – boosted turnout by 300%.",
    "Languages: English, Hindi, Bengali"
  ],
  social: {
    github: "https://github.com/msmahatha/",
    linkedin: "https://www.linkedin.com/in/msmahatha/",
    instagram: "https://www.instagram.com/msmahatha/",
    x: "https://x.com/msmahatha",
    leetcode: "https://leetcode.com/u/msmahatha/",
    geeksforgeeks: "https://auth.geeksforgeeks.org/user/your-username",
    codeforces: "https://codeforces.com/profile/msmahatha007"
  }
};

    