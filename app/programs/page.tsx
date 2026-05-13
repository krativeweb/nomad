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

const programs = [
  {
    title: "B.Des Communication Design",
    duration: "4 Years",
    intake: "June 2025",
    image: "/program-1.jpg",
    desc: "Visual systems, branding, storytelling, typography, and digital media.",
    highlights: ["Brand Identity", "Typography", "Digital Media", "UI/UX"],
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

const careers = [
  "UI/UX Designer",
  "Brand Strategist",
  "Motion Designer",
  "Creative Director",
  "Visual Storyteller",
  "Digital Product Designer",
];

const companies = [
  "Google",
  "Adobe",
  "Netflix",
  "Spotify",
  "Meta",
  "Ogilvy",
  "Pentagram",
  "Apple",
];

const testimonials = [
  {
    name: "Ariana Lewis",
    role: "UI/UX Designer at Adobe",
    image: "/creative-side.jpg",
    quote:
      "This program transformed my creative thinking and helped me build an industry-level portfolio.",
  },
  {
    name: "Daniel Carter",
    role: "Brand Strategist at Spotify",
    image: "/creative-team.jpg",
    quote:
      "The mentorship and real-world projects gave me confidence before entering the industry.",
  },
];

const faqs = [
  {
    q: "Is portfolio mandatory for admission?",
    a: "A portfolio is recommended but beginners can also apply through aptitude evaluation.",
  },
  {
    q: "Do you provide placement support?",
    a: "Yes, we provide industry mentorship, internships, and placement assistance.",
  },
  {
    q: "Are scholarships available?",
    a: "Yes, merit-based and creative excellence scholarships are available.",
  },
  {
    q: "Can international students apply?",
    a: "Absolutely. Students from multiple countries join our programs every year.",
  },
];

export default function ProgramsPage() {
  const container = useRef<HTMLDivElement>(null);

  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /*
      HERO ANIMATION
      */

      gsap.from(".hero-reveal", {
        y: 100,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: "power4.out",
      });

      gsap.to(".hero-image", {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.from(".program-card", {
        y: 120,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: "power4.out",

        scrollTrigger: {
          trigger: ".program-grid",
          start: "top 75%",
        },
      });
      /*
      SPLIT TEXT
      */

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

      /*
      STATS
      */

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
    }, container);

    return () => ctx.revert();
  }, []);

  /*
  =========================
  CURSOR GLOW
  =========================
  */

  return (
    <div ref={container} className="bg-[#efefef] text-black overflow-x-hidden">
      {/* HERO */}
      <Header />
      <section className="relative min-h-screen overflow-hidden">
        {/* GRID s*/}
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

        <div className="max-w-7xl mx-auto px-6 pt-40 md:pt-48 relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center">
            {/* LEFT */}
            {/* LEFT */}
            {/* LEFT */}
            <div className="relative z-10 max-w-[620px]">
              {/* LABEL */}
              <div className="hero-reveal inline-flex items-center gap-3 border border-black/10 bg-[#f5f5f5] px-4 py-2 rounded-full mb-8">
                <Sparkles size={15} className="text-[#ec008c]" />

                <span className="uppercase tracking-[0.3em] text-[10px] font-black whitespace-nowrap">
                  Creative-First Learning
                </span>
              </div>

              {/* HEADING */}
              <div className="space-y-1">
                <h1 className="hero-reveal split-text text-[15vw] sm:text-[11vw] md:text-[7vw] lg:text-[5.8vw] font-black uppercase leading-[0.84] tracking-[-0.055em]">
                  We Make
                </h1>

                <h1 className="hero-reveal split-text text-[15vw] sm:text-[11vw] md:text-[7vw] lg:text-[5.8vw] font-black uppercase leading-[0.84] tracking-[-0.055em] text-[#ec008c]">
                  Students
                </h1>

                <h1 className="hero-reveal split-text text-[15vw] sm:text-[11vw] md:text-[7vw] lg:text-[5.8vw] font-black uppercase leading-[0.84] tracking-[-0.055em]">
                  World Ready
                </h1>
              </div>

              {/* DESCRIPTION */}
              <p className="hero-reveal mt-8 text-base sm:text-lg md:text-xl leading-[1.9] text-black/65 max-w-[560px]">
                Hands-on creative education built around real client projects,
                collaboration, mentorship, and industry experience.
              </p>

              {/* STEPS */}
              <div className="hero-reveal mt-12 space-y-5">
                {[
                  "Work On Real Client Projects",
                  "Collaborate In Teams",
                  "Receive Mentorship From Industry Creatives",
                  "No Heavy Theory Or Outdated Syllabus",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group flex items-center gap-5 rounded-[24px] border border-black/10 bg-white px-5 py-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#ec008c]/30"
                  >
                    {/* NUMBER */}
                    <div className="flex h-11 w-11 min-w-[44px] items-center justify-center rounded-full bg-[#ec008c] text-sm font-black text-white">
                      0{i + 1}
                    </div>

                    {/* TEXT */}
                    <p className="text-sm sm:text-base md:text-lg font-black uppercase leading-[1.4] tracking-[-0.03em]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* LOCATIONS */}
              <div className="hero-reveal mt-12 mb-20">
                <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
                  Locations
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-black px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-white">
                    Mumbai
                  </span>

                  <span className="rounded-full border border-black/10 bg-white px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-black">
                    Bangalore
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-full h-full rounded-[50px] bg-[#ec008c]"></div>

              <div className="hero-image relative overflow-hidden rounded-[50px] shadow-2xl">
                <Image
                  src="/creative-team.jpg"
                  alt="Creative Team"
                  width={900}
                  height={1200}
                  priority
                  className="w-full h-[650px] md:h-[780px] object-cover grayscale"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                <div className="absolute bottom-8 left-8 bg-[#f7f7f7]/80 backdrop-blur-xl/90 backdrop-blur-xl rounded-[30px] p-6 shadow-2xl max-w-[300px]">
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

     
     {/* UNDERGRADUATE PROGRAM SECTION */}
<section className="relative overflow-hidden bg-[#f7f7f7] pt-10 md:pt-16 pb-24 md:pb-32 -mt-10">
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
  <div className="pointer-events-none absolute top-[8%] right-[-5%] text-[18vw] font-black uppercase leading-none tracking-[-0.07em] text-black/[0.03]">
    Program
  </div>

  <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* TOP */}
    <div className="max-w-6xl">
      <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
        Undergraduate Program
      </p>

      {/* HEADING */}
      <div className="mt-6 flex flex-wrap items-end gap-x-5 gap-y-2">
        <h2 className="text-[13vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.9] tracking-[-0.045em]">
          Bachelors Program
        </h2>

        <h2 className="text-[13vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.9] tracking-[-0.045em] text-[#ec008c]">
          In Advertising
        </h2>

        <h2 className="text-[13vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.9] tracking-[-0.045em]">
          & Communication Design
        </h2>
      </div>

      {/* DESCRIPTION */}
      <div className="mt-12 max-w-5xl space-y-6">
        <p className="text-2xl md:text-4xl font-semibold leading-[1.4] tracking-[-0.03em] text-[#ec008c]">
          Designed for future visionaries.
        </p>

        <p className="text-base sm:text-lg md:text-xl leading-[1.9] text-black/70">
          Master the intersection of strategy, creativity, and technology.
          Explore consumer psychology, typography, branding, storytelling,
          digital design, and emerging creative tools.
        </p>

        <p className="text-base sm:text-lg md:text-xl leading-[1.9] text-black/70">
          Combining traditional design principles with modern digital workflows,
          this program transforms creative potential into a professional voice.
        </p>
      </div>
    </div>

    {/* WHY THIS PROGRAM */}
<div className="mt-24 rounded-[40px] border border-black/10 bg-white p-8 md:p-12">
  {/* TOP HEADING */}
  <div className="max-w-5xl">
    <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
      Why This Program
    </p>

    <div className="mt-6 flex flex-wrap items-end gap-x-5 gap-y-2">
      <h3 className="text-[13vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.9] tracking-[-0.045em]">
        Creative Careers
      </h3>

      <h3 className="text-[13vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.9] tracking-[-0.045em] text-[#ec008c]">
        Need More
      </h3>
    </div>
  </div>

  {/* CONTENT */}
  <div className="mt-16 grid gap-5 md:grid-cols-2">
    {[
      "Designers need branding and audience understanding.",
      "Communicators must navigate multiple digital platforms.",
      "Creative professionals must embrace new tools and technologies.",
      "Students need real-world creative adaptability.",
      "This program mirrors the industry students will join.",
    ].map((item, i) => (
      <div
        key={i}
        className="group flex items-start gap-5 rounded-[28px] border border-black/10 bg-[#fafafa] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#ec008c]/30 hover:bg-white"
      >
        {/* NUMBER */}
        <div className="flex h-12 w-12 min-w-[48px] items-center justify-center rounded-full bg-[#ec008c] text-sm font-black text-white">
          0{i + 1}
        </div>

        {/* TEXT */}
        <p className="text-base md:text-lg font-semibold leading-[1.8] text-black/75">
          {item}
        </p>
      </div>
    ))}
  </div>
</div>

    {/* CURRICULUM */}
{/* CURRICULUM */}
<div className="mt-24">
  {/* TITLE */}
  <div className="max-w-5xl">
    <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
      Curriculum Structure
    </p>

    <div className="mt-6 flex flex-wrap items-end gap-x-5 gap-y-2">
      <h2 className="text-[13vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.9] tracking-[-0.045em]">
        4 Years.
      </h2>

      <h2 className="text-[13vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.9] tracking-[-0.045em] text-[#ec008c]">
        8 Semesters.
      </h2>

      <h2 className="text-[13vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.9] tracking-[-0.045em]">
        One Journey.
      </h2>
    </div>
  </div>

  {/* TIMELINE */}
 {/* TIMELINE */}
{/* ALL SEMESTERS */}
<div className="mt-20 space-y-10">
  {[
    {
      year: "01",
      semester: "Semester 1",
      title: "Foundation",
      subjects: [
        "Graphic Design - Part 1",
        "Type Journey",
        "Introduction to Photography",
        "Digital Imaging - Photoshop",
        "Ideas First",
        "Design Influence",
        "Visual Expression",
        "Introduction to Social Media",
        "Vector Imaging",
        "Creative Communication",
      ],
    },

    {
      year: "01",
      semester: "Semester 2",
      title: "Foundation",
      subjects: [
        "Graphic Design - Part 2",
        "Voice of Type",
        "Experiments in Digital Photography",
        "Editorial Design - InDesign",
        "Ideas Presentation",
        "Style & Expression",
        "Introduction to Art Direction",
        "Digital Imaging - Illustrator",
        "Colour Lab",
        "Introduction to Creative Writing",
      ],
    },

    {
      year: "02",
      semester: "Semester 3",
      title: "Applied Learning",
      subjects: [
        "Introduction to Brand & Branding",
        "UX Design",
        "Video Storytelling",
        "Motion Graphics",
        "Thinking Strategically",
        "Human Science",
        "Types of Advertising",
        "Design Thinking",
        "Workshop - 1",
        "Story Writing",
      ],
    },

    {
      year: "02",
      semester: "Semester 4",
      title: "Applied Learning",
      subjects: [
        "Branded Content",
        "Pop Culture Engineering",
        "Introduction to Interaction Design",
        "Story Boarding",
        "Brand Strategy / Management",
        "Packaging",
        "Workshop - 2",
        "Script Writing",
        "Mini Project - AD / CW",
      ],
    },

    {
      year: "03",
      semester: "Semester 5",
      title: "Concept, Communication & Advertising",
      subjects: [
        "A Brand Called YOU",
        "Digital Campaign - 1",
        "Witty Thinking",
        "Interactive Concepting",
        "Everything is Media",
        "Wordsmithing",
        "Entrepreneurship",
        "Major Project - AD / CW",
      ],
    },

    {
      year: "03",
      semester: "Semester 6",
      title: "Concept, Communication & Advertising",
      subjects: [
        "Social Media",
        "Digital Campaign - 1",
        "Image & Idea",
        "Digital Design",
        "Portfolio Development",
      ],
    },

    {
      year: "04",
      semester: "Semester 7",
      title: "National / International Internships",
      subjects: [
        "100% Guaranteed Internship",
        "Internship In India Or Abroad",
        "4 Internships Across 3 Months Each",
      ],
    },

    {
      year: "04",
      semester: "Semester 8",
      title: "National / International Internships",
      subjects: [
        "100% Guaranteed Internship",
        "Internship In India Or Abroad",
        "4 Internships Across 3 Months Each",
      ],
    },
  ].map((item, i) => (
    <div
      key={i}
      className="group overflow-hidden rounded-[40px] border border-black/10 bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
    >
      <div className="grid lg:grid-cols-[240px_1fr]">
        {/* LEFT */}
        <div className="border-b border-black/10 bg-black p-8 text-white lg:border-b-0 lg:border-r">
          {/* YEAR */}
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
              Year
            </p>

            <h3 className="mt-3 text-[18vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-none tracking-[-0.07em]">
              {item.year}
            </h3>
          </div>

          {/* SEMESTER */}
          <div className="mt-12 border-l-2 border-[#ec008c]/20 pl-5">
            <p className="text-sm uppercase tracking-[0.35em] text-white/50 leading-[1.8]">
              {item.semester}
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="p-8 md:p-10">
          {/* TITLE */}
          <div className="flex flex-col gap-5 border-b border-black/10 pb-7 lg:flex-row lg:items-end lg:justify-between">
            <h3 className="text-3xl md:text-5xl font-black uppercase leading-[0.95] tracking-[-0.05em]">
              {item.title}
            </h3>

            <span className="text-sm uppercase tracking-[0.35em] text-[#ec008c] font-black">
              Curriculum Focus
            </span>
          </div>

          {/* SUBJECTS */}
          <div className="mt-8 flex flex-wrap gap-3">
            {item.subjects.map((subject, idx) => (
              <div
                key={idx}
                className="rounded-full border border-black/10 bg-[#f5f5f5] px-5 py-3 text-sm md:text-base font-semibold tracking-[-0.02em] transition-all duration-300 hover:border-[#ec008c]/30 hover:bg-[#ec008c] hover:text-white"
              >
                {subject}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
</div>
  </div>
</section>

      {/* SECTION TITLE */}
      <section className="pt-10 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-title text-[18vw] md:text-[7vw] font-black uppercase leading-[0.9] tracking-[-0.05em]">
            Choose
          </h2>

          <h2 className="section-title text-[18vw] md:text-[7vw] font-black uppercase leading-[0.9] tracking-[-0.05em] text-[#ec008c]">
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
              className="program-card bg-[#f7f7f7]/80 backdrop-blur-xl rounded-[40px] overflow-hidden shadow-xl border border-black/5"
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
                  <div className="inline-flex items-center gap-2 border border-white/20 bg-[#f7f7f7]/80 backdrop-blur-xl/10 backdrop-blur-md rounded-full px-4 py-2 text-white uppercase tracking-[3px] text-xs">
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
                    <Clock size={18} className="text-[#ec008c]" />

                    <span className="font-medium">{program.duration}</span>
                  </div>

                  <div className="flex items-center gap-2 text-black/60">
                    <BookOpen size={18} className="text-[#ec008c]" />

                    <span className="font-medium">{program.intake}</span>
                  </div>
                </div>

                {/* TOGGLE */}
                <button
                  onClick={() =>
                    setExpandedCard(expandedCard === index ? null : index)
                  }
                  className="mt-8 flex items-center gap-2 text-[#ec008c] uppercase tracking-[2px] font-bold"
                >
                  View Highlights
                  <ChevronDown
                    size={18}
                    className={`transition-all duration-300 ${
                      expandedCard === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* HIGHLIGHTS */}
                {expandedCard === index && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {program.highlights.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 rounded-full bg-[#ec008c]/10 text-[#ec008c] text-sm font-bold"
                      >
                        {item}
                      </span>
                    ))}
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

      {/* CAREER OUTCOMES */}
      <section className="py-32 bg-[#f7f7f7]/80 backdrop-blur-xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-[15vw] md:text-[6vw] font-black uppercase leading-[0.85] tracking-[-0.05em]">
              Career
            </h2>

            <h2 className="text-[15vw] md:text-[6vw] font-black uppercase leading-[0.85] tracking-[-0.05em] text-[#ec008c]">
              Outcomes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-[40px] bg-black text-white p-10">
              <h3 className="text-7xl font-black">95%</h3>
              <p className="mt-4 uppercase tracking-[3px] text-white/60">
                Placement Support
              </p>
            </div>

            <div className="rounded-[40px] bg-[#ec008c] text-white p-10">
              <h3 className="text-7xl font-black">250+</h3>
              <p className="mt-4 uppercase tracking-[3px] text-white/80">
                Hiring Partners
              </p>
            </div>

            <div className="rounded-[40px] bg-black text-white p-10">
              <h3 className="text-7xl font-black">12L</h3>
              <p className="mt-4 uppercase tracking-[3px] text-white/60">
                Highest Package
              </p>
            </div>
          </div>

          <div className="mt-20 overflow-hidden">
            <div className="flex gap-8 whitespace-nowrap animate-marquee">
              {companies.map((company, index) => (
                <div
                  key={index}
                  className="px-8 py-4 rounded-full border border-black/10 bg-[#f5f5f5] text-2xl font-black uppercase"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* CAREER OPPORTUNITIES */}
      <section className="py-32 bg-[#f4f1f1]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <Image
                src="/creative-side.jpg"
                alt="Career"
                width={900}
                height={1000}
                className="rounded-[40px] shadow-2xl object-cover h-[700px]"
              />
            </div>

            <div>
              <p className="uppercase tracking-[4px] text-[#ec008c] font-bold mb-6">
                Career Opportunities
              </p>

              <h2 className="text-[14vw] md:text-[5vw] font-black uppercase leading-[0.85] tracking-[-0.05em]">
                Design Your Future
              </h2>

              <div className="mt-10 grid sm:grid-cols-2 gap-5">
                {careers.map((career, index) => (
                  <div
                    key={index}
                    className="rounded-[30px] bg-[#f7f7f7]/80 backdrop-blur-xl p-6 shadow-lg border border-black/5"
                  >
                    <p className="text-lg font-bold uppercase tracking-[2px]">
                      {career}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-black text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-[15vw] md:text-[6vw] font-black uppercase leading-[0.9] tracking-[-0.05em]">
              Admission
            </h2>

            <h2 className="text-[15vw] md:text-[6vw] font-black uppercase leading-[0.9] tracking-[-0.05em] text-[#ec008c]">
              Process
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              "Apply Online",
              "Portfolio Review",
              "Creative Interview",
              "Confirmation",
              "Join Campus",
            ].map((step, index) => (
              <div
                key={index}
                className="rounded-[35px] border border-white/10 bg-[#f7f7f7]/80 backdrop-blur-xl/5 backdrop-blur-xl p-8"
              >
                <div className="text-6xl font-black text-[#ec008c]">
                  0{index + 1}
                </div>

                <p className="mt-6 text-xl font-bold uppercase leading-snug">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* CTA */}
      <section className="relative py-32 md:py-40 overflow-hidden bg-[#f4f1f1]">
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

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="rounded-[50px] bg-black text-white p-10 md:p-20 overflow-hidden relative shadow-[0_30px_100px_rgba(0,0,0,0.2)]">
            {/* INNER GLOW */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
              <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-[#ec008c] blur-3xl"></div>

              <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#ec008c] blur-3xl"></div>
            </div>

            <div className="relative z-10 text-center">
              <h2 className="text-[16vw] md:text-[7vw] font-black uppercase leading-[0.9] tracking-[-0.05em]">
                Start
              </h2>

              <h2 className="text-[16vw] md:text-[7vw] font-black uppercase leading-[0.9] tracking-[-0.05em] text-[#ec008c]">
                Your Future
              </h2>

              <p className="mt-10 text-lg md:text-xl text-white/60 leading-relaxed max-w-3xl mx-auto">
                Join a global creative ecosystem where education meets
                innovation, collaboration, and industry experience.
              </p>

              <div className="mt-14 flex flex-wrap justify-center gap-5">
                <button className="px-10 py-5 rounded-full bg-[#ec008c] text-white text-lg font-bold uppercase tracking-[2px] hover:scale-105 hover:shadow-[0_0_40px_rgba(236,0,140,0.5)] transition-all duration-300">
                  Apply Now
                </button>

                <button className="px-10 py-5 rounded-full border border-white/10 bg-white/10 backdrop-blur-xl text-white text-lg font-bold uppercase tracking-[2px] hover:bg-white hover:text-black transition-all duration-300">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-6 right-6 z-50">
        <button className="group px-8 py-5 rounded-full bg-[#ec008c] text-white shadow-2xl uppercase tracking-[3px] font-black flex items-center gap-3 hover:scale-105 transition-all duration-300">
          Apply Now
          <ArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
        </button>
      </div>

      <Footer />
    </div>
  );
}
