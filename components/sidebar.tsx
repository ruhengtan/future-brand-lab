"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, BookOpen, Bot, BriefcaseBusiness, ChevronDown, Database, FlaskConical, LayoutDashboard, Search, Settings } from "lucide-react";

const links = [
  ["/", "Dashboard", LayoutDashboard], ["/intelligence", "Technology Intelligence", Database],
  ["/campaigns", "Campaign Analysis", BarChart3], ["/robotics", "AI Robotics Trends", Bot],
  ["/english-lab", "English Brand Lab", BookOpen], ["/portfolio", "Portfolio", BriefcaseBusiness]
] as const;

export function Sidebar() {
  const path = usePathname();
  return <aside className="border-b border-line bg-white px-4 py-4 lg:sticky lg:top-0 lg:h-screen lg:w-[268px] lg:border-b-0 lg:border-r lg:px-4 lg:py-7">
    <div className="flex items-center justify-between lg:block">
      <Link href="/" className="flex items-center gap-3 px-2"><span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-lime"><FlaskConical size={17}/></span><span><b className="block text-sm tracking-[-.02em]">Future Brand Lab</b><small className="text-[9px] font-semibold tracking-[.08em] text-muted">TECH × BRAND INTELLIGENCE</small></span></Link>
      <button className="rounded-lg p-2 text-muted lg:hidden" aria-label="Search"><Search size={19}/></button>
    </div>
    <nav className="mt-4 flex gap-1 overflow-x-auto lg:mt-12 lg:block lg:space-y-1.5">
      {links.map(([href,label,Icon]) => { const active = href === "/" ? path === href : path.startsWith(href); return <Link key={href} href={href} className={`flex shrink-0 items-center gap-3 rounded-xl px-3 py-3 text-[13px] transition ${active ? "bg-ink font-medium text-white" : "text-muted hover:bg-canvas hover:text-ink"}`}><Icon size={16}/><span>{label}</span>{active && <span className="ml-auto hidden h-1.5 w-1.5 rounded-full bg-lime lg:block"/>}</Link>})}
    </nav>
    <div className="absolute bottom-6 hidden w-[236px] lg:block"><div className="mb-4 rounded-2xl bg-canvas p-4"><p className="eyebrow">Weekly intelligence</p><div className="mt-4 h-1 overflow-hidden rounded-full bg-line"><div className="h-full w-2/3 rounded-full bg-ink"/></div><div className="mt-3 flex justify-between text-[10px] text-muted"><span>12 signals reviewed</span><span>67%</span></div></div><button className="flex w-full items-center gap-3 px-3 py-2 text-xs text-muted"><Settings size={15}/>Workspace settings<ChevronDown className="ml-auto" size={13}/></button></div>
  </aside>;
}
