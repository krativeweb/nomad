"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "@/components/header";

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

const programs = [
  {
    title: "B.Des Communication Design",
    duration: "4 Years",
    intake: "June 2025",
    image: "/program-1.jpg",
    desc: "Visual systems, branding, storytelling, typography, and digital media.",
    highlights: [
      "Brand Identity",
      "Typography",
      "Digital Media",
      "UI/UX",
    ],
  },
  {
    title: "B.Des Advertising",
    duration: "4 Years",
    intake: "June 2025",
    image: "/program-2.jpg",
    desc: "Creative campaigns, copywriting, strategy, and integrated communication.",
    highlights: [
      "Copywriting",
      "Campaigns",
      "Art Direction",
      "Creative Strategy",
    ],
  },
  {
    title: "M.Des Strategic Design",
    duration: "2 Years",
    intake: "June 2025",
    image: "/program-3.jpg",
    desc: "Design thinking, innovation systems, and future creative leadership.",
    highlights: [
      "Innovation",
      "Design Thinking",
      "Service Design",
      "Leadership",
    ],
  },
  {
    title: "Creative Business",
    duration: "3 Years",
    intake: "June 2025",
    image: "/program-4.jpg",
    desc: "Business strategy and creative entrepreneurship for modern industries.",
    highlights: [
      "Brand Strategy",
      "Media Planning",
      "Creative Economy",
      "Management",
    ],
  },
];

const stats = [
  {
    value: "100%",
    label: "Placement Support",
    icon: GraduationCap,
  },
  {
    value: "200+",
    label: "Industry Projects",
    icon: Briefcase,
  },
  {
    value: "57",
    label: "Global Partners",
    icon: Globe2,
  },
  {
    value: "16",
    label: "Global Campuses",
    icon: Sparkles,
  },
];

