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

    gsap.from(".stats-card", {
      y: 80,
      opacity: 0,
      stagger: 0.15,
      duration: 1,

      scrollTrigger: {
        trigger: ".stats-card",
        start: "top 85%",
      },
    });

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
      <section className="relative min-h-screen pb-24 md:pb-32 overflow-hidden">
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

        <div className="absolute top-[10%] left-[-5%] text-[25vw] font-black uppercase text-black/[0.03] leading-none select-none pointer-events-none">
          About
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 md:pt-44 lg:pt-48 relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-20 items-center">
            {/* LEFT */}

            <div className="max-w-[760px]">
              <div className="hero-reveal inline-flex items-center gap-3 border border-black/10 bg-[#f5f5f5] px-5 py-3 rounded-full mb-10">
                <Sparkles size={18} className="text-[#ec008c]" />

                <span className="uppercase tracking-[4px] text-xs font-bold">
                  About Our Creative Institution
                </span>
              </div>

              <div className="space-y-0">
                <div className="overflow-hidden pb-4 md:pb-6">
                  <h1 className="split-text text-[18vw] sm:text-[14vw] md:text-[9vw] lg:text-[7vw] xl:text-[6vw] font-black uppercase leading-[0.9] tracking-[-0.05em]">
                    We
                  </h1>
                </div>

                <div className="overflow-hidden pb-4 md:pb-6">
                  <h1 className="split-text text-[18vw] sm:text-[14vw] md:text-[9vw] lg:text-[7vw] xl:text-[6vw] font-black uppercase leading-[0.9] tracking-[-0.05em] text-[#ec008c]">
                    Shape
                  </h1>
                </div>

                <div className="overflow-hidden pb-4 md:pb-6">
                  <h1 className="split-text text-[18vw] sm:text-[14vw] md:text-[9vw] lg:text-[7vw] xl:text-[6vw] font-black uppercase leading-[0.9] tracking-[-0.05em]">
                    Creators
                  </h1>
                </div>
              </div>

              <p className="hero-reveal mt-8 md:mt-10 max-w-[650px] text-base sm:text-lg md:text-xl text-black/70 leading-relaxed md:leading-[1.8]">
                A future-focused creative institution empowering designers,
                innovators, strategists, and entrepreneurs through world-class
                education and industry-driven experiences.
              </p>

              <div className="hero-reveal relative z-20 mt-8 md:mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button className="group w-full sm:w-auto h-[56px] px-6 md:px-10 rounded-full bg-black text-white text-sm md:text-base font-bold uppercase tracking-[2px] flex items-center justify-center gap-3 hover:bg-[#ec008c] transition-all duration-500">
                  Explore Campus
                  <ArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
                </button>

                <button className="w-full sm:w-auto h-[56px] px-6 md:px-10 rounded-full border border-black/10 bg-[#f5f5f5] text-black text-sm md:text-base font-semibold hover:bg-black hover:text-white transition-all duration-500">
                  Download Prospectus
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE */}

            <div className="relative">
              <div className="absolute -top-3 sm:-top-6 -right-3 sm:-right-6 w-full h-full rounded-[30px] sm:rounded-[50px] bg-[#ec008c]/80"></div>

              <div className="hero-image relative overflow-hidden rounded-[50px]">
                <Image
                  src="/about-hero.jpg"
                  alt="About Us"
                  width={900}
                  height={1200}
                  priority
                  className="w-full h-[320px] xs:h-[380px] sm:h-[520px] md:h-[680px] lg:h-[780px] object-cover grayscale"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute top-6 right-6 bg-white rounded-[25px] p-5 border border-black/5">
                  <p className="text-xs uppercase tracking-[3px] text-black/40 font-bold">
                    Global Students
                  </p>

                  <h3 className="mt-2 text-3xl font-black">25+</h3>
                </div>

                <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 bg-[#f5f5f5] rounded-[30px] p-5 md:p-6 border border-black/5 max-w-[300px]">
                  <p className="text-[10px] md:text-sm uppercase tracking-[3px] text-black/40 font-bold">
                    Creative Community
                  </p>

                  <h3 className="mt-3 text-xl md:text-2xl font-black leading-tight">
                    Inspiring future innovators through creativity.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT STORY */}

      <section className="pt-24 md:pt-40 pb-20 md:pb-32 bg-black text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="uppercase tracking-[4px] text-[#ec008c] font-bold mb-6">
                Our Story
              </p>

              <h2 className="text-[14vw] md:text-[5vw] font-black uppercase leading-[0.85] tracking-[-0.05em]">
                Creativity Meets Purpose
              </h2>
            </div>

            <div>
              <p className="text-lg md:text-xl text-white/70 leading-[1.9]">
                Founded with a vision to redefine creative education, our
                institution combines industry collaboration, experimental
                learning, and global perspectives to help students shape
                impactful careers in the modern creative economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-black overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-20">
          {[
            "Innovation",
            "Design",
            "Creativity",
            "Strategy",
            "Leadership",
            "Future",
          ].map((item, index) => (
            <h2
              key={index}
              className="text-5xl sm:text-7xl md:text-9xl font-black uppercase text-white/10"
            >
              {item}
            </h2>
          ))}
        </div>
      </section>
      {/* STATS */}

      <section className="py-24 bg-[#efefef]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              ["15K+", "Alumni"],
              ["25+", "Countries"],
              ["98%", "Placement Support"],
              ["120+", "Industry Mentors"],
            ].map((item, index) => (
              <div
                key={index}
                className="stats-card rounded-[24px] md:rounded-[40px] bg-[#f5f5f5] border border-black/5 p-10"
              >
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-black">
                  {item[0]}
                </h3>

                <p className="mt-4 uppercase tracking-[3px] text-black/50 font-bold text-sm">
                  {item[1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAMPUS EXPERIENCE */}
      <section className="py-32 bg-[#f4f1f1]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-center">
            <div>
              <Image
                src="/campus-life.jpg"
                alt="Campus"
                width={900}
                height={1000}
                className="rounded-[28px] md:rounded-[50px] object-cover w-full h-[320px] sm:h-[520px] md:h-[680px] lg:h-[760px]"
              />
            </div>

            <div>
              <p className="uppercase tracking-[4px] text-[#ec008c] font-bold mb-6">
                Campus Experience
              </p>

              <h2 className="text-[14vw] md:text-[5vw] font-black uppercase leading-[0.85] tracking-[-0.05em]">
                Learn Beyond Classrooms
              </h2>

              <div className="mt-10 space-y-6">
                {[
                  "Creative studios and innovation labs",
                  "Global workshops and masterclasses",
                  "Live projects with industry partners",
                  "Collaborative creative culture",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-[30px] bg-[#f5f5f5] border border-black/5 p-6"
                  >
                    <p className="text-lg font-bold uppercase tracking-[2px]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FACULTY */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-[15vw] md:text-[6vw] font-black uppercase leading-[0.82] tracking-[-0.05em]">
              Creative
            </h2>

            <h2 className="text-[15vw] md:text-[6vw] font-black uppercase leading-[0.82] tracking-[-0.05em] text-[#ec008c]">
              Mentors
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-[40px] overflow-hidden border border-white/10"
              >
                <Image
                  src={`/faculty-${item}.jpg`}
                  alt="Faculty"
                  width={600}
                  height={800}
                  className="w-full h-[360px] sm:h-[420px] md:h-[500px] object-cover grayscale"
                />

                <div className="p-8 bg-white text-black">
                  <h3 className="text-3xl font-black uppercase">
                    Creative Mentor
                  </h3>

                  <p className="mt-3 uppercase tracking-[3px] text-[#ec008c] text-sm font-bold">
                    Former Creative Director
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN US */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-[#ec008c] text-white text-center">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <h2 className="text-[16vw] md:text-[6vw] font-black uppercase leading-[0.82] tracking-[-0.05em]">
            Join The Future
          </h2>

          <p className="mt-8 text-lg md:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            Build your creative career with a global community of designers,
            innovators, and future leaders.
          </p>

          <button className="mt-10 md:mt-12 w-full sm:w-auto h-[56px] md:h-[60px] px-8 md:px-10 rounded-full bg-black text-white uppercase tracking-[3px] font-bold hover:bg-white hover:text-black transition-all duration-500">
            Apply Now
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
