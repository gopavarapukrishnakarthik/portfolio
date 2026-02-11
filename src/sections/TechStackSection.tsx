import { useState, useMemo } from "react"
import Reveal from "@/components/ui/reveal"
import { IconCloud } from "@/components/ui/icon-cloud"


const techStack = [
  { name: "React", slug: "react" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "TailwindCSS", slug: "tailwindcss" },
  { name: "shadcn/ui", slug: "shadcnui" },
  { name: "Docker", slug: "docker" },
  { name: "AWS", slug: "amazonaws" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "Drizzle ORM", slug: "drizzle-orm" },
  { name: "Redux", slug: "redux" },
  { name: "Express", slug: "express" },
  { name: "Git", slug: "git" },
  { name: "Figma", slug: "figma" },
  { name: "Kubernetes", slug: "kubernetes" },
]


const techRelations: Record<string, string[]> = {
  React: ["TypeScript", "Redux", "shadcn/ui", "TailwindCSS"],
  "shadcn/ui": ["React", "TypeScript", "TailwindCSS"],
  TypeScript: ["React", "shadcn/ui", "Node.js"],
  "Node.js": ["Express", "MongoDB", "PostgreSQL", "Drizzle ORM"],
  Express: ["Node.js", "MongoDB"],
  MongoDB: ["Node.js", "Express"],
  PostgreSQL: ["Node.js", "Drizzle ORM"],
  GraphQL: ["Node.js", "PostgreSQL"],
  Docker: ["AWS", "Node.js", "Kubernetes"],
  AWS: ["Docker", "PostgreSQL"],
  Kubernetes: ["React", "Node.js"],
}

const images = techStack.map(
  (tech) => `https://cdn.simpleicons.org/${tech.slug}/${tech.slug}`
)

export default function TechStackSection() {
  const [activeTech, setActiveTech] = useState<string | null>(null)
  const [lockedTech, setLockedTech] = useState<string | null>(null)

  const selectedTech = lockedTech ?? activeTech

  const relatedTech = useMemo(() => {
    if (!selectedTech) return []
    return techRelations[selectedTech] ?? []
  }, [selectedTech])

  const handleSelect = (tech: string | null) => {
    setLockedTech((prev) => (prev === tech ? null : tech))
  }

  return (
    <div
      className="relative py-20 md:py-28 max-w-7xl mx-auto px-6 overflow-hidden"
      onClick={() => setLockedTech(null)}
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <Reveal>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
            Technologies I Work With
          </h2>

          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
            Explore my technical toolkit and discover how different technologies connect
          </p>

          <p className="mt-4 text-sm text-yellow-400/70 md:hidden font-medium">
            👆 Tap a technology to explore connections
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">

<div
  className="relative flex justify-center items-center order-2 lg:order-1"
  onClick={(e) => e.stopPropagation()}
>
  <div className="relative w-full max-w-105 aspect-square flex items-center justify-center rounded-3xl">
    <div className="absolute inset-0 rounded-3xl bg-neutral-900/40 border border-white/10 backdrop-blur-md" />
    <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-white/6 to-transparent pointer-events-none" />

    <div className="relative z-10">
      <IconCloud
        images={images}
        onIconHover={(index) =>
          setActiveTech(techStack[index]?.name ?? null)
        }
        onIconLeave={() => setActiveTech(null)}
        onIconClick={(index) =>
          handleSelect(techStack[index]?.name ?? null)
        }
      />
    </div>
  </div>
</div>



          <div
            className="relative order-1 lg:order-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/10 p-8 md:p-10">
              <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 rounded-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="mb-8">
                  <h3 className="text-xl md:text-2xl font-bold text-white/90 mb-2">
                    {selectedTech ? (
                      <span className="flex flex-wrap gap-2">
                        <span className="text-yellow-400">{selectedTech}</span>
                        <span className="text-white/50 text-base">
                          & related technologies
                        </span>
                      </span>
                    ) : (
                      "My Tech Stack"
                    )}
                  </h3>
                  <div className="h-1 w-20 bg-linear-to-r from-yellow-400 to-transparent rounded-full" />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {techStack.map((tech) => {
                    const isActive = selectedTech === tech.name
                    const isRelated = relatedTech.includes(tech.name)
                    const isDimmed = selectedTech && !isActive && !isRelated

                    return (
                      <div
                        key={tech.name}
                        onMouseEnter={() => setActiveTech(tech.name)}
                        onMouseLeave={() => setActiveTech(null)}
                        onClick={() => handleSelect(tech.name)}
                        className={`relative px-4 py-3 rounded-xl text-sm md:text-base font-semibold text-center border-2 cursor-pointer transition-all duration-300 ${
                          isActive
                            ? "bg-yellow-400/30 border-yellow-400 text-yellow-300 scale-105 shadow-xl shadow-yellow-400/50 z-10"
                            : isRelated
                            ? "bg-yellow-400/15 border-yellow-400/50 text-yellow-200 scale-[1.02] shadow-lg shadow-yellow-400/30"
                            : isDimmed
                            ? "opacity-30 scale-95"
                            : "bg-white/5 border-white/20 text-white/80 hover:border-yellow-400/60 hover:bg-yellow-400/10 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/20"
                        }`}
                      >
                        <span className="relative z-10">{tech.name}</span>

                        {isActive && (
                          <span className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping" />
                        )}
                      </div>
                    )
                  })}
                </div>

                <p className="mt-6 text-xs md:text-sm text-white/40 text-center">
                  {selectedTech
                    ? "Click again to deselect or choose another technology"
                    : "Hover or click to explore technology relationships"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  )
}