export default function ProgramsPage() {
  const container = useRef<HTMLDivElement>(null);

  const [expandedCard, setExpandedCard] =
    useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from(".hero-reveal", {
        y: 100,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: "power4.out",
      });

      gsap.from(".stats-card", {
        y: 60,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 80%",
        },
      });

      gsap.from(".program-card", {
        y: 80,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".program-grid",
          start: "top 75%",
        },
      });

      gsap.from(".section-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".section-title",
          start: "top 85%",
        },
      });

    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={container}
      className="bg-[#f4f1f1] text-black overflow-x-hidden"
    >

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">

        <Header />

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

        {/* GLOW */}
        <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full bg-[#ec008c]/20 blur-3xl"></div>

        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#ec008c]/10 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 pt-40 md:pt-48 relative z-10">

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center">

            {/* LEFT */}
            <div>

              <div className="hero-reveal inline-flex items-center gap-3 border border-black/10 bg-white shadow-lg px-5 py-3 rounded-full mb-10">

                <Sparkles
                  size={18}
                  className="text-[#ec008c]"
                />

                <span className="uppercase tracking-[4px] text-xs md:text-sm font-bold">
                  Future Creative Education
                </span>

              </div>

              <div className="overflow-hidden">
                <h1 className="hero-reveal text-[18vw] md:text-[8vw] font-black uppercase leading-[0.78] tracking-[-0.05em]">
                  Our
                </h1>
              </div>

              <div className="overflow-hidden">
                <h1 className="hero-reveal text-[18vw] md:text-[8vw] font-black uppercase leading-[0.78] tracking-[-0.05em] text-[#ec008c]">
                  Programs
                </h1>
              </div>

              <div className="overflow-hidden">
                <h1 className="hero-reveal text-[18vw] md:text-[8vw] font-black uppercase leading-[0.78] tracking-[-0.05em]">
                  Create
                </h1>
              </div>

              <p className="hero-reveal mt-10 max-w-2xl text-lg md:text-2xl text-black/60 leading-relaxed">
                Industry-driven programs crafted for designers,
                strategists, innovators, creators, and future
                creative leaders.
              </p>

              <div className="hero-reveal mt-12 flex flex-wrap gap-5">

                <button className="group px-10 py-5 rounded-full bg-black text-white text-lg font-bold uppercase tracking-[2px] flex items-center gap-3 hover:bg-[#ec008c] transition-all duration-300">

                  Explore Programs

                  <ArrowRight className="group-hover:translate-x-1 transition-all duration-300" />

                </button>

                <button className="px-10 py-5 rounded-full border border-black/10 bg-white text-black text-lg font-semibold hover:bg-black hover:text-white transition-all duration-300 shadow-lg">

                  Download Brochure

                </button>

              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">

              <div className="absolute -top-10 -right-10 w-full h-full rounded-[50px] bg-[#ec008c]"></div>

              <div className="relative overflow-hidden rounded-[50px] shadow-2xl">

                <Image
                  src="/creative-team.jpg"
                  alt="Creative Team"
                  width={900}
                  height={1200}
                  priority
                  className="w-full h-[650px] md:h-[780px] object-cover grayscale"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-xl rounded-[30px] p-6 shadow-2xl max-w-[300px]">

                  <p className="text-sm uppercase tracking-[3px] text-black/40 font-bold">
                    Global Creative Network
                  </p>

                  <h3 className="mt-3 text-2xl font-black leading-tight">
                    Learn from industry leaders worldwide.
                  </h3>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="stats-section py-24 md:py-32">

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((stat, index) => (
            <div
              key={index}
              className="stats-card rounded-[35px] bg-white p-8 md:p-10 shadow-xl border border-black/5"
            >

              <stat.icon
                size={48}
                className="text-[#ec008c]"
              />

              <h2 className="mt-6 text-5xl md:text-7xl font-black">
                {stat.value}
              </h2>

              <p className="mt-3 uppercase tracking-[3px] text-black/50 text-sm">
                {stat.label}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* SECTION TITLE */}
      <section className="pt-10 pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="section-title text-[18vw] md:text-[7vw] font-black uppercase leading-[0.82] tracking-[-0.05em]">
            Choose
          </h2>

          <h2 className="section-title text-[18vw] md:text-[7vw] font-black uppercase leading-[0.82] tracking-[-0.05em] text-[#ec008c]">
            Your Path
          </h2>

        </div>

      </section>

      {/* PROGRAM GRID */}
      <section className="program-grid pb-32">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          {programs.map((program, index) => (
            <div
              key={index}
              className="program-card bg-white rounded-[40px] overflow-hidden shadow-xl border border-black/5"
            >

              {/* IMAGE */}
              <div className="relative h-[420px] overflow-hidden">

                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover grayscale hover:scale-105 transition-all duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                <div className="absolute bottom-8 left-8">

                  <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 text-white uppercase tracking-[3px] text-xs">
                    Creative Program
                  </div>

                </div>

              </div>

              {/* CONTENT */}
              <div className="p-8 md:p-10">

                <h3 className="text-3xl md:text-4xl font-black uppercase leading-[0.9]">
                  {program.title}
                </h3>

                <p className="mt-6 text-black/60 text-lg leading-relaxed">
                  {program.desc}
                </p>

                {/* META */}
                <div className="mt-8 flex flex-wrap gap-5">

                  <div className="flex items-center gap-2 text-black/60">

                    <Clock
                      size={18}
                      className="text-[#ec008c]"
                    />

                    <span className="font-medium">
                      {program.duration}
                    </span>

                  </div>

                  <div className="flex items-center gap-2 text-black/60">

                    <BookOpen
                      size={18}
                      className="text-[#ec008c]"
                    />

                    <span className="font-medium">
                      {program.intake}
                    </span>

                  </div>

                </div>

                {/* TOGGLE */}
                <button
                  onClick={() =>
                    setExpandedCard(
                      expandedCard === index
                        ? null
                        : index
                    )
                  }
                  className="mt-8 flex items-center gap-2 text-[#ec008c] uppercase tracking-[2px] font-bold"
                >

                  View Highlights

                  <ChevronDown
                    size={18}
                    className={`transition-all duration-300 ${
                      expandedCard === index
                        ? "rotate-180"
                        : ""
                    }`}
                  />

                </button>

                {/* HIGHLIGHTS */}
                {expandedCard === index && (

                  <div className="mt-6 flex flex-wrap gap-3">

                    {program.highlights.map(
                      (item, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 rounded-full bg-[#ec008c]/10 text-[#ec008c] text-sm font-bold"
                        >
                          {item}
                        </span>
                      )
                    )}

                  </div>

                )}

                {/* BUTTON */}
                <button className="group mt-10 w-full py-4 rounded-full bg-black text-white text-sm uppercase tracking-[3px] font-bold hover:bg-[#ec008c] transition-all duration-300 flex items-center justify-center gap-3">

                  Apply Now

                  <ArrowRight className="group-hover:translate-x-1 transition-all duration-300" />

                </button>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="relative py-32 md:py-40 overflow-hidden bg-black text-white">

        <div className="absolute top-0 left-0 w-full h-full opacity-20">

          <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-[#ec008c] blur-3xl"></div>

          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#ec008c] blur-3xl"></div>

        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-[16vw] md:text-[7vw] font-black uppercase leading-[0.82] tracking-[-0.05em]">
            Start
          </h2>

          <h2 className="text-[16vw] md:text-[7vw] font-black uppercase leading-[0.82] tracking-[-0.05em] text-[#ec008c]">
            Your Future
          </h2>

          <p className="mt-10 text-xl text-white/60 leading-relaxed max-w-3xl mx-auto">
            Join a global creative ecosystem where
            education meets innovation, collaboration,
            and industry experience.
          </p>

          <div className="mt-14 flex flex-wrap justify-center gap-5">

            <button className="px-10 py-5 rounded-full bg-[#ec008c] text-white text-lg font-bold uppercase tracking-[2px] hover:scale-105 transition-all duration-300">
              Apply Now
            </button>

            <button className="px-10 py-5 rounded-full border border-white/10 bg-white/10 backdrop-blur-md text-white text-lg font-bold uppercase tracking-[2px] hover:bg-white hover:text-black transition-all duration-300">
              Download Brochure
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}