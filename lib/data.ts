import { PortfolioData } from "./types";

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Kundan Maurya",
    title: "Full Stack Developer",
    bio: "Passionate full stack developer with 1 year of experience building scalable web applications. Specialized in React,next,js Node.js, express.js.",
    location: "Faridabad, Haryana, India",
    email: "kundanmaurya@gmail.com",
    github: "https://github.com/KundanMaurya",
    linkedin: "https://www.linkedin.com/in/kundan-maurya-bb1895155",
    resumeUrl:
      "https://drive.google.com/file/d/1hk6ZAcyR1Ch-2AEwY_EoLkiOSonX2VrD/view?usp=drive_link",
  },
  skills: [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "Mongodb"],
    },
    // { category: "DevOps", items: ["AWS", "Docker", "CI/CD", "Git"] },
    { category: "DevOps", items: ["Git"] },
  ],
  experience: [
    {
      company: "Microcosmworks",
      position: " Full Stack Developer",
      period: "Sep-2024 - Fab-2025",
      description:
        "Led development of microservices architecture, improving system scalability by 300%. Mentored junior developers and implemented best practices.",
      technologies: ["React", "Node.js", "MongoDB", "Next.js"],
    },
  ],
  projects: [
    {
      title: "E-commerce Platform",
      description:
        "Full-featured e-commerce platform with real-time inventory management",
      image:
        "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/alexthompson/ecommerce",
      demo: "https://ecommerce-demo.example.com",
    },
    {
      title: "Task Management System",
      description: "Collaborative task management tool with real-time updates",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800",
      technologies: ["Next.js", "GraphQL", "PostgreSQL", "WebSocket"],
      github: "https://github.com/alexthompson/taskmanager",
      demo: "https://taskmanager-demo.example.com",
    },
  ],
  testimonials: [
    {
      name: "Rohit Mehta",
      position: "Product Manager",
      company: "CodeCrafters Solutions",
      image:
        "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&q=80&w=200",
      content:
        "Kundan is a talented developer with a keen eye for detail. His technical knowledge and ability to solve challenges efficiently have been a great asset to our team.",
    },
    {
      name: "Sneha Patil",
      position: "CTO",
      company: "WebNest Technologies",
      image:
        "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&q=80&w=200",
      content:
        "Working with Kundan has been a fantastic experience. His dedication, problem-solving skills, and ability to deliver high-quality code make him a valuable developer.",
    },
    {
      name: "Arjun Nair",
      position: "Tech Lead",
      company: "NextGen Softwares",
      image:
        "https://images.unsplash.com/photo-1545803928-04e3f4cdd4ed?auto=format&fit=crop&q=80&w=200",
      content:
        "Kundan's expertise in full-stack development and his commitment to clean, efficient code have significantly contributed to our project's success.",
    },
  ],

  achievements: [
    {
      value: "10+",
      label: "Projects Completed",
      icon: "rocket",
    },
    {
      value: "15K+",
      label: "Lines of Code",
      icon: "code",
    },
    {
      value: "99%",
      label: "Client Satisfaction",
      icon: "star",
    },
    {
      value: "24/7",
      label: "Support",
      icon: "headphones",
    },
  ],
};
