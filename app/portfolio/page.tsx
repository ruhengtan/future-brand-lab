import { ArrowRight, ArrowUpRight, Eye, Pencil, Quote } from "lucide-react";
import { Header, Tag } from "@/components/ui";

const cases = [
  { title: "A human story for embodied intelligence", type: "Narrative System", meta: "Robotics · 6 min read", tone: "bg-[#dcefc8]" },
  { title: "Designing an AI category launch", type: "Campaign", meta: "Artificial intelligence · 10 min read", tone: "bg-[#e8ddf0]" },
];

export default function Page() {
  return (
    <div className="mx-auto max-w-[1480px] px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
      <Header eyebrow="Your strategic practice" title="Portfolio stories" description="Turn research and strategic thinking into editorial case studies that show how you see the future." action="New case study" />

      <article className="mt-12 overflow-hidden rounded-[26px] border border-line bg-white">
        <div className="grid lg:grid-cols-[.9fr_1.1fr]">
          <div className="relative min-h-[370px] overflow-hidden bg-[#d9e2f0] p-8 sm:p-10">
            <span className="absolute -bottom-16 -left-8 font-serif text-[240px] italic leading-none text-white/45">01</span>
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex justify-between"><Tag>Featured case</Tag><span className="text-[10px] font-bold uppercase tracking-wider">Mobility · 2026</span></div>
              <Quote size={32} strokeWidth={1} />
            </div>
          </div>
          <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
            <div><p className="eyebrow">Brand strategy · Autonomous mobility</p><h2 className="mt-5 max-w-xl text-3xl font-medium leading-[1.1] tracking-[-.045em] sm:text-4xl">Reframing autonomy around confidence, not complexity.</h2><p className="mt-6 max-w-xl text-sm leading-7 text-muted">A category narrative that moves the conversation from technical capability to the quiet confidence of arriving safely — making autonomy feel human, useful and ready.</p></div>
            <div className="mt-10 flex flex-wrap items-center gap-3"><button className="flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-xs font-semibold text-white">Read case study <ArrowRight size={14} /></button><button className="flex items-center gap-2 rounded-full border border-line px-4 py-3 text-xs"><Pencil size={13} />Edit story</button><span className="ml-auto text-[10px] uppercase tracking-wider text-muted">8 min read</span></div>
          </div>
        </div>
      </article>

      <section className="mt-12">
        <div className="mb-5 flex items-end justify-between"><div><p className="eyebrow">Selected thinking</p><h2 className="mt-2 text-xl font-semibold tracking-tight">More case studies</h2></div><span className="text-xs text-muted">2 stories</span></div>
        <div className="grid gap-5 md:grid-cols-2">
          {cases.map((item, index) => (
            <article className="group grid overflow-hidden rounded-[22px] border border-line bg-white sm:grid-cols-[.72fr_1fr]" key={item.title}>
              <div className={`relative min-h-56 p-6 ${item.tone}`}><span className="font-serif text-5xl italic opacity-50">0{index + 2}</span><ArrowUpRight className="absolute bottom-6 right-6 transition group-hover:-translate-y-1 group-hover:translate-x-1" /></div>
              <div className="flex flex-col justify-between p-6"><div><Tag>{item.type}</Tag><h3 className="mt-5 text-xl font-semibold leading-7 tracking-[-.025em]">{item.title}</h3><p className="mt-3 text-xs text-muted">{item.meta}</p></div><div className="mt-8 flex gap-2"><button className="flex items-center gap-2 text-xs font-semibold"><Eye size={13} />Preview</button><button className="ml-auto text-xs text-muted">Continue editing</button></div></div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
