"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "@/components/header";
import SplitType from "split-type";
import Footer from "@/components/footer";
import {
  ArrowRight,
  ChevronDown,
  Clock,
  BookOpen,
  Globe2,
  GraduationCap,
  Briefcase,
  Sparkles,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ProgramsPage() {
  useEffect(() => {
    gsap.fromTo(
      ".hero-reveal",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 1.2,
        ease: "power4.out",
        clearProps: "all",
      },
    );

    gsap.fromTo(
      ".stats-card",
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 1,
        ease: "power4.out",
        clearProps: "all",

        scrollTrigger: {
          trigger: ".stats-card",
          start: "top 85%",
          once: true,
        },
      },
    );
    gsap.to(".hero-image", {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    const titles = document.querySelectorAll(".split-text");

    titles.forEach((title) => {
      const text = new SplitType(title as HTMLElement, {
        types: "chars",
      });

      gsap.from(text.chars, {
        y: 120,
        opacity: 0,
        stagger: 0.03,
        duration: 1,
        ease: "power4.out",

        scrollTrigger: {
          trigger: title,
          start: "top 85%",
        },
      });
    });

    gsap.utils.toArray(".fade-section").forEach((section: any) => {
      gsap.from(section, {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",

        scrollTrigger: {
          trigger: section,
          start: "top 85%",
        },
      });
    });
  }, []);
  const container = useRef<HTMLDivElement>(null);

  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  /*
  =========================
  CURSOR GLOW
  =========================
  */

  return (
    <div ref={container} className="bg-[#efefef] text-black overflow-x-hidden">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#fafafa] py-24 md:py-36">
        {/* SOFT GRID */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
        linear-gradient(to right, black 1px, transparent 1px),
        linear-gradient(to bottom, black 1px, transparent 1px)
      `,
            backgroundSize: "90px 90px",
          }}
        />

        {/* BACKGROUND TEXT */}
        <div className="pointer-events-none absolute top-10 right-0 select-none text-[10vw] font-black uppercase leading-none tracking-[-0.08em] text-black/[0.02]">
          NoMAD
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* HERO SECTION */}
          <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
            {/* LEFT */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center rounded-full border border-black/10 bg-white/80 px-5 py-3 backdrop-blur-xl shadow-sm">
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-black/70">
                  We Are NoMAD
                </span>
              </div>

              <div className="mt-8 space-y-5">
                <h2 className="text-[13vw] sm:text-[10vw] md:text-[7vw] lg:text-[5.2vw] font-black uppercase leading-[0.9] tracking-[-0.045em]">
                  NoMAD
                </h2>

                <h3 className="max-w-xl text-2xl font-semibold leading-tight text-black/80 md:text-4xl">
                  College Of Creative Intelligence
                </h3>
              </div>

              <p className="mt-8 max-w-xl text-lg md:text-xl font-semibold tracking-[-0.02em] leading-relaxed text-[#ec008c] md:text-xl">
                FOR THE CREATORS OF TOMORROW.
              </p>

              <div className="mt-10 space-y-6">
                <p className="text-base leading-[1.9] text-black/65 md:text-lg">
                  The world doesn’t just need more degrees. It needs creators
                  who can think, build, and earn. At NoMAD, we don’t prepare you
                  for jobs, we prepare you to create them.
                </p>

                <p className="text-base leading-[1.9] text-black/65 md:text-lg">
                  Where design meets technology and ideas become real-world
                  impact. A Mumbai University–backed 4-year journey with global
                  exposure in the final year.
                </p>

                <p className="text-base leading-[1.9] text-black/65 md:text-lg">
                  If your child has imagination, this is where it becomes a
                  career.
                </p>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative lg:mt-16">
              {/* GLOW */}
              <div className="absolute -bottom-6 -left-6 h-full w-full rounded-[40px] bg-[#ec008c]" />

              {/* GLOW */}
              <div className="hero-image absolute -bottom-10 -left-10 h-full w-full rounded-[40px] bg-[#ec008c]/20 blur-3xl" />

              <div className="hero-image relative overflow-hidden rounded-[40px] shadow-[0_25px_80px_rgba(0,0,0,0.12)]">
                <Image
                  src="/about-hero.jpg"
                  alt="Students brainstorming and creating designs"
                  width={900}
                  height={1100}
                  className="h-[400px] w-full object-cover grayscale transition-all duration-700 hover:grayscale-0 md:h-[720px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* FLOATING CARD */}
                <div className="absolute bottom-6 left-6 max-w-[320px] rounded-[28px] border border-white/20 bg-white/80 p-6 backdrop-blur-xl shadow-xl">
                  <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-black/40">
                    Creative Future
                  </p>

                  <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.03em]">
                    Ideas become real-world impact.
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* FEATURE SECTION */}
          <div className="mt-32">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#ec008c]">
                  Why NoMAD
                </p>

                <h3 className="mt-5 text-[13vw] sm:text-[10vw] md:text-[7vw] lg:text-[5.2vw] font-black uppercase leading-[0.9] tracking-[-0.045em]">
                  Creative
                  <span className="text-[#ec008c]"> Edge</span>
                </h3>
              </div>

              <p className="max-w-xl text-base leading-[1.9] text-black/55 md:text-lg">
                Designed for creators who want to build, innovate, and shape the
                future through creativity, technology, and real-world
                experience.
              </p>
            </div>

            {/* FEATURE CARDS */}
            <div className="mt-14 space-y-5">
              {[
                "Advertising, Design, and Strategic Thinking",
                "Hands-on learning through live projects",
                "Internships and real industry collaborations",
                "Global awards and portfolio-driven education",
                "Building a unique creative voice and brand identity",
              ].map((item, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-[32px] border border-black/5 bg-white/80 px-6 py-7 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-700 hover:-translate-y-2 hover:bg-black"
                >
                  <div className="flex items-center justify-between gap-6">
                    <div className="flex items-center gap-5">
                      <span className="text-sm font-black text-[#ec008c] md:text-base">
                        0{i + 1}
                      </span>

                      <p className="text-lg md:text-xl font-semibold tracking-[-0.02em] leading-relaxed text-black/75 transition-all duration-500 group-hover:text-white md:text-2xl">
                        {item}
                      </p>
                    </div>

                    <div className="h-3 w-3 rounded-full bg-[#ec008c] transition-all duration-500 group-hover:scale-150" />
                  </div>

                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#ec008c] transition-all duration-700 group-hover:w-full" />
                </div>
              ))}
            </div>
          </div>

          {/* SECOND SECTION */}
          <div className="mt-36 grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
            {/* IMAGE */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -top-8 -right-8 h-full w-full rounded-[40px] bg-black/10 blur-2xl" />

              <div className="hero-image relative overflow-hidden rounded-[40px] shadow-[0_25px_80px_rgba(0,0,0,0.12)]">
                <Image
                  src="/creative-team.jpg"
                  alt="Creative industry professionals working together"
                  width={900}
                  height={1100}
                  className="h-[400px] w-full object-cover grayscale transition-all duration-700 md:h-[700px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
            </div>

            {/* CONTENT */}
            <div className="order-1 max-w-2xl lg:order-2 lg:ml-auto">
              <div className="inline-flex items-center rounded-full border border-black/10 bg-white/80 px-5 py-3 backdrop-blur-xl shadow-sm">
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-black/70">
                  Industry Driven
                </span>
              </div>

              <div className="mt-8">
                <h2 className="text-[13vw] sm:text-[10vw] md:text-[7vw] lg:text-[5.2vw] font-black uppercase leading-[0.9] tracking-[-0.045em]">
                  Built By
                </h2>

                <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.045em] text-[#ec008c] sm:text-6xl md:text-7xl">
                  Creators
                </h2>
              </div>

              <p className="mt-10 text-2xl font-bold leading-relaxed tracking-[-0.03em] md:text-3xl">
                Built by people who’ve done the work
              </p>

              <div className="mt-10 space-y-6">
                <p className="text-base leading-[1.9] text-black/65 md:text-lg">
                  NoMAD wasn’t built in a classroom. It was built in agencies,
                  studios, and real creative industries.
                </p>

                <p className="text-base leading-[1.9] text-black/65 md:text-lg">
                  Because the gap was obvious — education wasn’t keeping up with
                  creativity. So we built something that does.
                </p>
              </div>

              {/* TAGS */}
              <div className="mt-12 flex flex-wrap gap-4">
                <div className="rounded-full bg-black px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-lg">
                  Agencies
                </div>

                <div className="rounded-full bg-[#ec008c] px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-lg">
                  Studios
                </div>

                <div className="rounded-full border border-black/10 bg-white/80 px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] backdrop-blur-xl">
                  Real Industries
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIRECTOR + DEAN + ADVISORY */}
      <section className="relative py-24 md:py-36 bg-black text-white overflow-hidden">
        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
        linear-gradient(to right, white 1px, transparent 1px),
        linear-gradient(to bottom, white 1px, transparent 1px)
      `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* BG TEXT */}
        <div className="absolute top-[8%] left-[-5%] text-[20vw] font-black uppercase text-white/[0.03] leading-none pointer-events-none">
          Leaders
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* HEADING */}
          <div className="max-w-4xl mb-20">
            <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
              Leadership & Vision
            </p>

            <h2 className="mt-6 text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.92] tracking-[-0.05em]">
              Built By
              <span className="text-[#ec008c]"> Industry</span>
            </h2>

            <p className="mt-8 text-base sm:text-lg md:text-xl text-white/70 leading-[1.9] max-w-3xl">
              Guided by leaders, creators, and professionals who understand the
              real creative industry, not just classrooms.
            </p>
          </div>

          {/* DIRECTOR */}
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-14 lg:gap-24 items-center mb-32">
            {/* IMAGE */}
            <div className="relative">
              <div className="absolute -bottom-6 -right-6 w-full h-full rounded-[40px] bg-[#ec008c]" />

              <div className="relative overflow-hidden rounded-[40px]">
                <Image
                  src="/director.jpg"
                  alt="Director"
                  width={900}
                  height={1100}
                  className="w-full h-[420px] sm:h-[560px] md:h-[720px] object-cover grayscale"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <p className="text-xs uppercase tracking-[4px] text-white/60 font-bold">
                    Director
                  </p>

                  <h3 className="mt-2 text-3xl md:text-4xl font-black uppercase">
                    Leadership
                  </h3>
                </div>
              </div>
            </div>

            {/* CONTENT */}
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
                Leading with industry, not theory
              </p>

              <h3
                className="mt-5 text-[10vw] sm:text-[7vw] md:text-[5vw] lg:text-[3.8vw]
font-black uppercase leading-[0.95] tracking-[-0.045em]"
              >
                From The
                <span className="text-[#ec008c]"> Director</span>
              </h3>

              <div className="mt-10 space-y-6">
                <p className="text-base sm:text-lg md:text-xl text-white/70 leading-[1.9]">
                  At NoMAD, with Miami Ad School, our vision has always been to
                  build creators who don’t just enter the industry, but shape
                  it.
                </p>

                <p className="text-base sm:text-lg md:text-xl text-white/70 leading-[1.9]">
                  Seeing our alumni making their mark, whether on global stages
                  or through ventures of their own, is a reflection of that
                  belief coming to life.
                </p>

                <p className="text-base sm:text-lg md:text-xl text-white/70 leading-[1.9]">
                  As you move forward, remember that your strength lies not just
                  in where you go, but in the thinking, craft, and originality
                  you bring to the work.
                </p>

                <p className="text-base sm:text-lg md:text-xl text-white/70 leading-[1.9]">
                  Stay curious, stay ambitious, and continue to push what
                  creative excellence can be.
                </p>
              </div>
            </div>
          </div>

          {/* DEAN */}
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-24 items-center mb-32">
            {/* CONTENT */}
            <div className="order-2 lg:order-1">
              <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
                Creative Thinking That Lasts
              </p>

              <h3 className="mt-5 text-[13vw] sm:text-[10vw] md:text-[7vw] lg:text-[5.2vw] font-black uppercase leading-[0.9] tracking-[-0.045em]">
                From The
                <span className="text-[#ec008c]"> Dean</span>
              </h3>

              <div className="mt-10 space-y-6">
                <p className="text-base sm:text-lg md:text-xl text-white/70 leading-[1.9]">
                  At NoMAD, with Miami Ad School, the goal was never to create
                  “perfect professionals.” It was to build people who care
                  deeply about the work.
                </p>

                <p className="text-base sm:text-lg md:text-xl text-white/70 leading-[1.9]">
                  So don’t get too comfortable, if you’re ever the smartest
                  person in the room, find a better room.
                </p>

                <p className="text-base sm:text-lg md:text-xl text-white/70 leading-[1.9]">
                  Ideas are only as good as what you do with them, so make them
                  real.
                </p>

                <p className="text-base sm:text-lg md:text-xl text-white/70 leading-[1.9]">
                  And don’t let the industry smooth out what makes you
                  different; your point of view is your edge.
                </p>

                <p className="text-base sm:text-lg md:text-xl text-white/70 leading-[1.9]">
                  The world will keep changing, but great work will always stand
                  out. Keep going, and keep making us proud.
                </p>
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative order-1 lg:order-2">
              <div className="absolute -top-6 -left-6 w-full h-full rounded-[40px] bg-white" />

              <div className="relative overflow-hidden rounded-[40px]">
                <Image
                  src="/dean.jpg"
                  alt="Dean"
                  width={900}
                  height={1100}
                  className="w-full h-[420px] sm:h-[560px] md:h-[720px] object-cover grayscale"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <p className="text-xs uppercase tracking-[4px] text-white/60 font-bold">
                    Dean
                  </p>

                  <h3 className="mt-2 text-3xl md:text-4xl font-black uppercase">
                    Creative Leadership
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* ADVISORY BOARD */}
          <div className="border-t border-white/10 pt-20">
            <div className="max-w-4xl">
              <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
                Advisory Board
              </p>

              <h2 className="mt-5 text-[13vw] sm:text-[10vw] md:text-[7vw] lg:text-[5.2vw] font-black uppercase leading-[0.9] tracking-[-0.045em]">
                Guided By
                <span className="text-[#ec008c]"> Experts</span>
              </h2>

              <p className="mt-8 text-base sm:text-lg md:text-xl text-white/70 leading-[1.9] max-w-3xl">
                Creative leaders, founders, and global professionals who shape
                what the industry needs, and what you should be learning next.
              </p>
            </div>

            {/* BOARD MEMBERS */}
            <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-sm"
                >
                  <div className="overflow-hidden">
                    <Image
                      src={`/board-${item}.jpg`}
                      alt="Board Member"
                      width={600}
                      height={700}
                      className="w-full h-[320px] md:h-[380px] object-cover grayscale transition-all duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <p className="text-xs uppercase tracking-[3px] text-[#ec008c] font-bold">
                      Advisory Board
                    </p>

                    <h3 className="mt-3 text-2xl font-black uppercase">
                      Industry Leader
                    </h3>

                    <p className="mt-3 text-sm text-white/60 leading-relaxed">
                      Creative strategist, founder, and global industry mentor
                      shaping future creative education.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VISION / MISSION / GOALS */}
      <section className="relative py-24 md:py-36 overflow-hidden bg-[#f5f5f5]">
        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
        linear-gradient(to right, black 1px, transparent 1px),
        linear-gradient(to bottom, black 1px, transparent 1px)
      `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* BG TEXT */}
        <div className="absolute top-[5%] right-[-5%] text-[20vw] font-black uppercase text-black/[0.03] leading-none pointer-events-none">
          Vision
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* TOP HEADING */}
          <div className="max-w-5xl">
            <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
              Our Northstar
            </p>

            {/* SIDE BY SIDE HEADING */}
            <div className="mt-6 flex flex-wrap items-end gap-x-5 gap-y-2">
              <h2 className="text-[13vw] sm:text-[10vw] md:text-[7vw] lg:text-[5.2vw] font-black uppercase leading-[0.9] tracking-[-0.045em]">
                Vision.
              </h2>

              <h2 className="text-[13vw] sm:text-[10vw] md:text-[7vw] lg:text-[5.2vw] font-black uppercase leading-[0.9] tracking-[-0.045em] text-[#ec008c]">
                Mission.
              </h2>

              <h2 className="text-[13vw] sm:text-[10vw] md:text-[7vw] lg:text-[5.2vw] font-black uppercase leading-[0.9] tracking-[-0.045em]">
                Goals.
              </h2>
            </div>

            <p className="mt-10 text-lg md:text-2xl font-semibold leading-relaxed text-[#ec008c] max-w-4xl">
              FOR THE CREATORS OF TOMORROW.
            </p>

            <p className="mt-8 text-base sm:text-lg md:text-xl text-black/70 leading-[1.9] max-w-4xl">
              The world doesn’t just need more degrees. It needs creators who
              can think, build, and earn. At NoMAD, we don’t prepare you for
              jobs, we prepare you to create them.
            </p>

            <p className="mt-6 text-base sm:text-lg md:text-xl text-black/70 leading-[1.9] max-w-4xl">
              Where design meets technology and ideas become real-world impact.
              A Mumbai University–backed 4-year journey, with global exposure in
              your final year.
            </p>

            <p className="mt-6 text-base sm:text-lg md:text-xl text-black/70 leading-[1.9] max-w-4xl">
              If your child has imagination, this is where it becomes a career.
            </p>
          </div>

          {/* VISION + MISSION */}
          <div className="mt-24 grid lg:grid-cols-2 gap-8">
            {/* VISION */}
            <div className="group relative overflow-hidden rounded-[40px] border border-black/10 bg-white p-8 md:p-12 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute top-0 left-0 h-1 w-full bg-[#ec008c]" />

              <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
                Vision
              </p>

              <h3 className="mt-6 text-[12vw] sm:text-[8vw] md:text-[5vw] lg:text-[3vw] font-black uppercase leading-[0.95] tracking-[-0.05em]">
                Future
                <br />
                Focused
              </h3>

              <p className="mt-10 text-base sm:text-lg md:text-xl text-black/70 leading-[1.9]">
                To serve as the launchpad for India's most fearless creative
                minds, cultivating talent that transforms the way the world
                engages with brands, stories, and ideas.
              </p>
            </div>

            {/* MISSION */}
            <div className="group relative overflow-hidden rounded-[40px] border border-black/10 bg-black text-white p-8 md:p-12 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute top-0 left-0 h-1 w-full bg-[#ec008c]" />

              <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
                Mission
              </p>

              <h3 className="mt-6 text-[12vw] sm:text-[8vw] md:text-[5vw] lg:text-[3vw] font-black uppercase leading-[0.95] tracking-[-0.05em]">
                Real
                <br />
                Creative Work
              </h3>

              <p className="mt-10 text-base sm:text-lg md:text-xl text-white/70 leading-[1.9]">
                To immerse students in a global, portfolio-driven education that
                blends real-world projects, industry mentorship, and
                cross-cultural collaboration.
              </p>

              <p className="mt-6 text-base sm:text-lg md:text-xl text-white/70 leading-[1.9]">
                Preparing them not only for jobs but for fulfilling careers
                within the creative industry.
              </p>
            </div>
          </div>

          {/* GOALS */}
          <div className="mt-24">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
                  Goals
                </p>

                <h3 className="mt-4 text-[12vw] sm:text-[8vw] md:text-[5vw] lg:text-[4vw] font-black uppercase leading-[0.92] tracking-[-0.05em]">
                  What We
                  <span className="text-[#ec008c]"> Build</span>
                </h3>
              </div>

              <p className="max-w-[520px] text-base md:text-lg text-black/55 leading-relaxed">
                Building future-ready creators through global exposure, industry
                mentorship, creative thinking, and portfolio-driven learning.
              </p>
            </div>

            {/* GOAL ROWS */}
            <div className="space-y-5">
              {[
                "Industry-ready creative portfolios",
                "Global exposure",
                "Strong industry connections",
                "Creative leadership pipeline",
                "Diverse creative community",
                "Future-ready skillsets",
              ].map((item, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-[30px] border border-black/10 bg-white px-6 md:px-8 py-7 transition-all duration-500 hover:bg-black hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between gap-6">
                    {/* LEFT */}
                    <div className="flex items-center gap-5">
                      <span className="text-[#ec008c] text-sm md:text-base font-black">
                        0{i + 1}
                      </span>

                      <p className="text-base md:text-2xl font-semibold leading-relaxed text-black/75 transition-all duration-500 group-hover:text-white">
                        {item}
                      </p>
                    </div>

                    {/* RIGHT DOT */}
                    <div className="h-3 w-3 rounded-full bg-[#ec008c] transition-all duration-500 group-hover:scale-150" />
                  </div>

                  {/* HOVER LINE */}
                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#ec008c] transition-all duration-500 group-hover:w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE NOMAD */}
      <section className="relative py-24 md:py-36 bg-[#f3f3f3] overflow-hidden">
        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
        linear-gradient(to right, black 1px, transparent 1px),
        linear-gradient(to bottom, black 1px, transparent 1px)
      `,
            backgroundSize: "70px 70px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* HEADING */}
          <div className="max-w-full">
            <h2 className="text-[13vw] sm:text-[10vw] md:text-[7vw] lg:text-[5.5vw] font-black uppercase leading-[0.95] tracking-[-0.045em] text-[#ec008c]">
              Need one good reason to
            </h2>

            <div className="flex flex-wrap items-end gap-4">
              <h2 className="text-[13vw] sm:text-[10vw] md:text-[7vw] lg:text-[5.5vw] font-black uppercase leading-[0.95] tracking-[-0.045em] text-[#ec008c]">
                choose
              </h2>

              <div className="flex items-center gap-3 mb-3">
                <h2 className="text-[11vw] sm:text-[8vw] md:text-[6vw] lg:text-[4.5vw] font-black uppercase leading-none tracking-[-0.045em] text-black">
                  NoMAD
                </h2>

                <div className="hidden sm:flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#ec008c] text-white text-[10px] md:text-xs font-black uppercase leading-tight text-center p-2">
                  College of
                  <br />
                  Creative
                  <br />
                  Intelligence
                </div>
              </div>

              <span className="text-[13vw] sm:text-[10vw] md:text-[7vw] lg:text-[5.5vw] font-black leading-none text-[#ec008c]">
                ?
              </span>
            </div>

            <h2 className="mt-3 text-[13vw] sm:text-[10vw] md:text-[7vw] lg:text-[5.5vw] font-black uppercase leading-[0.95] tracking-[-0.045em] text-[#ec008c]">
              Here are 8.
            </h2>
          </div>

          {/* FEATURES */}
          <div className="mt-20 grid md:grid-cols-2 gap-x-16 gap-y-12">
            {[
              {
                title: "Innovative Curriculum",
                desc: "Combines real-world applications with academic theory.",
              },
              {
                title: "State Of The Art Facilities",
                desc: "AI-first studios, advanced technology and resources for enhanced learning.",
              },
              {
                title: "Industry-First Faculty",
                desc: "Strong industry connections provide internships and job opportunities.",
              },
              {
                title: "Personalized Learning",
                desc: "One-on-one tailored learning experiences and faculty interaction.",
              },
              {
                title: "Entrepreneurial Mindset",
                desc: "Develop essential skills for start-ups and personal growth.",
              },
              {
                title: "Hands-On Experience",
                desc: "Engage with the creative industry’s real-world dynamics.",
              },
              {
                title: "Global Internships",
                desc: "Experience with diverse communities and prestigious brands.",
              },
              {
                title: "Worldwide Recognition",
                desc: "Students secure positions with leading global companies and earn international accolades.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group border-t border-black/10 pt-6 transition-all duration-500 hover:translate-x-2"
              >
                <div className="flex items-start gap-4">
                  <span className="text-[#ec008c] text-sm md:text-base font-black min-w-[30px]">
                    0{i + 1}
                  </span>

                  <div>
                    <h3 className="text-lg md:text-2xl font-black uppercase leading-tight">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-base md:text-lg text-black/70 leading-relaxed max-w-[520px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECOGNITIONS / AFFILIATIONS / RANKINGS */}
      <section className="relative overflow-hidden bg-black py-24 md:py-36 text-white">
        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
        linear-gradient(to right, white 1px, transparent 1px),
        linear-gradient(to bottom, white 1px, transparent 1px)
      `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* BG TEXT */}
        <div className="pointer-events-none absolute top-[8%] right-[-5%] text-[18vw] font-black uppercase leading-none tracking-[-0.06em] text-white/[0.03]">
          Global
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* TOP SECTION */}
          <div className="grid items-start gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            {/* LEFT */}
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
                Recognitions
              </p>

              <div className="mt-6 space-y-3">
                <h2 className="text-[13vw] sm:text-[10vw] md:text-[7vw] lg:text-[5.5vw] font-black uppercase leading-[0.9] tracking-[-0.045em]">
                  Recognised
                </h2>

                <h2 className="text-[13vw] sm:text-[10vw] md:text-[7vw] lg:text-[5.5vw] font-black uppercase leading-[0.9] tracking-[-0.045em] text-[#ec008c]">
                  Globally.
                </h2>

                <h2 className="text-[13vw] sm:text-[10vw] md:text-[7vw] lg:text-[5.5vw] font-black uppercase leading-[0.9] tracking-[-0.045em]">
                  Proven
                </h2>

                <h2 className="text-[13vw] sm:text-[10vw] md:text-[7vw] lg:text-[5.5vw] font-black uppercase leading-[0.9] tracking-[-0.045em] text-[#ec008c]">
                  Consistently.
                </h2>
              </div>
            </div>

            {/* RIGHT */}
            <div className="space-y-8">
              <p className="text-lg md:text-3xl font-semibold leading-relaxed text-[#ec008c]">
                Part of one of the most awarded creative education networks in
                the world.
              </p>

              <div className="space-y-6">
                <p className="text-base md:text-xl leading-[1.9] text-white/70">
                  With students winning international accolades and placements
                  across top companies, NoMAD and Miami Ad School continue to
                  shape the next generation of creative leaders.
                </p>

                <p className="text-base md:text-xl leading-[1.9] text-white/70">
                  From global competitions to world-renowned agencies, our
                  students are recognised for work that pushes creative
                  excellence forward.
                </p>
              </div>

              {/* AFFILIATIONS */}
              <div className="mt-12 rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#ec008c]">
                  Affiliations & Accreditations
                </p>

                <h3 className="mt-5 text-2xl md:text-4xl font-black uppercase leading-[1.1] tracking-[-0.04em]">
                  Backed by Mumbai University.
                  <br />
                  Connected globally.
                </h3>

                {/* LOGOS */}
                <div className="mt-10 flex flex-wrap items-center gap-8">
                  <div className="rounded-[22px] border border-white/10 bg-black/40 px-8 py-6">
                    <Image
                      src="/mumbai-university-logo.png"
                      alt="Mumbai University"
                      width={180}
                      height={80}
                      className="h-14 w-auto object-contain"
                    />
                  </div>

                  <div className="rounded-[22px] border border-white/10 bg-black/40 px-8 py-6">
                    <Image
                      src="/miami-ad-school-logo.png"
                      alt="Miami Ad School"
                      width={180}
                      height={80}
                      className="h-14 w-auto object-contain"
                    />
                  </div>

                  <div className="rounded-[22px] border border-white/10 bg-black/40 px-8 py-6">
                    <Image
                      src="/nomad-logo-white.png"
                      alt="NoMAD"
                      width={160}
                      height={70}
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RANKINGS */}
          <div className="mt-32 border-t border-white/10 pt-24">
            <div className="max-w-6xl">
              <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
                Rankings
              </p>

              {/* HEADING */}
              <div className="mt-8 flex flex-wrap items-end gap-x-5 gap-y-2">
                <h2 className="text-[13vw] sm:text-[10vw] md:text-[7vw] lg:text-[5.2vw] font-black uppercase leading-[0.9] tracking-[-0.045em]">
                  A Beacon Of
                </h2>

                <h2 className="text-[13vw] sm:text-[10vw] md:text-[7vw] lg:text-[5.2vw] font-black uppercase leading-[0.9] tracking-[-0.045em] text-[#ec008c]">
                  Excellence.
                </h2>
              </div>

              {/* CONTENT */}
              <div className="mt-12 max-w-5xl space-y-7">
                <p className="text-2xl md:text-4xl font-semibold leading-[1.4] tracking-[-0.03em] text-white">
                  NoMAD doesn’t chase awards.
                  <br />
                  They make work that does.
                </p>

                <div className="space-y-5 border-l border-white/10 pl-6">
                  <p className="text-base md:text-xl leading-[1.9] text-white/70">
                    One of the most awarded creative colleges in the world.*
                  </p>

                  <p className="text-base md:text-xl leading-[1.9] text-white/70">
                    Students have taken home metals from Cannes, D&AD, One Show,
                    and the most respected stages in the world.
                  </p>

                  <p className="pt-2 text-sm text-white/40">
                    *For Miami Ad School, according to The Gunn Report.
                  </p>
                </div>
              </div>
            </div>

            {/* AWARDS GRID */}
            <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Cannes Lions",
                  image: "/award-1.jpg",
                },
                {
                  title: "D&AD",
                  image: "/award-2.jpg",
                },
                {
                  title: "One Show",
                  image: "/award-3.jpg",
                },
                {
                  title: "Global Recognition",
                  image: "/award-4.jpg",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 transition-all duration-700 hover:-translate-y-4"
                >
                  <div className="overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={700}
                      height={900}
                      className="h-[320px] w-full object-cover grayscale transition-all duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#ec008c]">
                      International Award
                    </p>

                    <h3 className="mt-3 text-2xl font-black uppercase tracking-[-0.03em]">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="relative overflow-hidden bg-[#f7f7f7] py-24 md:py-36">
        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
        linear-gradient(to right, black 1px, transparent 1px),
        linear-gradient(to bottom, black 1px, transparent 1px)
      `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* BG TEXT */}
        <div className="pointer-events-none absolute top-[5%] right-[-5%] text-[18vw] font-black uppercase leading-none tracking-[-0.06em] text-black/[0.03]">
          FAQs
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* TOP HEADING */}
          <div className="max-w-5xl">
            <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
              FAQs
            </p>

            <div className="mt-6 flex flex-wrap items-end gap-x-5 gap-y-2">
              <h2 className="text-[13vw] sm:text-[10vw] md:text-[7vw] lg:text-[5.2vw] font-black uppercase leading-[0.9] tracking-[-0.045em]">
                Everything
              </h2>

              <h2 className="text-[13vw] sm:text-[10vw] md:text-[7vw] lg:text-[5.2vw] font-black uppercase leading-[0.9] tracking-[-0.045em] text-[#ec008c]">
                You’re
              </h2>

              <h2 className="text-[13vw] sm:text-[10vw] md:text-[7vw] lg:text-[5.2vw] font-black uppercase leading-[0.9] tracking-[-0.045em]">
                Wondering
              </h2>
            </div>

            <p className="mt-10 max-w-3xl text-base md:text-xl leading-[1.9] text-black/60">
              Everything students and parents usually ask before joining NoMAD.
            </p>
          </div>

          {/* FAQ LIST */}
          {/* FAQ GRID */}
          <div className="mt-20 grid gap-5 md:grid-cols-2">
            {[
              {
                q: "What makes NoMAD different from other colleges?",
                a: "Most colleges teach theory first and application later. We flip that. At NoMAD, you learn by doing, through real briefs, live projects, and industry mentorship. You graduate with a portfolio, not just a degree.",
              },
              {
                q: "Is this a recognised degree?",
                a: "Yes. Our undergraduate program is backed by Mumbai University, while also being part of a global creative education network.",
              },
              {
                q: "What kind of careers can I pursue after this?",
                a: "Advertising, Design, Strategy & Planning, Content & Social Media, Digital Marketing, freelancing, startups, and international creative careers.",
              },
              {
                q: "Do you guarantee placements?",
                a: "We don’t guarantee jobs. We build portfolios that get you hired. Our students consistently work with leading agencies and global brands.",
              },
              {
                q: "How important is the portfolio?",
                a: "It’s everything. Your portfolio gets you interviews, opportunities, internships, and recognition.",
              },
              {
                q: "What is the admission process like?",
                a: "Application form, creative exercises, shortlisting, and interview. We look for originality, curiosity, and intent.",
              },
              {
                q: "Do I need prior experience in design or creativity?",
                a: "No. You don’t need to be trained — you need to be interested. We build your skills from the ground up.",
              },
              {
                q: "What is the creative test?",
                a: "It’s not an exam. It’s designed to understand how you think, solve problems, and express ideas.",
              },
              {
                q: "Are internships included in the program?",
                a: "Yes. Internships are integrated into the curriculum both in India and internationally.",
              },
              {
                q: "Can I study abroad?",
                a: "Yes. Through our global network, students can spend a term at international campuses.",
              },
              {
                q: "Who will be teaching us?",
                a: "Creative directors, strategists, designers, and working industry professionals actively shaping the industry today.",
              },
              {
                q: "What kind of companies hire NoMAD students?",
                a: "Students have worked with agencies and brands like Ogilvy, BBH, McCann, DDB, Google, Meta, and more.",
              },
              {
                q: "Is this course suitable for a stable career?",
                a: "Yes. Creative careers reward skill, thinking, and originality. Opportunities are global if your work is strong.",
              },
              {
                q: "What is the class size?",
                a: "We keep batches curated and limited to ensure personalized attention and stronger mentorship.",
              },
              {
                q: "Is accommodation provided?",
                a: "Admissions can guide you regarding nearby housing and accommodation options.",
              },
              {
                q: "What is the fee structure?",
                a: "Fees vary by intake and program. Contact admissions for updated details.",
              },
              {
                q: "Can parents speak to someone before applying?",
                a: "Absolutely. Our admissions team is happy to guide both students and parents.",
              },
              {
                q: "What if I’m unsure about my career yet?",
                a: "That’s exactly why NoMAD exists — to help you explore different creative paths before specialising.",
              },
              {
                q: "Do you focus on AI and new creative tools?",
                a: "Yes. AI, digital workflows, and emerging creative tools are integrated into the curriculum.",
              },
              {
                q: "When do admissions close?",
                a: "Admissions are limited and filled on a rolling basis. Applying earlier improves your chances.",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="group h-fit overflow-hidden rounded-[32px] border border-black/10 bg-white transition-all duration-500 open:bg-black"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-5 px-6 py-6 md:px-8 md:py-7">
                  <div className="flex items-start gap-4">
                    <span className="mt-1 text-sm md:text-base font-black text-[#ec008c]">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <h3 className="text-base md:text-xl font-black leading-[1.4] tracking-[-0.03em] transition-all duration-500 group-open:text-white">
                      {item.q}
                    </h3>
                  </div>

                  <div className="flex h-11 w-11 min-w-[44px] items-center justify-center rounded-full border border-black/10 bg-[#f5f5f5] transition-all duration-500 group-open:rotate-45 group-open:border-white/10 group-open:bg-[#ec008c]">
                    <span className="text-xl font-light group-open:text-white">
                      +
                    </span>
                  </div>
                </summary>

                <div className="px-6 pb-7 md:px-8 md:pb-8">
                  <div className="ml-8 border-l border-black/10 pl-5 transition-all duration-500 group-open:border-white/10">
                    <p className="text-sm md:text-base leading-[1.9] text-black/65 transition-all duration-500 group-open:text-white/70">
                      {item.a}
                    </p>
                  </div>
                </div>
              </details>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-28 rounded-[40px] bg-black px-8 py-14 md:px-14 md:py-20 text-white">
            <div className="max-w-5xl">
              <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
                Still Unsure?
              </p>
              <h2 className="mt-6 flex flex-wrap items-end gap-x-5 gap-y-2 text-[11vw] sm:text-[8vw] md:text-[5vw] lg:text-[4vw] font-black uppercase leading-[0.9] tracking-[-0.045em]">
                <span>Creative Careers</span>

                <span className="text-[#ec008c]">Don’t Come With</span>

                <span>A Fixed Roadmap.</span>
              </h2>
              <p className="mt-8 max-w-3xl text-base md:text-xl leading-[1.9] text-white/70">
                But if you’re serious about building something of your own, this
                is where you start.
              </p>

              <button className="mt-10 h-[64px] rounded-full bg-[#ec008c] px-10 text-sm font-black uppercase tracking-[0.25em] text-white transition-all duration-500 hover:scale-105">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
