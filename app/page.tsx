"use client";

import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  CarFront,
  CircleDot,
  Clock3,
  Globe2,
  Radar,
  Sparkles,
} from "lucide-react";

import { useEffect, useState } from "react";

import { SectionTitle, Tag } from "@/components/ui";


type Signal = {
  id: number;
  company: string;
  industry: string;
  technology: string;
  headline: string;
  summary: string;
  insight: string;
  source: string;
  date: string;
};


const radar = [
  { label: "Embodied AI", value: 88, change: "+18" },
  { label: "Agentic systems", value: 76, change: "+12" },
  { label: "Spatial computing", value: 61, change: "+7" },
  { label: "Autonomous mobility", value: 54, change: "+4" },
];


const watchlist = [
  {
    name: "Robot foundation models",
    category: "Robotics",
    status: "Accelerating",
    icon: Bot,
  },
  {
    name: "AI-native interfaces",
    category: "Product",
    status: "Breakout",
    icon: BrainCircuit,
  },
  {
    name: "Autonomous delivery",
    category: "Mobility",
    status: "Tracking",
    icon: CarFront,
  },
];


export default function Dashboard() {

  const [signals, setSignals] = useState<Signal[]>([]);


  useEffect(() => {

    fetch("/api/signals")
      .then((res) => res.json())
      .then((data) => {
        setSignals(data);
      });

  }, []);



  return (

    <div className="mx-auto max-w-[1480px] px-5 py-8 sm:px-8 lg:px-12 lg:py-12">


      <header className="flex flex-col gap-7 border-b border-line pb-9 sm:flex-row sm:items-end sm:justify-between">

        <div>

          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-7 bg-ink" />
            <p className="eyebrow">
              Daily intelligence · August 04, 2026
            </p>
          </div>


          <h1 className="max-w-3xl text-4xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-[58px]">

            The technologies shaping
            <br />

            tomorrow&apos;s brands.

          </h1>


          <p className="mt-5 max-w-2xl text-sm leading-6 text-muted">

            Your edited view of global AI, robotics and mobility —
            translated into signals brand leaders can act on.

          </p>

        </div>


        <button className="flex w-fit items-center gap-2 rounded-full bg-ink px-5 py-3 text-xs font-semibold text-white">

          <Sparkles className="text-lime" size={15} />

          Generate morning brief

        </button>


      </header>



      <section className="mt-10 grid gap-10 xl:grid-cols-[1.45fr_.75fr]">


        <div>


          <SectionTitle
            title="Today’s technology signals"
            href="/intelligence"
            label="Open signal library"
          />



          <div className="overflow-hidden rounded-[22px] border border-line bg-white">


            {
              signals.map((signal,index)=>(


                <article
                  key={signal.id}
                  className="group grid gap-5 border-b border-line p-5 last:border-0 sm:grid-cols-[44px_1fr_auto] sm:items-center sm:p-6"
                >


                  <span className="font-serif text-2xl italic text-[#b5b7b1]">

                    {String(index+1).padStart(2,"0")}

                  </span>



                  <div>


                    <div className="mb-2.5 flex flex-wrap items-center gap-2.5">


                      <span className="text-[11px] font-bold uppercase tracking-[.13em]">

                        {signal.company}

                      </span>


                      <Tag tone="green">

                        {signal.industry}

                      </Tag>


                      <span className="text-[11px] text-muted">

                        {signal.date}

                      </span>


                    </div>



                    <h2 className="max-w-2xl text-[17px] font-medium leading-6 tracking-[-.015em]">

                      {signal.headline}

                    </h2>



                    <p className="mt-2 hidden max-w-xl text-xs leading-5 text-muted sm:block">

                      {signal.summary}

                    </p>



                  </div>



                  <div className="flex items-center gap-4 sm:pl-4">


                    <div className="text-right">

                      <span className="block text-xl font-medium">

                        {signal.technology}

                      </span>

                      <span className="text-[9px] uppercase tracking-wider text-muted">

                        Technology

                      </span>

                    </div>



                    <span className="grid h-9 w-9 place-items-center rounded-full border border-line transition group-hover:bg-ink group-hover:text-white">

                      <ArrowUpRight size={14}/>

                    </span>


                  </div>


                </article>


              ))
            }



          </div>


        </div>        <aside>

          <SectionTitle
            title="Global AI trend radar"
            href="/robotics"
            label="View radar"
          />


          <div className="rounded-[22px] bg-ink p-6 text-white sm:p-7">


            <div className="flex items-center justify-between border-b border-white/10 pb-6">


              <div>

                <p className="eyebrow !text-white/40">
                  Momentum index
                </p>

                <p className="mt-2 text-3xl font-medium tracking-tight">
                  72.4
                </p>

              </div>


              <div className="relative grid h-20 w-20 place-items-center rounded-full border border-white/15">

                <span className="absolute h-12 w-12 rounded-full border border-lime/40" />

                <Radar className="text-lime" size={24}/>

              </div>


            </div>



            <div className="mt-6 space-y-5">


              {
                radar.map((trend)=>(

                  <div key={trend.label}>


                    <div className="mb-2 flex items-center justify-between text-xs">

                      <span>
                        {trend.label}
                      </span>

                      <span className="text-lime">
                        {trend.change}%
                      </span>

                    </div>


                    <div className="h-1 overflow-hidden rounded-full bg-white/10">

                      <div
                        className="h-full rounded-full bg-lime"
                        style={{
                          width:`${trend.value}%`
                        }}
                      />

                    </div>


                  </div>


                ))
              }


            </div>



            <p className="mt-7 border-t border-white/10 pt-5 text-[11px] leading-5 text-white/45">

              Based on technology momentum, investment activity and narrative adoption.

            </p>


          </div>


        </aside>


      </section>





      <section className="mt-12">


        <SectionTitle title="Brand insight of the day"/>



        <article className="relative overflow-hidden rounded-[26px] bg-[#d9f279] px-6 py-8 sm:px-10 sm:py-11">


          <CircleDot className="absolute -right-10 -top-16 h-72 w-72 stroke-[.25] opacity-30"/>



          <div className="relative grid gap-10 lg:grid-cols-[.32fr_1fr_auto] lg:items-end">


            <div>

              <p className="eyebrow !text-ink/55">

                Strategic perspective

              </p>


              <div className="mt-12 hidden items-center gap-2 text-xs font-medium lg:flex">

                <Globe2 size={14}/>

                Robotics · Trust

              </div>


            </div>




            <div>


              <p className="font-serif text-2xl italic text-ink/60">

                The emerging question

              </p>



              <blockquote className="mt-4 max-w-3xl text-3xl font-medium leading-[1.12] tracking-[-.045em] sm:text-4xl">

                When intelligence gains a body, how should a brand behave?

              </blockquote>



              <p className="mt-5 max-w-2xl text-sm leading-6 text-ink/65">

                Future robotics brands need to move beyond hardware communication and build emotional trust between humans and machines.

              </p>


            </div>



            <button className="flex items-center gap-2 text-xs font-bold">

              Read perspective

              <ArrowRight size={15}/>

            </button>



          </div>


        </article>


      </section>





      <section className="mt-12 grid gap-10 xl:grid-cols-[1fr_.72fr]">


        <div>


          <SectionTitle title="Emerging technology watchlist"/>



          <div className="grid gap-3 md:grid-cols-3">


            {
              watchlist.map(
                ({name,category,status,icon:Icon},index)=>(


                <article
                  className="card group p-5 transition hover:-translate-y-1 hover:shadow-card"
                  key={name}
                >


                  <div className="flex items-start justify-between">


                    <span className="grid h-10 w-10 place-items-center rounded-full bg-canvas">

                      <Icon size={17}/>

                    </span>


                    <span className="text-[10px] font-semibold text-muted">

                      0{index+1}

                    </span>


                  </div>



                  <p className="mt-8 text-[10px] font-bold uppercase tracking-[.14em] text-muted">

                    {category}

                  </p>



                  <h3 className="mt-2 min-h-12 text-base font-semibold leading-6">

                    {name}

                  </h3>



                  <div className="mt-5 flex items-center justify-between border-t border-line pt-4">


                    <span className="flex items-center gap-2 text-[11px]">

                      <span className="h-1.5 w-1.5 rounded-full bg-lime"/>

                      {status}

                    </span>


                    <ArrowUpRight size={14}/>


                  </div>


                </article>


              ))
            }


          </div>


        </div>





        <div>


          <SectionTitle title="Signal timeline"/>


          <div className="card p-6">


            <div className="relative space-y-7">


              {
                signals.slice(0,3).map((signal,index)=>(


                  <div
                    className="grid grid-cols-[12px_1fr] gap-3"
                    key={signal.id}
                  >

                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-lime"/>


                    <div>


                      <p className="text-[10px] text-muted">

                        {signal.date}

                      </p>


                      <p className="text-xs font-medium leading-5">

                        {signal.company} · {signal.technology}

                      </p>


                    </div>


                  </div>


                ))
              }


            </div>



            <div className="mt-6 flex items-center gap-2 border-t border-line pt-4 text-[10px] text-muted">

              <Clock3 size={13}/>

              Live intelligence stream

            </div>


          </div>


        </div>


      </section>



    </div>

  );

}