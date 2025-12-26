export interface Project {
  id: string;
  title: string;
  category: 'Design' | 'Development' | 'Branding';
  image: string;
  description: string;
  year: string;
}
export interface Service {
  id: string;
  title: string;
  description: string;
  priceRange: string;
}
export const profile = {
  name: "Lumina",
  tagline: "Creative Technologist & Visual Designer",
  bio: "Crafting digital experiences that balance brutalist simplicity with fluid interactivity. Based in the intersection of code and canvas.",
  email: "hello@lumina.design",
  socials: [
    { name: "Twitter", url: "https://twitter.com" },
    { name: "GitHub", url: "https://github.com" },
    { name: "LinkedIn", url: "https://linkedin.com" },
  ]
};
export const projects: Project[] = [
  {
    id: "1",
    title: "Aether Systems",
    category: "Development",
    year: "2024",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    description: "A high-performance dashboard for decentralized cloud computing."
  },
  {
    id: "2",
    title: "Mono Flora",
    category: "Branding",
    year: "2023",
    image: "https://images.unsplash.com/photo-1633169522279-24796695267b?q=80&w=1000&auto=format&fit=crop",
    description: "Visual identity for a boutique botanical studio focusing on grayscale aesthetics."
  },
  {
    id: "3",
    title: "Vortex UI",
    category: "Design",
    year: "2024",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop",
    description: "Design system for a next-gen music production suite."
  },
  {
    id: "4",
    title: "Chronos App",
    category: "Development",
    year: "2023",
    image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1000&auto=format&fit=crop",
    description: "Minimalist time tracking for deep-work enthusiasts."
  }
];
export const services: Service[] = [
  {
    id: "s1",
    title: "Web Development",
    description: "Building fast, accessible, and SEO-friendly applications using React and modern toolchains.",
    priceRange: "$2k - $10k"
  },
  {
    id: "s2",
    title: "UI/UX Design",
    description: "High-fidelity prototypes and design systems focused on user psychology and minimalist beauty.",
    priceRange: "$1.5k - $5k"
  },
  {
    id: "s3",
    title: "Brand Strategy",
    description: "Defining your digital presence through typography, color theory, and consistent visual language.",
    priceRange: "$3k - $8k"
  }
];