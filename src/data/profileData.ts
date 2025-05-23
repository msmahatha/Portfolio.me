
import type { ProfileData } from '@/types/profile';

export const profileData: ProfileData = {
  name: "Madhusudan Mahatha",
  title: "Full Stack Developer | AI & ML Specialist",
  email: "madhusudanmahatha14@gmail.com",
  phone: "+91 6289600599",
  location: "Kolkata, West Bengal, India",
  about: {
    paragraph1: "Highly motivated Full Stack Developer with a strong passion for Artificial Intelligence and Machine Learning. For instance, in the 'Groundwater Level Predictor' project, I developed an LSTM model achieving 85% prediction accuracy, contributing to more sustainable water resource management. I also designed, developed, and deployed the 'Ambient Movie Recommendation System' leveraging Python and Flask, which demonstrated a 90% accuracy in suggesting relevant movies based on dynamic user context.",
    paragraph2: "I am dedicated to crafting clean, efficient code and user-friendly experiences. One such contribution to impactful technological advancements was the 'AI Comic Creator (ComicCrafter),' where I optimized a multimodal generation pipeline for Intel-based edge devices, achieving a 35% reduction in latency, making AI-powered creative tools more accessible. Eager to tackle challenging projects, I continuously learn and explore new technologies. You can find more about my work on GitHub and LinkedIn (links in the sidebar)."
  },
  whatIDo: [
    { icon: "pencil",  title: "Web Design",   text: "Crafting clean, cutting-edge UI/UX with professional expertise." },
    { icon: "code",    title: "Web Development", text: "Building high-quality, scalable websites & APIs." },
    { icon: "cpu", title: "Automations", text: "Developing intelligent automation solutions to streamline processes and enhance efficiency, such as reducing manual data processing by 25% through AI systems." },
    { icon: "briefcase",  title: "Real World Solutions", text: "Architecting practical and impactful solutions, like an ML model improving groundwater level prediction by 85%, for complex real-world challenges." }
  ],
  education: [
    {
      degree: "B.Tech, Brainware University",
      period: "Aug 2022 – Jun 2026 (expected)",
      details: ["Current CGPA avg: 9.20/10 (top 5 semesters)"]
    }
  ],
  work: [
    {
      role: "AI Automation Intern",
      company: "Zoca Ai",
      period: "Mar 2025 – Present",
      bullets: [
        "Developed and deployed 3 AI-based automation systems using Python, CI/CD, and Jenkins, resulting in a 25% reduction in manual processing time.",
        "Configured and managed over 10 virtual machines (VMware, VirtualBox) for ML model deployment and testing, ensuring 99.9% uptime for development environments.",
        "Collaborated with cross-functional teams to ship Docker-based scalable solutions for automating customer support ticket categorization, which improved routing efficiency by 30%."
      ]
    }
  ],
  projects: [
    {
      name: "Groundwater Level Predictor",
      period: "Sept 2024 – Present",
      tech: "Python, TensorFlow, LSTM, Pandas, NumPy, scikit-learn",
      highlights: [
        "Built LSTM model predicting groundwater levels with 85% accuracy.",
        "Integrated crop-recommendation module for water-table sustainability."
      ],
      image: "https://images.unsplash.com/photo-1677907564161-7279d5aac75f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Z3JvdW5kd2F0ZXJ8ZW58MHx8fHwxNzQ3Mjg5OTY2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      dataAiHint: "water data"
    },
    {
      name: "Ambient Movie Recommendation System",
      period: "Oct 2024 – Nov 2024",
      tech: "Python, TensorFlow, Flask, scikit-learn, OpenWeather API",
      highlights: [
        "Recommends movies using mood, weather, trends & socio-political data with 90% accuracy.",
        "Delivered dynamic filtering algorithms & interactive Flask UI."
      ],
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxtb3ZpZSUyMHJlY29tbWVuZGF0aW9ufGVufDB8fHx8MTc0NzI4OTYwNXww&ixlib=rb-4.1.0&q=80&w=1080",
      dataAiHint: "movie cinema"
    },
    {
      name: "AI Comic Creator “ComicCrafter”",
      period: "Feb 2025 – Mar 2025",
      tech: "Python, Llama, Mistral, Stable Diffusion, Streamlit",
      highlights: [
        "Locally deployed multimodal comic generator with real-time editing.",
        "Optimised for Intel-based edge devices, reducing latency by 35%."
      ],
      image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxjb21pY2Jvb2t8ZW58MHx8fHwxNzQ3MjkxOTA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      dataAiHint: "comic art"
    },
    {
      name: "Facial Recognition Attendance System",
      period: "Jan 2024 – Feb 2024",
      tech: "Python, OpenCV, Dlib, Flask, SQLite",
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
      tech: "Python, NLTK, spaCy, Transformers, Flask",
      highlights: [
        "Developed an extractive and abstractive text summarization tool.",
        "Achieved a ROUGE score of 0.45 on benchmark datasets.",
        "Deployed as a simple web service using Flask."
      ],
      image: "https://images.unsplash.com/photo-1739805591936-39f03383c9a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOHx8YWklMjBzdW1tYXJ5fGVufDB8fHx8MTc0NzM3MjE2OHww&ixlib=rb-4.1.0&q=80&w=1080",
      dataAiHint: "text summary"
    },
    {
      name: "Web File Sharing Platform",
      period: "Nov 2024 – Dec 2024",
      tech: "Next.js, Firebase Storage, Firebase Auth, Tailwind CSS, TypeScript",
      highlights: [
        "Developed a secure web platform for easy file uploads, downloads, and sharing.",
        "Implemented user authentication and role-based access control for file permissions.",
        "Enabled real-time notifications for file sharing activities and version history."
      ],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxmaWxlJTIwc2hhcmluZyUyMG9ubGluZXxlbnwwfHx8fDE3NDc3MzAxNDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      dataAiHint: "file sharing"
    },
    {
      name: "TruthGuard - Fact Checking Website",
      period: "Jan 2025 – Feb 2025",
      tech: "Next.js, Genkit (Gemini), Firebase, Tailwind CSS, TypeScript",
      highlights: [
        "Developed an AI-powered fact-checking website to combat misinformation.",
        "Utilized Genkit with Gemini for natural language processing and claim verification.",
        "Achieved 80% accuracy in identifying misleading content from various sources.",
        "Implemented a user-friendly interface for submitting claims and viewing results."
      ],
      image: "https://images.unsplash.com/photo-1585995603666-5bd6b348de9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxmYWtlJTIwbmV3c3xlbnwwfHx8fDE3NDc3MzA3ODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      dataAiHint: "fact check"
    }
  ],
  skills: {
    "Programming Languages": ["Python", "Java", "JavaScript", "SQL"],
    "Frameworks & Libraries": ["Next.js", "React", "Node.js", "Flask", "Streamlit"],
    "AI/ML": ["OpenCV", "scikit-learn", "LSTM", "Neural Networks", "TensorFlow", "Pandas", "NumPy", "Stable Diffusion", "Llama", "Mistral", "Genkit"],
    "Databases": ["MongoDB", "SQLite"],
    "Cloud & DevOps": ["Docker", "Oracle Cloud", "Firebase", "VM management", "Git"]
  },
  certifications: ["Intel Unnati Training 2025"],
  extras: [
    "Organiser, Texibition – Annual Tech Fest (2024) – boosted turnout by 30%.",
    "Organiser, Chess Tournament (2023) – managed 200+ participants.",
    "Lead, Texibition 2K25 – Annual Tech Fest (2025) – boosted turnout by 300%.",
    "Languages: English, Hindi, Bengali"
  ],
  social: {
    github: "https://github.com/msmahatha/",
    linkedin: "https://www.linkedin.com/in/msmahatha/"
  }
};
