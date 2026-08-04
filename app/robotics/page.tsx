import { ArrowUpRight, Bot, BrainCircuit, Box, CircleDot, Radio } from "lucide-react";
import { Header, Tag } from "@/components/ui";

const trends = [
  { name: "Humanoid robots", icon: Bot, change: "+38%", stage: "Acceleration", text: "General-purpose form factors enter real-world pilots across logistics and manufacturing.", signal: "Commercial pilots" },
  { name: "Embodied AI", icon: BrainCircuit, change: "+52%", stage: "Breakout", text: "Models connect perception, reasoning and action across unfamiliar physical environments.", signal: "Model convergence" },
  { name: "Robot foundation models", icon: Box, change: "+27%", stage: "Emerging", text: "Shared architectures promise adaptable skills across multiple hardware platforms.", signal: "Ecosystem forming" },
];

export default function Page() {
  return (
    <div className="mx-auto max-w-[1480px] px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
      <Header eyebrow="Physical intelligence radar" title="AI robotics trends" description="A research workspace for the technologies, companies and narratives bringing intelligence into the physical world." action="Track trend" />

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {trends.map(({ name, icon: Icon, change, stage, text, signal }, index) => (
          <article className="card group overflow-hidden" key={name}>
            <div className="flex items-start justify-between border-b border-line p-6">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-ink text-lime"><Icon size={20} /></span>
              <div className="text-right"><span className="block text-xl font-medium text-[#64811e]">{change}</span><span className="text-[9px] uppercase tracking-wider text-muted">90-day velocity</span></div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2"><span className="font-serif text-xl italic text-[#adafa9]">0{index + 1}</span><Tag tone="green">{stage}</Tag></div>
              <h2 className="mt-6 text-2xl font-medium tracking-[-.035em]">{name}</h2>
              <p className="mt-3 min-h-[72px] text-sm leading-6 text-muted">{text}</p>
              <div className="mt-6 flex items-center justify-between border-t border-line pt-4"><span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider"><CircleDot size={12} className="text-[#789c20]" />{signal}</span><ArrowUpRight size={15} className="transition group-hover:-translate-y-1 group-hover:translate-x-1" /></div>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-12 grid gap-8 xl:grid-cols-[.72fr_1.28fr]">
        <div className="rounded-[24px] bg-[#d9f279] p-7 sm:p-8">
          <p className="eyebrow !text-ink/55">Editorial thesis</p>
          <h2 className="mt-8 font-serif text-3xl italic leading-tight">“Intelligence is becoming something we meet, not something we open.”</h2>
          <p className="mt-6 text-sm leading-6 text-ink/65">As AI moves into physical form, behavior becomes identity. Motion, response time and restraint are now part of the brand system.</p>
          <button className="mt-10 flex items-center gap-2 text-xs font-bold">Read the perspective <ArrowUpRight size={14} /></button>
        </div>

        <div className="card p-6 sm:p-8">
          <div className="flex items-center justify-between"><div className="flex items-center gap-2"><Radio size={15} /><h2 className="text-base font-semibold">Category evolution timeline</h2></div><span className="text-[10px] uppercase tracking-wider text-muted">2024 — 2027</span></div>
          <div className="mt-10 grid gap-0 sm:grid-cols-4">
            {[["2024", "Capability", "Robots prove isolated technical tasks."], ["2025", "Adaptability", "Generalist models transfer skills."], ["2026", "Collaboration", "Pilots enter human workflows."], ["2027", "Presence", "Behavior becomes a brand asset."]].map(([year, title, copy], index) => (
              <article className="relative border-l border-line pb-7 pl-6 last:pb-0 sm:border-l-0 sm:border-t sm:pb-0 sm:pl-0 sm:pr-6 sm:pt-7" key={year}>
                <span className={`absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full sm:-top-[5px] sm:left-0 ${index === 2 ? "bg-lime ring-4 ring-[#eff8d7]" : "bg-white ring-1 ring-[#afb2ac]"}`} />
                <p className="text-[10px] font-bold text-muted">{year}</p><h3 className="mt-2 text-sm font-semibold">{title}</h3><p className="mt-2 text-xs leading-5 text-muted">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12">
        <div className="mb-5"><p className="eyebrow">Narrative intelligence</p><h2 className="mt-2 text-xl font-semibold tracking-tight">Stories gaining ground</h2></div>
        <div className="grid gap-px overflow-hidden rounded-[22px] border border-line bg-line md:grid-cols-3">
          {[["From automation to collaboration", "Human–robot interaction becomes the central value story."], ["Intelligence needs a body", "AI brands use physical presence as their next proof point."], ["Trust is designed in motion", "Behavior, pacing and gesture emerge as brand assets."]].map(([title, copy], index) => (
            <article className="bg-white p-7" key={title}><span className="font-serif text-2xl italic text-[#b4b6b0]">0{index + 1}</span><h3 className="mt-8 text-base font-semibold">{title}</h3><p className="mt-3 text-xs leading-5 text-muted">{copy}</p></article>
          ))}
        </div>
      </section>
    </div>
  );
}
