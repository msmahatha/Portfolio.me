import type { ProfileData } from '@/types/profile';

export const profileData: ProfileData = {
  name: "Madhusudan Mahatha",
  title: "Full Stack Developer | AI & ML Specialist",
  email: "madhusudanmahatha14@gmail.com",
  phone: "+91 6289600599",
  location: "Kolkata, West Bengal, India", // Corrected placeholder
  about: {
    paragraph1: "Highly motivated and results-oriented Full Stack Developer with a strong passion for Artificial Intelligence and Machine Learning. Proven ability to design, develop, and deploy innovative web and cloud-based systems while leading cross-functional teams.",
    paragraph2: "I am dedicated to crafting clean, efficient code and user-friendly experiences. Eager to tackle challenging projects and contribute to impactful technological advancements. Continuously learning and exploring new technologies to expand my skillset."
  },
  whatIDo: [
    { icon: "pencil",  title: "Web Design",   text: "Crafting clean, cutting-edge UI/UX with professional expertise." },
    { icon: "code",    title: "Web Development", text: "Building high-quality, scalable websites & APIs." },
    { icon: "cpu", title: "Automations", text: "Developing intelligent automation solutions to streamline processes and enhance efficiency." },
    { icon: "briefcase",  title: "Real World Solutions", text: "Architecting practical and impactful solutions for complex real-world challenges." }
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
      company: "TimelyAi",
      period: "Mar 2025 – Present",
      bullets: [
        "Developed & deployed AI-based automation systems using Python, CI/CD, Jenkins.",
        "Configured virtual machines (VMware, VirtualBox) for ML deployment.",
        "Collaborated with cross-functional teams to ship Docker-based scalable solutions."
      ]
    }
  ],
  projects: [
    {
      name: "Groundwater Level Predictor",
      period: "Sept 2024 – Present",
      tech: "Python, TensorFlow, LSTM, Pandas, NumPy, scikit-learn",
      highlights: [
        "Built LSTM model predicting groundwater levels (85 % accuracy).",
        "Integrated crop-recommendation module for water-table sustainability."
      ],
      image: "https://placehold.co/600x400.png",
      dataAiHint: "water data"
    },
    {
      name: "Ambient Movie Recommendation System",
      period: "Oct 2024 – Nov 2024",
      tech: "Python, TensorFlow, Flask, scikit-learn, OpenWeather API",
      highlights: [
        "Recommends movies using mood, weather, trends & socio-political data (90 % accuracy).",
        "Delivered dynamic filtering algorithms & interactive Flask UI."
      ],
      image: "https://placehold.co/600x400.png",
      dataAiHint: "movie cinema"
    },
    {
      name: "AI Comic Creator “ComicCrafter”",
      period: "Feb 2025 – Mar 2025",
      tech: "Python, Llama, Mistral, Stable Diffusion, Streamlit",
      highlights: [
        "Locally deployed multimodal comic generator with real-time editing.",
        "Optimised for Intel-based edge devices (-35 % latency)."
      ],
      image: "https://placehold.co/600x400.png",
      dataAiHint: "comic art"
    }
  ],
  skills: [
    "Python", "Java", "JavaScript", "SQL", "Next.js", "React", "Tailwind CSS",
    "OpenCV", "scikit-learn", "LSTM", "Neural Networks", "TensorFlow",
    "Flask & REST APIs", "Docker", "Oracle Cloud", "VM management", "Firebase"
  ],
  certifications: ["Intel Unnati Training 2025", "Google Cloud Certified Associate Cloud Engineer"],
  extras: [
    "Organiser, Texibition – Annual Tech Fest (2024) – boosted turnout by 30 %.",
    "Organiser, Chess Tournament (2023) – managed 200 + participants.",
    "Languages: English, Hindi, Bengali",
    "Coding Profiles: LeetCode, GeeksforGeeks"
  ],
  social: {
    github: "https://github.com/MadhusudanMahatha",
    linkedin: "https://www.linkedin.com/in/madhusudan-mahatha"
  }
};
