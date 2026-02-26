interface Skills {
  skillName: string;
  tools: string[];
  note: string;
}

export const skillsAndTools: Skills[] = [
  {
    skillName: "Frontend Development",
    tools: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"],
    note: "Proficient in building responsive, performant frontends with React and Next.js. Focused on clean UI, smooth UX, and scalable component architecture.",
  },
  {
    skillName: "Backend Development",
    tools: ["Node.js", "Express.js", "REST APIs", "BullMQ", "Redis", "JWT"],
    note: "Experienced in designing resilient backend systems with Node.js — including async job queues, secure authentication, and high-throughput API design.",
  },
  {
    skillName: "Databases",
    tools: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
    note: "Hands-on experience with both relational and NoSQL databases — from schema design and complex aggregation pipelines to geospatial queries.",
  },
  {
    skillName: "AI & Integrations",
    tools: ["AWS Bedrock", "Stripe", "Mapbox", "ChatGPT", "Claude", "Gemini"],
    note: "Integrated AI-driven content generation via AWS Bedrock and built production-grade integrations with Stripe payments and Mapbox location services.",
  },
  {
    skillName: "Development Tools",
    tools: ["VSCode", "Cursor AI", "Git", "GitHub", "Linux/Unix", "Figma", "AWS", "Docker"],
    note: "Comfortable with modern development environments and version control systems, ensuring efficient and collaborative workflows.",
  },
];
