import { useState } from "react"
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  // { name: "Next.js", level: 80, category: "frontend" },

  // Backend
  { name: "Java", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "MySQL", level: 65, category: "backend" },
  { name: "GraphQL", level: 60, category: "backend" },

  // Tools
  { name: "Git/Github", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" }
]

const categories = ["All", "Frontend", "Backend", "Tools"];

export const SkillsSection = () => {
  const [activeCategory, setActveCategory] = useState("All");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );

  return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        My <span className="text-primary"> Skills</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category, key) => (
          <button
            key={key}
            onClick={() => setActveCategory(category)}
            className={cn(
              "px-5 py-2 rounded-full transition-colors duration-300 capatalize", 
              activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
            )}  
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill, key) => (
          <div 
            key={key}
            className="bg-card p-6 rounded-lg shadow-xs card-hover"
          >
            <div className="text-left mb-4">
              <h3 className="font-semibold text-lg"> {skill.name}</h3>
            </div>

            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease_out]"
                style={{ width: skill.level + "%" }}
              />
            </div>

            <div className="text-right mt-1">
              <div className="text-sm text-muted-foreground">{skill.level}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
}