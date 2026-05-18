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

  <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 md:pt-44 lg:pt-48 relative z-10">
    
    <div className="grid lg:grid-cols-[1fr_1fr] gap-14 lg:gap-20 items-start">
      
      {/* LEFT */}
      <div className="relative z-10 w-full max-w-[680px]">
        
        {/* LABEL */}
        <div className="hero-reveal inline-flex items-center gap-3 border border-black/10 bg-[#f5f5f5] px-4 py-2 rounded-full mb-6 sm:mb-8">
          
          <Sparkles
            size={15}
            className="text-[#ec008c] shrink-0"
          />

          <span className="uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[9px] sm:text-[10px] font-black whitespace-nowrap">
            Creative-First Learning
          </span>
        </div>

        {/* HEADING */}
        <div className="space-y-1">
          
          <h1 className="hero-reveal split-text text-[16vw] sm:text-[11vw] md:text-[7vw] lg:text-[5.8vw] font-black uppercase leading-[0.84] tracking-[-0.055em]">
            We Make
          </h1>

          <h1 className="hero-reveal split-text text-[16vw] sm:text-[11vw] md:text-[7vw] lg:text-[5.8vw] font-black uppercase leading-[0.84] tracking-[-0.055em] text-[#ec008c]">
            Students
          </h1>

          <h1 className="hero-reveal split-text text-[16vw] sm:text-[11vw] md:text-[7vw] lg:text-[5.8vw] font-black uppercase leading-[0.84] tracking-[-0.055em]">
            World Ready
          </h1>
        </div>

        {/* DESCRIPTION */}
        <p className="hero-reveal mt-6 sm:mt-8 text-[15px] sm:text-lg md:text-xl leading-[1.9] text-black/65 max-w-[560px]">
          Hands-on creative education built around real client projects,
          collaboration, mentorship, and industry experience.
        </p>

        {/* STEPS */}
        <div className="hero-reveal mt-10 sm:mt-12 space-y-4 sm:space-y-5">
          {[
            "Work On Real Client Projects",
            "Collaborate In Teams",
            "Receive Mentorship From Industry Creatives",
            "No Heavy Theory Or Outdated Syllabus",
          ].map((item, i) => (
            <div
              key={i}
              className="group flex items-start sm:items-center gap-4 sm:gap-5 rounded-[22px] sm:rounded-[24px] border border-black/10 bg-white px-4 sm:px-5 py-4 sm:py-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#ec008c]/30"
            >
              
              {/* NUMBER */}
              <div className="flex h-10 w-10 sm:h-11 sm:w-11 min-w-[40px] sm:min-w-[44px] items-center justify-center rounded-full bg-[#ec008c] text-xs sm:text-sm font-black text-white">
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
        <div className="hero-reveal mt-10 sm:mt-12 mb-16 sm:mb-20">
          
          <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
            Locations
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            
            <span className="rounded-full bg-black px-5 py-2 text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-white">
              Mumbai
            </span>

            <span className="rounded-full border border-black/10 bg-white px-5 py-2 text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-black">
              Bangalore
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative flex justify-center lg:justify-end pb-28">

{/* Main Wrapper */}
<div
  className="
  hero-image
    relative
    w-full
    max-w-[340px]
    sm:max-w-[500px]
    md:max-w-[620px]
    lg:max-w-[720px]
    aspect-square
  "
>

  {/* Circle Image */}
  <div
    className="
      w-full
      h-full
      rounded-full
      overflow-hidden
      shadow-[0_25px_80px_rgba(0,0,0,0.18)]
    "
  >

    <Image
      src="/creative-team.jpg"
      alt="Creative Team"
      width={1200}
      height={1200}
      priority
      className="
        w-full
        h-full
        object-cover
        object-center
        grayscale
        rounded-full
        scale-105
        transition-all
        duration-700
        hover:scale-110
        hover:grayscale-0
      "
    />

    {/* Overlay */}
    <div className="absolute inset-0  from-black/30 via-transparent to-transparent" />

  </div>

  {/* Floating Card */}
  <div
    className="
      absolute
      bottom-[-30px]
      left-1/2
      -translate-x-1/2
      w-[82%]
      bg-white
      rounded-[38px]
      px-6
      py-4
      sm:px-8
      sm:py-5
      shadow-[0_15px_40px_rgba(0,0,0,0.18)]
      z-30
    "
  >

    <p
      className="
        text-[8px]
        sm:text-[10px]
        uppercase
        tracking-[0.35em]
        text-gray-400
        font-bold
      "
    >
      Global Creative Network
    </p>

    <h3
      className="
        mt-2
        text-[18px]
        sm:text-[24px]
        md:text-[30px]
        font-black
        leading-[1]
        tracking-[-0.05em]
        text-black
      "
    >
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
                Combining traditional design principles with modern digital
                workflows, this program transforms creative potential into a
                professional voice.
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

      {/* POSTGRADUATE PROGRAM SECTION */}
      <section className="relative overflow-hidden bg-[#f3f3f3] py-5 sm:py-5 md:py-5 lg:py-5">
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

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* TOP CONTENT */}
          <div className="max-w-6xl">
            <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
              Postgraduate Program
            </p>

            {/* HEADING */}
            <div className="mt-6 flex flex-wrap items-end gap-x-5 gap-y-2">
              <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.02em]">
                Your Portfolio
              </h2>

              <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.02em] text-[#ec008c]">
                Is Your Degree
              </h2>
            </div>
          </div>

          {/* MAIN CARD */}
          <div className="mt-14 md:mt-20 overflow-hidden rounded-[28px] md:rounded-[42px] border border-black/10 bg-white shadow-[0_25px_80px_rgba(0,0,0,0.06)]">
            <div className="grid lg:grid-cols-2">
              {/* LEFT SIDE */}
              <div className="min-w-0 border-b border-black/10 lg:border-b-0 lg:border-r">
                {/* IMAGE */}
                <div className="group relative overflow-hidden rounded-[24px]">
  <Image
    src="/creative-side.jpg"
    alt="2 Year PG"
    width={1200}
    height={700}
    className="
      h-[220px] sm:h-[260px] md:h-[320px] lg:h-[360px]
      w-full object-cover
      grayscale
      transition-all duration-700
      group-hover:scale-105
    "
  />

  {/* PINK HOVER OVERLAY */}
  <div
    className="
      absolute inset-0
      bg-[#ec008c]/15
      transition-all duration-700
      group-hover:bg-[#ec008c]/55
      mix-blend-multiply
    "
  />

  {/* TITLE AT BOTTOM */}
  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-8">
    <h2 className="text-[14vw] sm:text-[9vw] md:text-[6vw] lg:text-[4vw] font-black uppercase leading-[0.85] tracking-[-0.03em] text-white">
      2 Year PG
    </h2>
  </div>
</div>

                {/* CONTENT */}
                <div className="p-5 sm:p-7 md:p-10">
                  {/* TITLE */}
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
                      Post Graduate Program
                    </p>

                    <h3 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-black uppercase leading-[0.95] tracking-[-0.05em]">
                      Diploma In
                      <br />
                      Advertising & Media
                    </h3>
                  </div>

                  {/* INFO */}
                  <div className="mt-8 flex flex-col sm:flex-row items-start gap-5 md:gap-6">
                    {/* LOGO */}
                    <div className="w-[92px] rounded-[12px] bg-[#ec008c] p-4 text-white">
                      <p className="text-sm font-black uppercase leading-[1.05]">
                        Miami
                        <br />
                        Ad
                        <br />
                        School
                      </p>
                    </div>

                    {/* TEXT */}
                    <div className="min-w-0 space-y-5">
                      <p className="text-sm sm:text-base md:text-lg leading-[1.9] text-black/75">
                        This is not a traditional postgraduate course. It’s a
                        portfolio-driven program for the next generation of
                        creative professionals.
                      </p>

                      <p className="text-sm sm:text-base md:text-lg leading-[1.9] text-black/75">
                        Students train through live briefs, real projects,
                        global standards, and AI-integrated creative workflows.
                      </p>

                      <p className="text-sm sm:text-base md:text-lg leading-[1.9] text-black/75">
                        Graduate with a portfolio that’s interview-ready,
                        globally relevant, and uniquely yours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="min-w-0 relative bg-[#fafafa] p-5 sm:p-7 md:p-10">
                {/* TITLE */}
                <div className="text-center">
                  <p className="text-[11px] font-black uppercase tracking-[0.35em] text-black">
                    Learning Curriculum
                  </p>

                  <h3 className="mt-5 text-[13vw] sm:text-[8vw] md:text-[5vw] lg:text-[3.5vw] font-black uppercase leading-[0.9] tracking-[-0.02em] text-[#ec008c]">
                    Quarter 01 -
                    <br />
                    Quarter 04
                  </h3>
                </div>

                {/* QUARTERS */}
                <div className="mt-10 md:mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {[
                    {
                      no: "01",
                      title: "Design & Art Direction",
                    },
                    {
                      no: "02",
                      title: "Writing For Brands",
                    },
                    {
                      no: "03",
                      title: "Strategy & Insight",
                    },
                    {
                      no: "04",
                      title: "Digital Marketing & Platform Thinking",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="group rounded-[22px] md:rounded-[26px] border border-black/10 bg-white p-4 md:p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#ec008c]/30"
                    >
                      <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                        {/* NUMBER */}
                        <span className="text-3xl sm:text-4xl md:text-5xl font-black leading-none tracking-[-0.05em] text-[#ec008c]">
                          {item.no}
                        </span>

                        {/* TEXT */}
                        <p className="pt-1 text-base sm:text-lg md:text-xl font-black uppercase leading-[1.2] tracking-[-0.03em]">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* IMAGE */}
{/* IMAGE */}
<div className="group relative mt-10 md:mt-14 overflow-hidden rounded-[24px] md:rounded-[30px]">
  <Image
    src="/d2aefb49-7eb7-4b93-ae14-10d144d3b843.png"
    alt="Students"
    width={900}
    height={500}
    className="
      h-[180px] sm:h-[220px] md:h-[240px]
      w-full object-cover
      grayscale
      transition-all duration-700
      group-hover:scale-105
    "
  />

  {/* Pink Hover Overlay */}
  <div
    className="
      absolute inset-0
      bg-[#ec008c]/0
      transition-all duration-700
      group-hover:bg-[#ec008c]/45
      mix-blend-multiply
    "
  />
</div>

                {/* BOTTOM STRIP */}
                <div className="mt-8 md:mt-10 rounded-[22px] md:rounded-[24px] bg-[#ec008c] px-5 sm:px-6 md:px-8 py-6 md:py-7 text-white">
                  <p className="text-[11px] font-black uppercase tracking-[0.02em] text-white/70">
                    Quarter 05 - Quarter 08
                  </p>

                  <h3 className="mt-3 text-xl sm:text-2xl md:text-4xl font-black uppercase leading-[1.15] tracking-[-0.02em]">
                    Global Exchange &
                    <br />
                    International Internships
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* POST GRADUATE PROGRAM */}
      <section className="relative overflow-hidden bg-[#f3f3f3] py-5 sm:py-5 md:py-5 lg:py-5">
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

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* TOP */}
          <div className="max-w-6xl">
            <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
              Post Graduate Program
            </p>

            <div className="mt-6 flex flex-wrap items-end gap-x-5 gap-y-2">
              <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.05em]">
                Diploma In
              </h2>

              <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.05em] text-[#ec008c]">
                Advertising
              </h2>

              <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.05em]">
                & Media
              </h2>
            </div>

            <p className="mt-10 max-w-5xl text-2xl font-semibold leading-[1.4] tracking-[-0.03em] text-[#ec008c] md:text-4xl">
              Launch your career in the dynamic world of media.
            </p>

            <div className="mt-8 max-w-5xl space-y-6">
              <p className="text-base leading-[1.9] text-black/70 sm:text-lg md:text-xl">
                The 1 Year Diploma in Advertising Media is a career-focused
                program designed to transform your communication passion into a
                strategic profession.
              </p>

              <p className="text-base leading-[1.9] text-black/70 sm:text-lg md:text-xl">
                Learn media planning, digital buying, data analytics, campaign
                strategy, social media systems, and programmatic advertising
                through practical projects and real-world simulations.
              </p>

              <p className="text-base leading-[1.9] text-black/70 sm:text-lg md:text-xl">
                With instruction from industry veterans, the diploma prepares
                students for high-demand roles across the global media and
                advertising landscape.
              </p>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="mt-20 grid items-stretch gap-8 xl:grid-cols-[0.92fr_1.08fr]">
            {/* LEFT SIDE */}
            <div className="flex h-full flex-col rounded-[30px] border border-black/10 bg-white p-5 md:rounded-[40px] sm:p-7 md:p-8">
              {/* LABEL */}
              <div className="flex items-center justify-between gap-5 border-b border-black/10 pb-6">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
                    Why This Program
                  </p>

                  <h3 className="mt-4 text-2xl font-black uppercase leading-[0.95] tracking-[-0.05em] sm:text-3xl md:text-5xl">
                    Career
                    <br />
                    Focused
                  </h3>
                </div>

                <div className="hidden h-16 w-16 items-center justify-center rounded-full bg-[#ec008c] text-xl font-black text-white md:flex">
                  PG
                </div>
              </div>

              {/* FEATURES */}
              <div className="mt-7 space-y-3">
                {[
                  "Collaborate with industry leaders on AI-driven design and digital strategies.",
                  'Engage in "Live Briefs" and simulations to create and optimize campaigns.',
                  "Learn from seasoned creative directors and media strategists.",
                  "Gain skills in the latest technology and data analytics.",
                  "Graduate with a professional portfolio showcasing problem-solving skills.",
                  "Access internships and job placements through strong industry connections.",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group flex items-start gap-4 rounded-[20px] border border-black/10 bg-[#fafafa] px-4 py-4 transition-all duration-500 hover:-translate-y-1 hover:border-[#ec008c]/30 hover:bg-white"
                  >
                    {/* NUMBER */}
                    <div className="flex h-10 w-10 min-w-[40px] items-center justify-center rounded-full bg-[#ec008c] text-xs font-black text-white">
                      0{i + 1}
                    </div>

                    {/* TEXT */}
                    <p className="text-sm font-semibold leading-[1.7] text-black/75 sm:text-[15px] md:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex h-full flex-col overflow-hidden rounded-[30px] border border-black/10 bg-black text-white md:rounded-[40px]">
              {/* TOP */}
              <div className="border-b border-white/10 p-5 sm:p-7 md:p-10">
                <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
                  Learning Curriculum
                </p>

                <div className="mt-5 flex flex-wrap items-end gap-x-4 gap-y-2">
                  <h3 className="text-[13vw] font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-[8vw] md:text-[5vw] lg:text-[3.5vw]">
                    Semester
                  </h3>

                  <h3 className="text-[13vw] font-black uppercase leading-[0.9] tracking-[-0.05em] text-[#ec008c] sm:text-[8vw] md:text-[5vw] lg:text-[3.5vw]">
                    01
                  </h3>
                </div>
              </div>

              {/* SEMESTER 01 */}
              <div className="grid gap-4 px-5 pt-8 pb-8 sm:grid-cols-2 sm:px-7 md:px-8">
                {[
                  "Advertising Concepts & Principles",
                  "Integrated Marketing Communication",
                  "Fundamentals of New Media Design",
                  "Media Planning & Buying",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group rounded-[22px] border border-white/10 bg-white/5 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#ec008c]/30 hover:bg-white hover:text-black"
                  >
                    <div className="flex items-start gap-4">
                      {/* NUMBER */}
                      <span className="text-3xl font-black leading-none tracking-[-0.05em] text-[#ec008c] sm:text-4xl md:text-5xl">
                        0{i + 1}
                      </span>

                      {/* TITLE */}
                      <p className="pt-1 text-base font-black uppercase leading-[1.2] tracking-[-0.03em] sm:text-lg md:text-xl">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* DIVIDER */}
              <div className="px-5 sm:px-7 md:px-8 pt-2 pb-7">
                <div className="h-px w-full bg-white/20 shadow-[0_0_20px_rgba(255,255,255,0.08)]" />
              </div>

              {/* SEMESTER 02 */}
              <div className="bg-black px-5 pt-8 pb-6 sm:px-7 sm:pb-7 md:px-8 md:pb-8">
                {/* TITLE */}
                <div className="flex flex-wrap items-end gap-x-4 gap-y-2">
                  <h3 className="text-[13vw] font-black uppercase leading-[0.9] tracking-[-0.05em] text-white sm:text-[8vw] md:text-[5vw] lg:text-[3.5vw]">
                    Semester
                  </h3>

                  <h3 className="text-[13vw] font-black uppercase leading-[0.9] tracking-[-0.05em] text-[#ec008c] sm:text-[8vw] md:text-[5vw] lg:text-[3.5vw]">
                    02
                  </h3>
                </div>

                {/* COURSES */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "Market Research",
                    "Advertising Agencies",
                    "Public Relations",
                    "Consumer Behavior",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="group rounded-[22px] border border-white/10 bg-white/5 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#ec008c]/30 hover:bg-white hover:text-black"
                    >
                      <div className="flex items-start gap-4">
                        {/* NUMBER */}
                        <span className="text-3xl font-black leading-none tracking-[-0.05em] text-[#ec008c] sm:text-4xl md:text-5xl">
                          0{i + 1}
                        </span>

                        {/* TEXT */}
                        <p className="pt-1 text-base font-black uppercase leading-[1.2] tracking-[-0.03em] text-white transition-colors duration-300 group-hover:text-black sm:text-lg md:text-xl">
                          {item}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAREER ROLES SECTION */}
      <section className="relative overflow-hidden bg-[#f6f2f4] py-16 sm:py-20 md:py-28 lg:py-36">
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
        <div className="pointer-events-none absolute top-[10%] right-[-5%] text-[20vw] font-black uppercase leading-none tracking-[-0.08em] text-black/[0.03]">
          CREATE
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* TOP CONTENT */}
          <div className="max-w-5xl">
            <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
              Career Opportunities
            </p>

            {/* HEADING */}
            <div className="mt-6 flex flex-wrap items-end gap-x-5 gap-y-2">
              <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.05em] text-black">
                Dream It.
              </h2>

              <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.05em] text-[#ec008c]">
                Be It.
              </h2>

              <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.05em] text-black">
                Excel It.
              </h2>
            </div>

            {/* DESCRIPTION */}
            <div className="mt-10 max-w-4xl space-y-6">
              <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-[1.6] text-black">
                NoMAD’s programs prepare students for a range of
                creativity-driven careers across advertising, branding, design,
                strategy, and digital media.
              </p>

              <p className="text-base sm:text-lg md:text-xl leading-[1.9] text-black/70">
                Learn how to channel your creative energy into a professional
                voice that resonates across industries, brands, and global
                audiences.
              </p>
            </div>
          </div>

          {/* CAREER GRID */}
          <div className="mt-16 md:mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Advertising Executive",
              "Brand Strategist",
              "Graphic Designer",
              "Art Director",
              "Creative Director",
              "Content Creator",
              "Communications Specialist",
              "Media Planner",
              "Digital Marketeer",
            ].map((role, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-[30px] border border-black/10 bg-white px-6 py-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#ec008c]/30 hover:bg-[#ec008c]"
              >
                {/* HOVER BG */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ec008c]/0 via-[#ec008c]/0 to-[#ec008c]/10 opacity-0 transition-all duration-500 group-hover:opacity-100" />

                {/* CONTENT */}
                <div className="relative z-10 flex min-h-[120px] items-center justify-center text-center">
                  <h3 className="text-2xl md:text-3xl font-black leading-[1.2] tracking-[-0.04em] text-black transition-all duration-500 group-hover:text-white">
                    {role}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
