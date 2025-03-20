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
      period: "Sep=2024 - Fab-2025",
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
      name: "Sarah Johnson",
      position: "Product Manager",
      company: "TechCorp Inc.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
      content:
        "Kundan is an exceptional developer who consistently delivers high-quality work. His technical expertise and problem-solving skills have been invaluable to our team.",
    },
    {
      name: "Michael Chen",
      position: "CTO",
      company: "StartupHub",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
      content:
        "Working with Kundan was a pleasure. His attention to detail and ability to tackle complex challenges made him an essential part of our development team.",
    },
    {
      name: "Emily Rodriguez",
      position: "Tech Lead",
      company: "InnovateX",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
      content:
        "Kundan's expertise in full-stack development and his commitment to code quality have significantly improved our project's success.",
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
