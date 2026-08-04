import { ArrowUpRight, Bookmark, Filter, Search, SlidersHorizontal, Sparkles } from "lucide-react";
import { Header } from "./ui";
import { DataTable } from "./data-table";

type DatabasePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  action: string;
  tabs: string[];
  active: string;
  columns: string[];
  rows: Record<string, string>[];
};

export function DatabasePage({ eyebrow, title, description, action, tabs, active, columns, rows }: DatabasePageProps) {
  const isCampaign = title.includes("Campaign");
  return (
    <div className="mx-auto max-w-[1480px] px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
      <Header eyebrow={eyebrow} title={title} description={description} action={action} />

      <section className="mt-10 grid gap-4 lg:grid-cols-[1.15fr_.85fr]">
        <article className="relative overflow-hidden rounded-[22px] bg-ink p-7 text-white sm:p-8">
          <Sparkles className="absolute right-7 top-7 text-lime" size={18} />
          <p className="eyebrow !text-white/40">Research synthesis · This week</p>
          <h2 className="mt-7 max-w-2xl text-2xl font-medium leading-tight tracking-[-.035em] sm:text-3xl">
            {isCampaign ? "Technology brands are making product behavior the new creative medium." : "The race is shifting from model performance to meaningful, trusted utility."}
          </h2>
          <p className="mt-4 max-w-2xl text-xs leading-6 text-white/50">
            {isCampaign ? "Across launches and campaigns, the strongest work turns a technical capability into a cultural behavior people can recognize and share." : "Signals across AI, robotics and autonomy suggest the next advantage will come from how intelligence is experienced — not only how it benchmarks."}
          </p>
          <button className="mt-8 flex items-center gap-2 text-xs font-semibold text-lime">Open weekly synthesis <ArrowUpRight size={14} /></button>
        </article>
        <div className="grid grid-cols-2 gap-4">
          <article className="card p-5"><p className="eyebrow">Signals reviewed</p><p className="mt-8 text-4xl font-medium tracking-tight">{isCampaign ? "42" : "186"}</p><p className="mt-2 text-[11px] text-muted">Across 18 markets</p></article>
          <article className="card p-5"><p className="eyebrow">New patterns</p><p className="mt-8 text-4xl font-medium tracking-tight">08</p><p className="mt-2 text-[11px] text-[#658119]">↑ 24% this month</p></article>
        </div>
      </section>

      <section className="mt-12">
        <div className="mb-5 flex items-end justify-between"><div><p className="eyebrow">Evidence library</p><h2 className="mt-2 text-xl font-semibold tracking-[-.025em]">Research collection</h2></div><button className="hidden items-center gap-2 text-xs font-medium text-muted sm:flex"><Bookmark size={14} />Saved view</button></div>
        <div className="flex flex-col justify-between gap-4 border-b border-line sm:flex-row sm:items-end">
          <div className="flex gap-7 overflow-auto">
            {tabs.map((tab) => <button key={tab} className={`shrink-0 border-b-2 pb-3 text-xs font-medium ${tab === active ? "border-ink text-ink" : "border-transparent text-muted"}`}>{tab}</button>)}
          </div>
          <div className="mb-2 flex gap-2">
            <label className="flex items-center gap-2 rounded-full border border-line bg-white px-3 py-2"><Search size={14} className="text-muted" /><input aria-label="Search records" placeholder="Search research" className="w-28 bg-transparent text-xs outline-none" /></label>
            <button aria-label="Filter" className="rounded-full border border-line bg-white p-2.5"><Filter size={14} /></button>
            <button aria-label="View settings" className="rounded-full border border-line bg-white p-2.5"><SlidersHorizontal size={14} /></button>
          </div>
        </div>
        <div className="mt-5"><DataTable columns={columns} rows={rows} /></div>
        <p className="mt-3 text-[10px] uppercase tracking-wider text-muted">Showing {rows.length} curated records · Updated just now</p>
      </section>
    </div>
  );
}
