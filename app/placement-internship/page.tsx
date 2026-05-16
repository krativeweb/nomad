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
  Briefcase,
  Building2,
  Globe2,
  GraduationCap,
  Star,
  Award,
  TrendingUp,
  Users,
  Play,
  CheckCircle2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function PlacementInternshipPage() {
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

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const recruiters = [
    "Google",
    "Netflix",
    "Adobe",
    "Spotify",
    "Meta",
    "Nike",
    "Amazon",
    "Apple",
  ];

  const internships = [
    {
      title: "UI/UX Internship",
      company: "Google",
      duration: "6 Months",
      image: "/internship-1.jpg",
    },
    {
      title: "Motion Graphics Internship",
      company: "Netflix",
      duration: "4 Months",
      image: "/internship-2.jpg",
    },
    {
      title: "Brand Design Internship",
      company: "Nike",
      duration: "5 Months",
      image: "/internship-3.jpg",
    },
    {
      title: "Digital Marketing Internship",
      company: "Spotify",
      duration: "3 Months",
      image: "/internship-4.jpg",
    },
  ];

  return (
    <div className="bg-[#efefef] text-black overflow-x-hidden">
      <Header />

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden pt-28 sm:pt-36 md:pt-44 lg:pt-48 pb-20 sm:pb-24 md:pb-32">
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
        <div className="pointer-events-none absolute top-[8%] left-[-5%] select-none whitespace-nowrap text-[28vw] sm:text-[18vw] md:text-[14vw] lg:text-[10vw] font-black uppercase leading-none tracking-[-0.08em] text-black/[0.03]">
          Placements
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-14 lg:gap-20 items-start">
            {/* LEFT */}
            <div className="relative z-10 w-full max-w-[680px]">
              {/* LABEL */}
              <div className="hero-reveal inline-flex items-center gap-3 border border-black/10 bg-[#f5f5f5] px-4 sm:px-5 py-3 rounded-full mb-6 sm:mb-8">
                <Briefcase size={16} className="text-[#ec008c] shrink-0" />

                <span className="uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[9px] sm:text-[10px] font-black whitespace-nowrap">
                  Placement & Internship
                </span>
              </div>

              {/* HEADING */}
              <div className="space-y-1">
                <h1 className="hero-reveal split-text text-[16vw] sm:text-[11vw] md:text-[7vw] lg:text-[5.8vw] font-black uppercase leading-[0.84] tracking-[-0.055em]">
                  Our Best
                </h1>

                <h1 className="hero-reveal split-text text-[16vw] sm:text-[11vw] md:text-[7vw] lg:text-[5.8vw] font-black uppercase text-[#ec008c] leading-[0.84] tracking-[-0.055em]">
                  Are Working
                </h1>

                <h1 className="hero-reveal split-text text-[16vw] sm:text-[11vw] md:text-[7vw] lg:text-[5.8vw] font-black uppercase leading-[0.84] tracking-[-0.055em]">
                  With The Best
                </h1>
              </div>

              {/* DESCRIPTION */}
              <p className="hero-reveal mt-6 sm:mt-8 max-w-[620px] text-[15px] sm:text-lg md:text-xl leading-[1.9] text-black/70">
                Unlock global career opportunities with top recruiters,
                internships, industry projects, and placement programs designed
                for future innovators.
              </p>

              {/* BUTTONS */}
              <div className="hero-reveal mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">
                <button className="group h-[56px] sm:h-[58px] px-6 sm:px-8 rounded-full bg-black text-white uppercase tracking-[0.22em] sm:tracking-[3px] text-[11px] sm:text-sm font-bold hover:bg-[#ec008c] transition-all duration-500 flex items-center justify-center gap-3">
                  Explore Careers
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-all duration-300" />
                </button>

                <button className="h-[56px] sm:h-[58px] px-6 sm:px-8 rounded-full border border-black/10 bg-[#f5f5f5] text-black uppercase tracking-[0.22em] sm:tracking-[3px] text-[11px] sm:text-sm font-bold hover:bg-black hover:text-white transition-all duration-500">
                  Placement Report
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="hero-image relative overflow-hidden rounded-[32px] sm:rounded-[40px] lg:rounded-[50px] shadow-2xl w-full max-w-[680px]">
                <Image
                  src="/placement-hero.jpg"
                  alt="Placement"
                  width={900}
                  height={1200}
                  priority
                  className="
              w-full
              h-[340px]
              sm:h-[500px]
              md:h-[620px]
              lg:h-[720px]
              object-cover
              grayscale
            "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* FLOATING CARD */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-8 max-w-[220px] sm:max-w-[280px] md:max-w-[300px] rounded-[24px] sm:rounded-[30px] border border-black/5 bg-[#f5f5f5]/90 p-4 sm:p-6 backdrop-blur-xl">
                  <p className="text-[10px] sm:text-xs uppercase tracking-[2px] sm:tracking-[3px] text-black/40 font-bold">
                    Global Recruiters
                  </p>

                  <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl md:text-2xl font-black leading-tight">
                    Connecting students with world-class companies.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL INTERNSHIPS & PLACEMENTS */}
      <section className="relative overflow-hidden bg-[#f8f5f2] py-24 sm:py-28 md:py-36 lg:py-44">
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
        <div className="pointer-events-none absolute top-[8%] left-[-5%] select-none whitespace-nowrap text-[24vw] sm:text-[18vw] md:text-[14vw] lg:text-[10vw] font-black uppercase tracking-[-0.08em] text-black/[0.03]">
          Global
        </div>

        {/* GLOW */}
        <div className="absolute right-[-120px] top-[12%] h-[320px] w-[320px] rounded-full bg-[#ec008c]/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* HERO */}
          <div className="max-w-6xl">
            <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.35em] text-[#ec008c]">
              International & Domestic Placements
            </p>

            <div className="mt-6 flex flex-wrap items-end gap-x-5 gap-y-2">
              <h1 className="text-[15vw] sm:text-[11vw] md:text-[7vw] lg:text-[5.5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-black">
                From India
              </h1>

              <h1 className="text-[15vw] sm:text-[11vw] md:text-[7vw] lg:text-[5.5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-[#ec008c]">
                To The
              </h1>

              <h1 className="text-[15vw] sm:text-[11vw] md:text-[7vw] lg:text-[5.5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-black">
                World.
              </h1>
            </div>

            <p className="mt-8 max-w-5xl text-base sm:text-lg md:text-xl leading-[1.9] text-black/70">
              NoMAD talent is fully equipped with the essential skills needed to
              thrive in the workplace. We take pride in our 100% global and
              national internship program, placing students in some of the most
              prestigious domestic and international companies.
            </p>
          </div>

          {/* COMPANY LOGOS */}
          <div className="mt-20">
            <div className="flex flex-wrap items-end gap-x-5 gap-y-2">
              <h2 className="text-[13vw] sm:text-[9vw] md:text-[6vw] lg:text-[4.5vw] font-black uppercase leading-[0.9] tracking-[-0.06em] text-black">
                Companies
              </h2>

              <h2 className="text-[13vw] sm:text-[9vw] md:text-[6vw] lg:text-[4.5vw] font-black uppercase leading-[0.9] tracking-[-0.06em] text-[#ec008c]">
                Our Students
              </h2>

              <h2 className="text-[13vw] sm:text-[9vw] md:text-[6vw] lg:text-[4.5vw] font-black uppercase leading-[0.9] tracking-[-0.06em] text-black">
                Work With.
              </h2>
            </div>

            {/* LOGO GRID */}
            <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {[
                {
                  name: "Google",
                  logo: "/logos/logo-7.png",
                },

                {
                  name: "Spotify",
                  logo: "/logos/logo-6.png",
                },

                {
                  name: "Disney",
                  logo: "/logos/disney-logo.png",
                },

                {
                  name: "Netflix",
                  logo: "/logos/logo-5.png",
                },

                {
                  name: "Amazon",
                  logo: "/logos/amazon-logo.png",
                },

                {
                  name: "Pepsi",
                  logo: "/logos/logo-14.png",
                },

                {
                  name: "Meta",
                  logo: "/logos/logo-2.png",
                },

                {
                  name: "Apple",
                  logo: "/logos/apple.png",
                },

                {
                  name: "TikTok",
                  logo: "/logos/tiktok_new.png",
                },

                {
                  name: "Ogilvy",
                  logo: "/logos/ogilvy_new.png",
                },

                {
                  name: "BBDO",
                  logo: "/logos/bbdo_new.png",
                },

                {
                  name: "McCann",
                  logo: "/logos/mccann_new.png",
                },

                {
                  name: "Dentsu",
                  logo: "/logos/logo-8.png",
                },

                {
                  name: "WPP",
                  logo: "/logos/logo-9.png",
                },

                {
                  name: "Wieden+Kennedy",
                  logo: "/logos/logo-13.png",
                },

                {
                  name: "Accenture",
                  logo: "/logos/accenture_new.png",
                },

                {
                  name: "WhatsApp",
                  logo: "/logos/whatsapp_new.png",
                },

                {
                  name: "Leo Burnett",
                  logo: "/logos/leo-burnett_new.png",
                },

                {
                  name: "Mother",
                  logo: "/logos/logo-15.png",
                },

                {
                  name: "Coca Cola",
                  logo: "/logos/logo-16.png",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-[24px] border border-black/10 bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#ec008c]/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                >
                  {/* GLOW */}
                  <div className="absolute right-[-30px] top-[-30px] h-[90px] w-[90px] rounded-full bg-[#ec008c]/5 blur-[40px]" />

                  {/* LOGO */}
                  <div className="flex h-[70px] items-center justify-center">
                    <Image
                      src={item.logo}
                      alt={item.name}
                      width={140}
                      height={60}
                      className="h-auto w-[110px] object-contain grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    />
                  </div>

                  {/* NAME */}
                  <div className="mt-4 border-t border-black/5 pt-4 text-center">
                    <h4 className="text-sm sm:text-base font-black uppercase tracking-[-0.03em] text-black transition-all duration-300 group-hover:text-[#ec008c]">
                      {item.name}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WE DON'T PLACE WE LAUNCH */}
      <section className="relative overflow-hidden bg-black py-24 sm:py-28 md:py-36 lg:py-44">
        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
        linear-gradient(to right, white 1px, transparent 1px),
        linear-gradient(to bottom, white 1px, transparent 1px)
      `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* BG TEXT */}
        <div className="pointer-events-none absolute top-[5%] left-[-5%] select-none whitespace-nowrap text-[24vw] sm:text-[18vw] md:text-[14vw] lg:text-[10vw] font-black uppercase tracking-[-0.08em] text-white/[0.03]">
          Launch
        </div>

        {/* GLOW */}
        <div className="absolute right-[-120px] top-[18%] h-[320px] w-[320px] rounded-full bg-[#ec008c]/20 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20 items-start">
            {/* LEFT */}
            <div>
              <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.35em] text-[#ec008c]">
                Career Launchpad
              </p>

              <div className="mt-6 space-y-1">
                <h2 className="text-[15vw] sm:text-[11vw] md:text-[7vw] lg:text-[5.4vw] font-black uppercase leading-[0.84] tracking-[-0.06em] text-white">
                  We Don’t
                </h2>

                <h2 className="text-[15vw] sm:text-[11vw] md:text-[7vw] lg:text-[5.4vw] font-black uppercase leading-[0.84] tracking-[-0.06em] text-[#ec008c]">
                  Place.
                </h2>

                <h2 className="text-[15vw] sm:text-[11vw] md:text-[7vw] lg:text-[5.4vw] font-black uppercase leading-[0.84] tracking-[-0.06em] text-white">
                  We Launch.
                </h2>
              </div>

              {/* SMALL TEXT */}
              <p className="mt-8 max-w-xl text-base sm:text-lg md:text-xl leading-[1.9] text-white/70">
                Real briefs. Real expectations. Real industry exposure. That’s
                how creative careers begin at NoMAD.
              </p>
            </div>

            {/* RIGHT CONTENT CARD */}
            <div className="relative overflow-hidden rounded-[32px] sm:rounded-[40px] border border-white/10 bg-white/5 p-6 sm:p-8 md:p-10 backdrop-blur-xl">
              {/* GLOW */}
              <div className="absolute right-[-40px] top-[-40px] h-[140px] w-[140px] rounded-full bg-[#ec008c]/10 blur-[80px]" />

              {/* CONTENT */}
              <div className="relative z-10 space-y-6 text-base sm:text-lg md:text-xl leading-[1.9] text-white/75">
                <p>
                  At NoMAD, placement isn’t the goal. It’s what happens when the
                  work is good. From day one, students work on real briefs, with
                  real expectations, shaped by how the industry actually works.
                </p>

                <p>
                  Not simulations. Not practice. The real thing. Because in this
                  business, portfolios speak louder than degrees ever will.
                </p>

                <p>
                  By the time they graduate, our students don’t just look ready
                  on paper. They’re already contributing, already thinking,
                  already making work that holds up.
                </p>

                <p>
                  With access to leading global and Indian agencies including
                  Ogilvy, Leo Burnett, DDB and more, opportunities open up. But
                  what truly gets you in is the work you’ve built.
                </p>
              </div>

              {/* BOTTOM TAG */}
              <div className="relative z-10 mt-10 border-t border-white/10 pt-6">
                <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-[#ec008c]">
                  Industry Ready Since Day One
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE NOMAD EXPERIENCE */}
      <section className="relative overflow-hidden bg-[#f8f5f2] pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-14 md:pb-16 lg:pb-20">
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
        <div className="pointer-events-none absolute top-[8%] right-[-5%] select-none whitespace-nowrap text-[24vw] sm:text-[18vw] md:text-[14vw] lg:text-[10vw] font-black uppercase tracking-[-0.08em] text-black/[0.03]">
          Experience
        </div>

        {/* PINK GLOW */}
        <div className="absolute left-[-120px] top-[20%] h-[320px] w-[320px] rounded-full bg-[#ec008c]/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* TOP */}
          <div className="max-w-5xl">
            <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.35em] text-[#ec008c]">
              The NoMAD Experience
            </p>

            <div className="mt-6 flex flex-wrap items-end gap-x-5 gap-y-2">
              <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-black">
                Creativity
              </h2>

              <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-[#ec008c]">
                Beyond
              </h2>

              <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-black">
                Classrooms.
              </h2>
            </div>

            <p className="mt-8 max-w-4xl text-base sm:text-lg md:text-xl leading-[1.9] text-black/70">
              NoMAD blends global exposure, real-world industry learning, and
              mentorship into an experience designed to shape future creative
              leaders.
            </p>
          </div>

          {/* EXPERIENCE GRID */}
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {[
              {
                number: "01",
                title: "International Network",
                description:
                  "Access Miami Ad School's global community spanning 15+ cities, opening doors to international opportunities and collaborations.",
              },

              {
                number: "02",
                title: "Real-World Projects",
                description:
                  "Work on live client briefs from day one. Build a portfolio that reflects actual industry experience, not just classroom exercises.",
              },

              {
                number: "03",
                title: "Portfolio-Based Hiring",
                description:
                  "Graduate with a powerful body of work that speaks for itself — the currency that matters most in creative industries.",
              },

              {
                number: "04",
                title: "Industry Mentorship",
                description:
                  "Learn directly from top creative professionals across India's most respected agencies, studios, and brands.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-[30px] border border-black/10 bg-white p-6 sm:p-8 md:p-10 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#ec008c]/20 hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)]"
              >
                {/* GLOW */}
                <div className="absolute right-[-40px] top-[-40px] h-[140px] w-[140px] rounded-full bg-[#ec008c]/5 blur-[80px]" />

                {/* NUMBER */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-5xl sm:text-6xl md:text-7xl font-black leading-none tracking-[-0.08em] text-black/10">
                    {item.number}
                  </span>

                  <div className="h-12 w-12 rounded-full bg-[#ec008c] flex items-center justify-center text-white text-sm font-black">
                    +
                  </div>
                </div>

                {/* CONTENT */}
                <div className="relative z-10 mt-10">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase leading-[1] tracking-[-0.05em] text-black">
                    {item.title}
                  </h3>

                  <p className="mt-6 text-base sm:text-lg md:text-xl leading-[1.9] text-black/70">
                    {item.description}
                  </p>
                </div>

                {/* BOTTOM LINE */}
                <div className="relative z-10 mt-10 h-[2px] w-16 bg-[#ec008c]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAIL BLAZING ALUMS */}
      <section className="relative overflow-hidden bg-[#f8f5f2] pt-10 sm:pt-12 md:pt-16 lg:pt-20 pb-16 sm:pb-20 md:pb-24 lg:pb-28">
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
        <div className="pointer-events-none absolute top-[5%] left-[-5%] select-none whitespace-nowrap text-[24vw] sm:text-[18vw] md:text-[14vw] lg:text-[10vw] font-black uppercase tracking-[-0.08em] text-black/[0.03]">
          Alumni
        </div>

        {/* PINK GLOW */}
        <div className="absolute right-[-120px] top-[15%] h-[320px] w-[320px] rounded-full bg-[#ec008c]/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* TOP */}
          <div className="max-w-5xl">
            <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.35em] text-[#ec008c]">
              Alumni Network
            </p>

            <div className="mt-6 flex flex-wrap items-end gap-x-5 gap-y-2">
              <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-[#ec008c]">
                Trail
              </h2>

              <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-black">
                Blazing
              </h2>

              <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-black">
                Alums
              </h2>
            </div>

            <p className="mt-8 max-w-4xl text-base sm:text-lg md:text-xl leading-[1.9] text-black/70">
              Meet the NoMAD alumni building impactful careers across global
              agencies, creative studios, streaming platforms, technology
              companies, and brands worldwide.
            </p>
          </div>

          {/* ALUMNI GRID */}
          <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
            {[
              {
                name: "Deep Chhabria",
                company: "Netflix",
                image: "/alums/deep.png",
              },

              {
                name: "Khushali Bhansali",
                company: "Ogilvy",
                image: "/alums/khushali.png",
              },

              {
                name: "Nishita Charat",
                company: "Punt Creative",
                image: "/alums/nishita.png",
              },

              {
                name: "Sudipta Karmarkar",
                company: "Miami Adschool",
                image: "/alums/sudipta.png",
              },

              {
                name: "Arvindh Lochan",
                company: "Indy Lassi Creative",
                image: "/alums/arvindh.png",
              },

              {
                name: "Rohan Mishra",
                company: "FCB Kinnect",
                image: "/alums/rohan.png",
              },

              {
                name: "Hrudika Gariba",
                company: "Netflix",
                image: "/alums/hrudika.png",
              },

              {
                name: "Vaishali Gandhi",
                company: "International Expressive Art Facilitator",
                image: "/alums/vaishali.png",
              },

              {
                name: "Sonica Baptist",
                company: "Salesforce",
                image: "/alums/sonica.png",
              },

              {
                name: "Payal Khandelwal",
                company: "Pixel Whirl",
                image: "/alums/payal.png",
              },

              {
                name: "Shagun Chopra",
                company: "Leo Burnett India",
                image: "/alums/shagun.png",
              },

              {
                name: "Kanchan Bhat",
                company: "Rain Creative",
                image: "/alums/kanchan.png",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group text-center transition-all duration-500 hover:-translate-y-2"
              >
                {/* IMAGE */}
                <div className="relative mx-auto h-[150px] w-[150px] sm:h-[180px] sm:w-[180px] overflow-hidden rounded-full bg-[#ec008c] p-[5px] shadow-[0_20px_60px_rgba(236,0,140,0.15)]">
                  <div className="h-full w-full overflow-hidden rounded-full bg-black">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={400}
                      height={400}
                      className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="mt-5 px-2">
                  <h3 className="text-sm sm:text-base md:text-lg font-black uppercase leading-[1.2] tracking-[-0.03em] text-black">
                    {item.name}
                  </h3>

                  <p className="mt-2 text-[10px] sm:text-xs font-black uppercase tracking-[0.22em] text-[#ec008c] leading-[1.5]">
                    {item.company}
                  </p>
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
