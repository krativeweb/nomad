"use client";

import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

import Header from "@/components/header";
import Footer from "@/components/footer";

import {
  ArrowRight,
  GraduationCap,
  Briefcase,
  Globe2,
  Star,
  Award,
  Calendar,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Play,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function AdmissionsPage() {
  useEffect(() => {
    gsap.fromTo(
      ".hero-reveal",
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 1.1,
        ease: "power4.out",
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

    gsap.utils.toArray(".fade-card").forEach((card: any) => {
      gsap.fromTo(
        card,
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",

          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
        },
      );
    });

    gsap.utils.toArray(".counter").forEach((counter: any) => {
      const target = counter.getAttribute("data-target");

      gsap.fromTo(
        counter,
        { innerText: 0 },
        {
          innerText: target,
          duration: 2,
          snap: { innerText: 1 },

          scrollTrigger: {
            trigger: counter,
            start: "top 90%",
          },
        },
      );
    });

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const programs = [
    {
      title: "UI/UX Design",
      duration: "3 Years",
      eligibility: "10+2",
      image: "/program-1.jpg",
    },
    {
      title: "Animation & VFX",
      duration: "4 Years",
      eligibility: "10+2",
      image: "/program-2.jpg",
    },
    {
      title: "Fashion Design",
      duration: "3 Years",
      eligibility: "10+2",
      image: "/program-3.jpg",
    },
    {
      title: "Digital Marketing",
      duration: "2 Years",
      eligibility: "Graduate",
      image: "/program-4.jpg",
    },
  ];

  const process = [
    "Submit Application",
    "Portfolio Review",
    "Personal Interview",
    "Admission Confirmation",
  ];

  return (
    <div className="bg-[#efefef] text-black overflow-x-hidden">
      <Header />

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden pb-24 md:pb-32">
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

        <div className="absolute top-[10%] left-[-5%] text-[24vw] md:text-[16vw] font-black uppercase text-black/[0.03] leading-none">
          Admissions
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 md:pt-48 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            {/* LEFT */}
            <div>
              <div className="hero-reveal inline-flex items-center gap-3 border border-black/10 bg-[#f5f5f5] px-5 py-3 rounded-full mb-10">
                <GraduationCap size={18} className="text-[#ec008c]" />

                <span className="uppercase tracking-[4px] text-xs font-bold">
                  Admissions Open 2026
                </span>
              </div>

              <div>
                <div className="overflow-hidden pb-4">
                  <h1 className="split-text text-[18vw] sm:text-[14vw] md:text-[9vw] lg:text-[7vw] xl:text-[6vw] font-black uppercase leading-[0.9] tracking-[-0.05em]">
                    Shape
                  </h1>
                </div>

                <div className="overflow-hidden pb-4">
                  <h1 className="split-text text-[18vw] sm:text-[14vw] md:text-[9vw] lg:text-[7vw] xl:text-[6vw] font-black uppercase text-[#ec008c] leading-[0.9] tracking-[-0.05em]">
                    Your
                  </h1>
                </div>

                <div className="overflow-hidden pb-4">
                  <h1 className="split-text text-[18vw] sm:text-[14vw] md:text-[9vw] lg:text-[7vw] xl:text-[6vw] font-black uppercase leading-[0.9] tracking-[-0.05em]">
                    Future
                  </h1>
                </div>
              </div>

              <p className="hero-reveal mt-8 max-w-[650px] text-base sm:text-lg md:text-xl text-black/70 leading-relaxed md:leading-[1.8]">
                Join a global creative community shaping the future of design,
                innovation, business, fashion, animation, and technology.
              </p>

              <div className="hero-reveal mt-10 flex flex-col sm:flex-row gap-4">
                <button className="group h-[58px] px-8 rounded-full bg-black text-white uppercase tracking-[3px] text-sm font-bold hover:bg-[#ec008c] transition-all duration-500 flex items-center justify-center gap-3">
                  Apply Now
                  <ArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
                </button>

                <button className="h-[58px] px-8 rounded-full border border-black/10 bg-[#f5f5f5] text-black uppercase tracking-[3px] text-sm font-bold hover:bg-black hover:text-white transition-all duration-500">
                  Download Prospectus
                </button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative lg:mt-16">
              <div className="absolute -top-6 -right-6 w-full h-full rounded-[50px] bg-[#ec008c]/80"></div>

              <div className="hero-image relative overflow-hidden rounded-[50px]">
                <Image
                  src="/admission-hero.jpg"
                  alt="Admissions"
                  width={900}
                  height={1200}
                  priority
                  className="w-full h-[320px] sm:h-[520px] md:h-[680px] lg:h-[780px] object-cover grayscale"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                <div className="absolute bottom-8 left-8 bg-[#f5f5f5] rounded-[30px] p-6 border border-black/5 max-w-[280px]">
                  <p className="text-xs uppercase tracking-[3px] text-black/40 font-bold">
                    Global Admissions
                  </p>

                  <h3 className="mt-3 text-2xl font-black leading-tight">
                    Empowering creative leaders worldwide.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ADMISSION PROCESS */}

      <section className="relative overflow-hidden bg-black py-12 sm:py-20 md:py-28 lg:py-36">
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

        {/* BACKGROUND TEXT */}
        <div className="pointer-events-none absolute right-[-5%] top-[8%] text-[20vw] font-black uppercase leading-none tracking-[-0.08em] text-white/[0.03]">
          APPLY
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* TOP */}
          <div className="max-w-5xl">
            <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
              Admission Process
            </p>

            {/* HEADING */}
            <div className="mt-6 flex flex-wrap items-end gap-x-5 gap-y-2">
              <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.05em] text-white">
                Apply.
              </h2>

              <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.05em] text-[#ec008c]">
                Create.
              </h2>

              <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.05em] text-white">
                Begin.
              </h2>
            </div>

            {/* DESCRIPTION */}
            <div className="mt-10 max-w-4xl space-y-6">
              <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-[1.6] text-white">
                Our application process is as imaginative as the career you
                envision.
              </p>

              <p className="text-base sm:text-lg md:text-xl leading-[1.9] text-white/70">
                Designed to challenge your intellect, curiosity, and creative
                intuition while encouraging you to push your own boundaries.
              </p>
            </div>
          </div>

          {/* PROCESS FLOW */}
          <div className="mt-16 md:mt-24">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {[
                {
                  no: "01",
                  title: "Complete The Application Form",
                },
                {
                  no: "02",
                  title: "Receive Creative Exercises",
                },
                {
                  no: "03",
                  title: "Submit Your Responses",
                },
                {
                  no: "04",
                  title: "Attend The Interview",
                },
                {
                  no: "05",
                  title: "Receive Admission Letter",
                },
                {
                  no: "06",
                  title: "Confirm Admission By Paying Fees",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#ec008c]/30 hover:bg-white"
                >
                  {/* STEP NUMBER */}
                  <div className="flex items-center justify-between">
                    <span className="text-[15vw] sm:text-[9vw] md:text-[5vw] font-black leading-none tracking-[-0.07em] text-[#ec008c]">
                      {step.no}
                    </span>

                    <div className="h-10 w-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center transition-all duration-500 group-hover:border-black/10 group-hover:bg-black">
                      <span className="text-sm font-black text-white group-hover:text-white">
                        →
                      </span>
                    </div>
                  </div>

                  {/* TITLE */}
                  <div className="mt-10">
                    <h3 className="text-2xl md:text-3xl font-black uppercase leading-[1.1] tracking-[-0.04em] text-white transition-all duration-500 group-hover:text-black">
                      {step.title}
                    </h3>
                  </div>

                  {/* HOVER GLOW */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ec008c]/0 via-[#ec008c]/0 to-[#ec008c]/10 opacity-0 transition-all duration-500 group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 md:mt-20 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            {/* BUTTON */}
            <button className="group inline-flex items-center gap-4 rounded-full bg-[#ec008c] px-8 py-5 text-sm md:text-base font-black uppercase tracking-[0.25em] text-white transition-all duration-500 hover:bg-white hover:text-black">
              Download Application Form
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-500 group-hover:bg-black">
                ↓
              </span>
            </button>

            {/* NOTE */}
            <p className="text-sm md:text-base leading-relaxed text-white/50">
              Admissions are limited and processed on a rolling basis.
            </p>
          </div>
        </div>
      </section>

      {/* FEE STRUCTURE */}
      {/* FEE STRUCTURE */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-18 lg:py-18">
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
          <div className="max-w-5xl">
            <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
              Fee Structure
            </p>

            <div className="mt-6 flex flex-wrap items-end gap-x-5 gap-y-2">
              <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.05em]">
                Invest In
              </h2>

              <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.05em] text-[#ec008c]">
                Your
              </h2>

              <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.05em]">
                Future.
              </h2>
            </div>

            <p className="mt-10 text-lg sm:text-xl md:text-2xl font-semibold leading-[1.6] text-black max-w-4xl">
              A creative education built for industry-ready thinkers,
              strategists, designers, and future creative leaders.
            </p>
          </div>

          {/* MAIN LAYOUT */}
          <div className="mt-16 grid gap-8 xl:grid-cols-[0.85fr_1.15fr]">
            {/* LEFT */}
            <div className="rounded-[32px] border border-black/10 bg-black p-6 md:p-8 text-white">
              <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
                Program Details
              </p>

              <h3 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-[0.95] tracking-[-0.05em]">
                Bachelor’s
                <br />
                Program
              </h3>

              <div className="mt-10 space-y-5">
                {[
                  ["Program", "Advertising & Communication Design"],
                  ["Duration", "4 Years (Full Time)"],
                  ["Affiliated To", "University of Mumbai"],
                  ["Offered By", "NoMAD College of Creative Intelligence"],
                ].map(([label, value], i) => (
                  <div
                    key={i}
                    className="rounded-[22px] border border-white/10 bg-white/5 p-5"
                  >
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                      {label}
                    </p>

                    <p className="mt-3 text-base md:text-lg font-bold leading-[1.5]">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="rounded-[32px] border border-black/10 bg-[#f6f2f4] overflow-hidden">
              {/* HEADER */}
              <div className="border-b border-black/10 px-6 py-6 md:px-8">
                <div className="flex items-end justify-between gap-5">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
                      Tuition Breakdown
                    </p>

                    <h3 className="mt-4 text-3xl md:text-5xl font-black uppercase leading-[0.95] tracking-[-0.05em]">
                      Program Fees
                    </h3>
                  </div>

                  <div className="hidden md:flex h-16 w-16 items-center justify-center rounded-full bg-[#ec008c] text-white text-xl font-black">
                    ₹
                  </div>
                </div>
              </div>

              {/* FEES */}
              <div className="divide-y divide-black/10">
                {[
                  ["Application Fees", "₹ 2,500"],
                  ["Tuition Fee — Year 1", "₹ 4,00,000"],
                  ["Tuition Fee — Year 2", "₹ 4,00,000"],
                  ["Tuition Fee — Year 3", "₹ 4,00,000"],
                  ["Tuition Fee — Year 4", "₹ 4,00,000"],
                ].map(([title, price], i) => (
                  <div
                    key={i}
                    className="group flex flex-col gap-5 px-6 py-6 transition-all duration-500 hover:bg-white sm:flex-row sm:items-center sm:justify-between md:px-8"
                  >
                    <h4 className="text-xl md:text-2xl font-black uppercase leading-[1.1] tracking-[-0.04em]">
                      {title}
                    </h4>

                    <div className="rounded-full border border-black/10 bg-white px-6 py-3 group-hover:border-[#ec008c]/30">
                      <p className="text-xl md:text-3xl font-black tracking-[-0.05em]">
                        {price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* TOTAL */}
              <div className="bg-[#ec008c] px-6 py-8 md:px-8">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.35em] text-white/70 font-black">
                      Total Program Fees
                    </p>

                    <h3 className="mt-4 text-4xl md:text-6xl font-black uppercase leading-none tracking-[-0.06em] text-white">
                      ₹ 16,00,000
                    </h3>
                  </div>

                  <p className="max-w-md text-sm sm:text-base leading-[1.7] text-white/80">
                    Installment options and financial assistance available
                    through partner banks & NBFCs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FOOTNOTE */}
          <div className="mt-10 rounded-[24px] border border-black/10 bg-[#fafafa] p-6 md:p-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
                  Installment Option
                </p>

                <div className="mt-5 space-y-4">
                  {[
                    "50% payable at the time of enrollment",
                    "50% payable mid-semester as per notified dates",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="mt-2 h-2.5 w-2.5 rounded-full bg-[#ec008c]" />

                      <p className="text-base md:text-lg leading-[1.7] text-black/70">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
                  Financial Assistance
                </p>

                <p className="mt-5 text-base md:text-lg leading-[1.9] text-black/70">
                  Financial assistance is available via banks and NBFCs for all
                  programs. Students can explore flexible education loan options
                  based on eligibility and approval criteria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ELIGIBILITY CRITERIA */}
      <section className="relative overflow-hidden bg-white py-14 sm:py-16 md:py-18 lg:py-18">
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
        <div className="pointer-events-none absolute left-[-4%] top-[8%] text-[20vw] font-black uppercase leading-none tracking-[-0.08em] text-black/[0.03]">
          APPLY
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* TOP */}
          <div className="max-w-5xl">
            <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
              Admissions
            </p>

            <div className="mt-6 flex flex-wrap items-end gap-x-5 gap-y-2">
              <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.05em] text-black">
                Eligibility
              </h2>

              <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.05em] text-[#ec008c]">
                Criteria.
              </h2>
            </div>

            <p className="mt-10 max-w-4xl text-lg sm:text-xl md:text-2xl font-semibold leading-[1.6] text-black">
              Built for students, creators, strategists, and curious minds ready
              to shape the future of creativity.
            </p>
          </div>

          {/* LIST */}
          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {[
              "Students who have completed Grade 12 or higher",
              "Individuals with a passion for design, technology, content, strategy, and creativity",
              "Applicants who have finished an undergraduate degree in any field are also welcome",
              "Transfer students from other design, creative, and communication programs may apply as well",
            ].map((item, i) => (
              <div
                key={i}
                className="group flex items-start gap-6 rounded-[28px] border border-black/10 bg-[#fafafa] p-6 md:p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#ec008c]/30 hover:bg-white"
              >
                {/* NUMBER */}
                <div className="flex h-12 w-12 min-w-[48px] items-center justify-center rounded-full bg-[#ec008c] text-sm font-black text-white">
                  0{i + 1}
                </div>

                {/* TEXT */}
                <p className="text-base sm:text-lg md:text-xl font-semibold leading-[1.8] text-black/75 transition-all duration-500 group-hover:text-black">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREATIVE TEST */}
      <section className="relative overflow-hidden bg-[#f6f2f4] py-14 sm:py-16 md:py-20 lg:py-24">
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
        <div className="pointer-events-none absolute right-[-5%] top-[5%] text-[20vw] font-black uppercase leading-none tracking-[-0.08em] text-black/[0.03]">
          CREATE
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* TOP */}
          <div className="max-w-5xl">
            <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
              Admissions Process
            </p>

            <div className="mt-6 flex flex-wrap items-end gap-x-5 gap-y-2">
              <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.05em] text-black">
                Creative
              </h2>

              <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.05em] text-[#ec008c]">
                Test.
              </h2>
            </div>

            <p className="mt-10 max-w-4xl text-lg sm:text-xl md:text-2xl font-semibold leading-[1.6] text-black">
              A process designed to challenge imagination, originality,
              intuition, and creative thinking.
            </p>
          </div>

          {/* MAIN GRID */}
          <div className="mt-14 grid gap-8 xl:grid-cols-[1fr_0.85fr]">
            {/* LEFT */}

            <div className="overflow-hidden rounded-[32px] border border-black/10 bg-[#111111] text-white shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
              {/* TOP */}
              <div className="border-b border-white/10 bg-gradient-to-br from-[#1a1a1a] to-black px-6 py-6 md:px-8">
                <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
                  Creative Exercises
                </p>

                <h3 className="mt-5 text-4xl md:text-6xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-white">
                  Think.
                  <br />
                  Create.
                  <br />
                  Express.
                </h3>
              </div>

              {/* CONTENT */}
              <div className="p-6 md:p-8">
                <p className="text-base sm:text-lg md:text-xl leading-[1.9] text-white/80">
                  The most thrilling aspect of this process lies in the creative
                  exercises.
                </p>

                {/* POINTS */}
                <div className="mt-8 space-y-5">
                  {[
                    "They are engaging and clever.",
                    "Thoughtfully curated for aspiring creatives.",
                    "Students present ideas, originality, and insights.",
                    "Some creative challenges have evolved into impactful campaigns.",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="group rounded-[22px] border border-white/10 bg-white/[0.04] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#ec008c]/30 hover:bg-white/[0.07]"
                    >
                      <div className="flex items-start gap-5">
                        {/* NUMBER */}
                        <div className="flex h-10 w-10 min-w-[40px] items-center justify-center rounded-full bg-[#ec008c] text-xs font-black text-white">
                          0{i + 1}
                        </div>

                        {/* TEXT */}
                        <p className="text-base md:text-lg leading-[1.8] text-white/85">
                          {item}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* EXTRA */}
                <div className="mt-8 rounded-[24px] border border-white/10 bg-white/[0.04] p-6">
                  <p className="text-base sm:text-lg md:text-xl leading-[1.9] text-white/85">
                    Students approach these tasks with their highest level of
                    creativity, presenting ideas and insights to demonstrate
                    their talent, thinking, and unique perspective.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col gap-8">
              {/* PAYMENT */}
              <div className="rounded-[32px] border border-black/10 bg-black p-6 md:p-8 text-white">
                <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
                  Mode Of Fee Payment
                </p>

                <div className="mt-8 grid gap-4">
                  {["Online", "Cheque", "Demand Draft"].map((item, i) => (
                    <div
                      key={i}
                      className="group flex items-center justify-between rounded-[24px] border border-white/10 bg-white/5 px-6 py-6 transition-all duration-500 hover:border-[#ec008c]/30 hover:bg-[#ec008c]"
                    >
                      <h3 className="text-xl md:text-2xl font-black uppercase leading-[1.2] tracking-[-0.04em]">
                        {item}
                      </h3>

                      <span className="text-2xl font-black text-white/30">
                        0{i + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* BROCHURE */}
              <div className="flex-1 rounded-[32px] border border-black/10 bg-white p-6 md:p-8">
                <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
                  Download Brochure
                </p>

                <h3 className="mt-5 text-4xl md:text-5xl font-black uppercase leading-[0.95] tracking-[-0.05em] text-black">
                  Explore
                  <br />
                  The Programs.
                </h3>

                <p className="mt-6 text-base sm:text-lg md:text-xl leading-[1.9] text-black/70">
                  Access complete program details, curriculum structure,
                  admissions process, and fee information.
                </p>

                {/* BUTTON */}
                <button className="group mt-10 inline-flex items-center gap-4 rounded-full bg-black px-8 py-5 text-sm md:text-base font-black uppercase tracking-[0.25em] text-white transition-all duration-500 hover:bg-[#ec008c]">
                  Download
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-500">
                    ↓
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TERMS & CONDITIONS */}
      <section className="relative overflow-hidden bg-white py-14 sm:py-16 md:py-20 lg:py-24">
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
        <div className="pointer-events-none absolute right-[-5%] top-[5%] text-[20vw] font-black uppercase leading-none tracking-[-0.08em] text-black/[0.03]">
          TERMS
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* TOP */}
          <div className="max-w-5xl">
            <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
              Admissions Policy
            </p>

            <div className="mt-6 flex flex-wrap items-end gap-x-5 gap-y-2">
              <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.05em] text-black">
                Terms &
              </h2>

              <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.05em] text-[#ec008c]">
                Conditions.
              </h2>
            </div>

            <p className="mt-10 max-w-4xl text-lg sm:text-xl md:text-2xl font-semibold leading-[1.6] text-black">
              Important information regarding admissions, payments,
              installments, refunds, and academic policies.
            </p>
          </div>

          {/* MAIN CARD */}
          <div className="mt-14 overflow-hidden rounded-[32px] border border-black/10 bg-[#111111] text-white shadow-[0_20px_80px_rgba(0,0,0,0.25)]">
            {/* TOP BAR */}
            <div className="border-b border-white/10 bg-gradient-to-br from-[#1a1a1a] to-black px-6 py-6 md:px-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
                    Official Information
                  </p>

                  <div className="mt-5 flex flex-wrap items-end gap-x-4 gap-y-2">
                    <h3 className="text-4xl md:text-6xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-white">
                      Admissions
                    </h3>

                    <h3 className="text-4xl md:text-6xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-[#ec008c]">
                      Terms.
                    </h3>
                  </div>
                </div>

                <div className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3">
                  <p className="text-sm uppercase tracking-[0.3em] text-white/50">
                    Updated Guidelines
                  </p>
                </div>
              </div>
            </div>

            {/* TERMS GRID */}
            <div className="grid gap-5 p-6 md:p-8 lg:grid-cols-2">
              {[
                "Payment of all fees is completed through official online payment links or instructions mentioned in the offer letter.",
                "The application fee of ₹2,500 is non-refundable under all circumstances.",
                "Registration & Admission Fee is a one-time fee payable during enrollment.",
                "Refunds of Registration & Admission Fees are governed by institutional refund policies.",
                "Semester-wise or quarter-wise tuition fees must be paid as per notified dates.",
                "The first installment of tuition fees must be paid according to the offer letter instructions.",
                "Students using installment plans must pay 50% during enrollment and 50% mid-semester.",
                "Late payments may result in suspension of access to academic resources.",
                "Field trips, materials, and project-related expenses are not included in tuition fees.",
                "GST and applicable government taxes apply as per prevailing norms.",
                "Refund requests are processed according to UGC refund guidelines.",
                "NoMAD College and Miami Ad School reserve the right to revise programs, fees, and policies.",
              ].map((item, i) => (
                <div
                  key={i}
                  className="group rounded-[24px] border border-white/10 bg-white/[0.04] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#ec008c]/30 hover:bg-white/[0.06]"
                >
                  <div className="flex items-start gap-5">
                    {/* NUMBER */}
                    <div className="flex h-10 w-10 min-w-[40px] items-center justify-center rounded-full bg-[#ec008c] text-xs font-black text-white">
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    {/* TEXT */}
                    <p className="text-sm sm:text-base md:text-lg leading-[1.8] text-white/80">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* FOOTER */}
            <div className="border-t border-white/10 bg-black px-6 py-6 md:px-8">
              <div className="grid gap-6 lg:grid-cols-2">
                {/* NOMAD */}
                <div className="rounded-[22px] border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
                    NoMAD College
                  </p>

                  <p className="mt-4 text-base md:text-lg font-semibold text-white/90">
                    www.nomadcollege.in
                  </p>
                </div>

                {/* MIAMI */}
                <div className="rounded-[22px] border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
                    Miami Ad School
                  </p>

                  <p className="mt-4 text-base md:text-lg font-semibold text-white/90">
                    www.miamiadschool.in
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
