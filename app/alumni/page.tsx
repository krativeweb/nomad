"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
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
  Building2,
  Play,
  Award,
  MapPin,
  ExternalLink,
  Trophy,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function AlumniPage() {
  const [visibleCount, setVisibleCount] = useState(4);

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

  const alumni = [
    {
      name: "Ava Thompson",
      role: "Senior UX Designer",
      company: "Google",
      batch: "2021",
      location: "California, USA",
      salary: "$120K",
      award: "Best Product Designer",
      image: "/alumni-1.jpg",
      story: "Leading global digital product experiences.",
    },
    {
      name: "Ethan Walker",
      role: "Creative Director",
      company: "Netflix",
      batch: "2020",
      location: "London, UK",
      salary: "$140K",
      award: "Creative Excellence Award",
      image: "/alumni-2.jpg",
      story: "Building cinematic creative campaigns.",
    },
    {
      name: "Sophia Martin",
      role: "Brand Strategist",
      company: "Nike",
      batch: "2019",
      location: "New York, USA",
      salary: "$110K",
      award: "Global Marketing Award",
      image: "/alumni-3.jpg",
      story: "Driving international branding strategies.",
    },
    {
      name: "Lucas Reed",
      role: "Motion Designer",
      company: "Adobe",
      batch: "2022",
      location: "Toronto, Canada",
      salary: "$95K",
      award: "Animation Leader",
      image: "/alumni-4.jpg",
      story: "Crafting immersive visual storytelling.",
    },
    {
      name: "Olivia James",
      role: "Product Designer",
      company: "Spotify",
      batch: "2021",
      location: "Berlin, Germany",
      salary: "$105K",
      award: "Innovation Award",
      image: "/alumni-5.jpg",
      story: "Designing next-generation music products.",
    },
    {
      name: "Daniel Carter",
      role: "Business Consultant",
      company: "Meta",
      batch: "2018",
      location: "Singapore",
      salary: "$130K",
      award: "Business Growth Award",
      image: "/alumni-6.jpg",
      story: "Scaling global startup ecosystems.",
    },
  ];

  const successStories = [
    {
      name: "Darren D'Costa",
      company: "VMLY&R",
      image: "/success/darren.jpg",
    },
    {
      name: "Vanshika Lakhani",
      company: "BBDO Hong Kong",
      image: "/success/vanshika.jpg",
    },
    {
      name: "Dhanashree Vichare",
      company: "Leo Burnett Orchard",
      image: "/success/dhanashree.jpg",
    },
    {
      name: "Shreya Nair",
      company: "ViralFission",
      image: "/success/shreya.jpg",
    },
    {
      name: "Ria Bangard",
      company: "Moj",
      image: "/success/ria.jpg",
    },
    {
      name: "Shagun Chopra",
      company: "Leo Burnett India",
      image: "/success/shagun.jpg",
    },
    {
      name: "Abhishek Basane",
      company: "Wunderman Thompson",
      image: "/success/abhishek.jpg",
    },
    {
      name: "Revati Menon",
      company: "Ogilvy",
      image: "/success/revati.jpg",
    },
    {
      name: "Siddhant Pawar",
      company: "The Glitch",
      image: "/success/siddhant.jpg",
    },
    {
      name: "Shruti Bhosale",
      company: "McCann",
      image: "/success/shruti.jpg",
    },
    {
      name: "Hrishikesh Pnwar",
      company: "DDB Mudra Group",
      image: "/success/hrishikesh.jpg",
    },
    {
      name: "Anisha Chauhan",
      company: "Dharmaja",
      image: "/success/anisha.jpg",
    },
    {
      name: "Masumi Shah",
      company: "360i",
      image: "/success/masumi.jpg",
    },
    {
      name: "Sahil Kumar",
      company: "SocialVocal",
      image: "/success/sahil.jpg",
    },
    {
      name: "Mamta Velle",
      company: "École Intuit Lab",
      image: "/success/mamta.jpg",
    },
    {
      name: "Hriduka Gariba",
      company: "Netflix",
      image: "/success/hriduka.jpg",
    },
    {
      name: "Rahi Kulkarni",
      company: "HyphenBrands",
      image: "/success/rahi.jpg",
    },
    {
      name: "Alivia Biswas",
      company: "Indian Institute of Management",
      image: "/success/alivia.jpg",
    },
    {
      name: "Kabir Refrn",
      company: "Alt X",
      image: "/success/kabir.jpg",
    },
    {
      name: "Yash Kulshresth",
      company: "Atom Network",
      image: "/success/yash.jpg",
    },
    {
      name: "Yashika Punjabee",
      company: "No Nasties",
      image: "/success/yashika.jpg",
    },
    {
      name: "Manishaa Kamble",
      company: "Raffles Design",
      image: "/success/manishaa.jpg",
    },
    {
      name: "Nisha Solkar",
      company: "Miami Adschool",
      image: "/success/nisha.jpg",
    },
    {
      name: "Nikhil Choudhary",
      company: "Blank The Agency",
      image: "/success/nikhil.jpg",
    },
    {
      name: "Uiren Thakur",
      company: "Gresham Global",
      image: "/success/uiren.jpg",
    },
    {
      name: "Khushali Bransali",
      company: "Ogilvy",
      image: "/success/khushali.jpg",
    },
    {
      name: "Nishita Charat",
      company: "Punt Creative",
      image: "/success/nishita.jpg",
    },
    {
      name: "Aman Ali Malik",
      company: "Atom Network",
      image: "/success/aman.jpg",
    },
    {
      name: "Abhishek Misra",
      company: "Country Head",
      image: "/success/misra.jpg",
    },
    {
      name: "Dhviti Patel",
      company: "NABA",
      image: "/success/dhviti.jpg",
    },
    {
      name: "Sudipta Karmakar",
      company: "Miami Adschool",
      image: "/success/sudipta.jpg",
    },
    {
      name: "Arvindh Lochan",
      company: "IndyLassi Creative",
      image: "/success/arvindh.jpg",
    },
    {
      name: "Rohan Mishra",
      company: "FCB Kinnect",
      image: "/success/rohan.jpg",
    },
    {
      name: "Poorva Sawant",
      company: "VML",
      image: "/success/poorva.jpg",
    },
    {
      name: "Imtiyaz Shaikh",
      company: "Miami Adschool",
      image: "/success/imtiyaz.jpg",
    },
    {
      name: "Shreya Shinde",
      company: "DDB Mudra Group",
      image: "/success/shreya2.jpg",
    },
    {
      name: "Meena Arora",
      company: "Miami Adschool",
      image: "/success/meena.jpg",
    },
    {
      name: "Vaishali Gandhi",
      company: "International Expressive Art Facilitator",
      image: "/success/vaishali.jpg",
    },
    {
      name: "Sonca Baptist",
      company: "Salesforce",
      image: "/success/sonca.jpg",
    },
    {
      name: "Payal Khandelwal",
      company: "Pixel Whirl",
      image: "/success/payal.jpg",
    },
    {
      name: "Rishikaa Nair",
      company: "BBDO Hong Kong",
      image: "/success/rishikaa.jpg",
    },
    {
      name: "Kanchi Bhat",
      company: "Rain Creative",
      image: "/success/kanchi.jpg",
    },
  ];

  const visibleAlumni = alumni.slice(0, visibleCount);

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
          Alumni
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-14 lg:gap-20 items-start">
            {/* LEFT */}
            <div className="relative z-10 w-full max-w-[680px]">
              {/* LABEL */}
              <div className="hero-reveal inline-flex items-center gap-3 border border-black/10 bg-[#f5f5f5] px-4 sm:px-5 py-3 rounded-full mb-6 sm:mb-8">
                <GraduationCap size={16} className="text-[#ec008c] shrink-0" />

                <span className="uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[9px] sm:text-[10px] font-black whitespace-nowrap">
                  Global Alumni Network
                </span>
              </div>

              {/* HEADING */}

              <div className="space-y-1">
                <h1 className="hero-reveal split-text text-[16vw] sm:text-[11vw] md:text-[7vw] lg:text-[5.8vw] font-black uppercase leading-[0.84] tracking-[-0.055em] text-black">
                  Creative
                </h1>

                <h1 className="hero-reveal split-text text-[16vw] sm:text-[11vw] md:text-[7vw] lg:text-[5.8vw] font-black uppercase leading-[0.84] tracking-[-0.055em] text-[#ec008c]">
                  Success
                </h1>

                <h1 className="hero-reveal split-text text-[16vw] sm:text-[11vw] md:text-[7vw] lg:text-[5.8vw] font-black uppercase leading-[0.84] tracking-[-0.055em] text-black">
                  Stories
                </h1>
              </div>

              {/* DESCRIPTION */}
              <p className="hero-reveal mt-6 sm:mt-8 max-w-[620px] text-[15px] sm:text-lg md:text-xl leading-[1.9] text-black/70">
                Our alumni are transforming industries worldwide through
                innovation, creativity, entrepreneurship, and leadership.
              </p>

              {/* BUTTONS */}
              <div className="hero-reveal mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">
                <button className="group h-[56px] sm:h-[58px] px-6 sm:px-8 rounded-full bg-black text-white uppercase tracking-[0.22em] sm:tracking-[3px] text-[11px] sm:text-sm font-bold hover:bg-[#ec008c] transition-all duration-500 flex items-center justify-center gap-3">
                  Explore Alumni
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-all duration-300" />
                </button>

                <button className="h-[56px] sm:h-[58px] px-6 sm:px-8 rounded-full border border-black/10 bg-[#f5f5f5] text-black uppercase tracking-[0.22em] sm:tracking-[3px] text-[11px] sm:text-sm font-bold hover:bg-black hover:text-white transition-all duration-500">
                  Watch Stories
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="hero-image relative overflow-hidden rounded-[32px] sm:rounded-[40px] lg:rounded-[50px] shadow-2xl w-full max-w-[680px]">
                <Image
                  src="/alumni-hero.jpg"
                  alt="Alumni"
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
                    Alumni Worldwide
                  </p>

                  <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl md:text-2xl font-black leading-tight">
                    Inspiring future leaders globally.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE NoMAD ADVANTAGE */}
      <section className="relative overflow-hidden bg-black py-24 sm:py-28 md:py-36 lg:py-44 text-white">
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
        <div className="pointer-events-none absolute top-[5%] right-[-5%] select-none whitespace-nowrap text-[26vw] sm:text-[18vw] md:text-[14vw] lg:text-[10vw] font-black uppercase leading-none tracking-[-0.08em] text-white/[0.03]">
          Advantage
        </div>

        {/* GLOW */}
        <div className="absolute left-[-120px] top-[15%] h-[320px] w-[320px] rounded-full bg-[#ec008c]/20 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* TOP */}
          <div className="max-w-5xl">
            <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.35em] text-[#ec008c]">
              The NoMAD Advantage
            </p>

            {/* HEADING */}
            <div className="mt-6 flex flex-wrap items-end gap-x-5 gap-y-2">
              <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-white">
                Stay
              </h2>

              <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-[#ec008c]">
                Fearless.
              </h2>

              <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-white">
                Stay
              </h2>

              <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-[#ec008c]">
                NoMAD.
              </h2>
            </div>

            {/* DESCRIPTION */}
            <div className="mt-8 max-w-4xl space-y-5">
              <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-[1.7] text-white">
                A future-focused creative ecosystem designed to shape
                innovators, storytellers, strategists, and entrepreneurs.
              </p>

              <p className="text-[15px] sm:text-lg md:text-xl leading-[1.9] text-white/70">
                NoMAD combines academic excellence with real-world industry
                exposure, global opportunities, advanced technology,
                entrepreneurial thinking, and immersive creative learning.
              </p>
            </div>
          </div>

          {/* ADVANTAGE GRID */}
          <div className="mt-16 md:mt-20 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                number: "01",
                title: "Innovative Curriculum",
                desc: "Combines real-world applications with academic theory and industry-driven learning.",
              },

              {
                number: "02",
                title: "Industry-First Faculty",
                desc: "Strong industry connections provide internships, mentorship, and career opportunities.",
              },

              {
                number: "03",
                title: "Entrepreneurial Mindset",
                desc: "Develop essential leadership and innovation skills for startups and personal growth.",
              },

              {
                number: "04",
                title: "Global Internships",
                desc: "Gain exposure through diverse communities and prestigious global brands.",
              },

              {
                number: "05",
                title: "State-of-the-Art Facilities",
                desc: "AI-first studios, advanced technology, and modern creative learning resources.",
              },

              {
                number: "06",
                title: "Personalized Learning",
                desc: "One-on-one mentorship, tailored guidance, and direct faculty interaction.",
              },

              {
                number: "07",
                title: "Hands-On Experience",
                desc: "Engage directly with real-world creative industry dynamics and live projects.",
              },

              {
                number: "08",
                title: "Worldwide Recognition",
                desc: "Students secure positions with leading global companies and earn international accolades.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
            group
            relative
            overflow-hidden
            rounded-[28px]
            border
            border-white/10
            bg-white/5
            p-6
            sm:p-7
            backdrop-blur-xl
            transition-all
            duration-500
            hover:-translate-y-2
            hover:bg-white/10
          "
              >
                {/* NUMBER */}
                <div className="text-[12vw] sm:text-[6vw] lg:text-[4vw] font-black leading-none tracking-[-0.06em] text-white/10 transition-all duration-500 group-hover:text-[#ec008c]/20">
                  {item.number}
                </div>

                {/* CONTENT */}
                <div className="relative z-10 mt-6">
                  <h3 className="text-xl sm:text-2xl font-black uppercase leading-[1.2] tracking-[-0.04em] text-white">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-sm sm:text-base leading-[1.9] text-white/70">
                    {item.desc}
                  </p>
                </div>

                {/* GLOW */}
                <div className="absolute bottom-[-60px] right-[-60px] h-[140px] w-[140px] rounded-full bg-[#ec008c]/10 blur-[60px]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALUMNI LAURELS SECTION */}
      <section className="relative overflow-hidden bg-[#d89ac0] py-24 sm:py-28 md:py-36 lg:py-44">
        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
        linear-gradient(to right, black 1px, transparent 1px),
        linear-gradient(to bottom, black 1px, transparent 1px)
      `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* BG TEXT */}
        <div className="pointer-events-none absolute top-[5%] right-[-5%] select-none whitespace-nowrap text-[24vw] sm:text-[18vw] md:text-[14vw] lg:text-[10vw] font-black uppercase leading-none tracking-[-0.08em] text-black/[0.03]">
          Laurels
        </div>

        {/* GLOW */}
        <div className="absolute left-[-100px] top-[15%] h-[260px] w-[260px] rounded-full bg-[#ec008c]/20 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* TOP CONTENT */}
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            {/* LEFT */}
            <div className="max-w-[680px]">
              {/* LABEL */}
              <div className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/40 px-5 py-3 backdrop-blur-xl">
                <Trophy size={16} className="text-[#ec008c]" />

                <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.35em] text-black">
                  Alumni Recognition
                </span>
              </div>

              {/* HEADING */}
              <div className="mt-8">
                <h2 className="text-[16vw] sm:text-[11vw] md:text-[7vw] lg:text-[5.8vw] font-black uppercase leading-[0.84] tracking-[-0.055em] text-white">
                  Alumni
                </h2>

                <h2 className="text-[16vw] sm:text-[11vw] md:text-[7vw] lg:text-[5.8vw] font-black uppercase leading-[0.84] tracking-[-0.055em] text-black">
                  Laurels
                </h2>
              </div>

              {/* DESCRIPTION */}
              <div className="mt-8 space-y-5">
                <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-[1.7] text-black">
                  Our alumni have been recognized across leading global and
                  national creative platforms.
                </p>

                <p className="text-[15px] sm:text-lg md:text-xl leading-[1.9] text-black/70">
                  From Cannes Lions and Clio Awards to D&AD and One Show, NoMAD
                  graduates continue to shape award-winning campaigns,
                  breakthrough ideas, and globally celebrated creative work.
                </p>
              </div>

              {/* STATS */}
              <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3">
                {[
                  {
                    number: "100+",
                    label: "Award Wins",
                  },

                  {
                    number: "40+",
                    label: "Global Agencies",
                  },

                  {
                    number: "20+",
                    label: "Creative Platforms",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-[24px] border border-black/10 bg-white/40 p-5 backdrop-blur-xl"
                  >
                    <h3 className="text-3xl sm:text-4xl font-black leading-none tracking-[-0.05em] text-[#ec008c]">
                      {item.number}
                    </h3>

                    <p className="mt-3 text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-black/70">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT VISUAL */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[760px]">
                {/* MAIN IMAGE */}
                <div className="relative overflow-hidden rounded-[35px] sm:rounded-[45px] lg:rounded-[55px] border border-black/10 shadow-[0_30px_100px_rgba(0,0,0,0.15)]">
                  <Image
                    src="/alumni-laurels.jpg"
                    alt="Alumni Laurels"
                    width={1200}
                    height={1600}
                    className="
                w-full
                h-[420px]
                sm:h-[580px]
                md:h-[720px]
                lg:h-[860px]
                object-cover
              "
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* FLOATING BADGE */}
                <div className="absolute -bottom-6 left-6 sm:left-10 rounded-[24px] border border-black/10 bg-white/90 p-5 sm:p-6 backdrop-blur-xl shadow-2xl">
                  <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.35em] text-[#ec008c]">
                    Global Recognition
                  </p>

                  <h3 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-black leading-[1.1] tracking-[-0.05em] text-black">
                    Award-Winning
                    <br />
                    Alumni Network
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM NOTE */}
          <div className="mt-20 text-center">
            <p className="text-sm sm:text-base md:text-lg leading-[1.9] text-black/70 max-w-4xl mx-auto">
              Many NoMAD alumni contribute to globally awarded campaigns and
              innovative creative work across leading agencies, studios, brands,
              and media platforms worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* VOICES OF SUCCESS */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-28 md:py-36 lg:py-44">
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
        <div className="pointer-events-none absolute top-[8%] left-[-5%] select-none whitespace-nowrap text-[26vw] sm:text-[18vw] md:text-[14vw] lg:text-[10vw] font-black uppercase leading-none tracking-[-0.08em] text-black/[0.03]">
          Success
        </div>

        {/* PINK GLOW */}
        <div className="absolute right-[-120px] top-[20%] h-[320px] w-[320px] rounded-full bg-[#ec008c]/15 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            {/* LEFT */}
            <div className="max-w-[720px]">
              {/* LABEL */}
              <div className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-[#f5f5f5] px-5 py-3">
                <Star size={16} className="text-[#ec008c]" />

                <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.35em] text-black">
                  Voices Of Success
                </span>
              </div>

              {/* HEADING */}
              <div className="mt-8">
                <h2 className="text-[16vw] sm:text-[11vw] md:text-[7vw] lg:text-[5.8vw] font-black uppercase leading-[0.84] tracking-[-0.055em] text-black">
                  Alumni
                </h2>

                <h2 className="text-[16vw] sm:text-[11vw] md:text-[7vw] lg:text-[5.8vw] font-black uppercase leading-[0.84] tracking-[-0.055em] text-[#ec008c]">
                  Shape
                </h2>

                <h2 className="text-[16vw] sm:text-[11vw] md:text-[7vw] lg:text-[5.8vw] font-black uppercase leading-[0.84] tracking-[-0.055em] text-black">
                  The Industry.
                </h2>
              </div>

              {/* QUOTE */}
              <div className="mt-10 rounded-[28px] border border-black/10 bg-black p-6 sm:p-8 md:p-10">
                <p className="text-xl sm:text-2xl md:text-3xl font-black uppercase leading-[1.4] tracking-[-0.04em] text-white">
                  “Our alumni don’t just join the industry, they shape it.”
                </p>
              </div>

              {/* DESCRIPTION */}
              <div className="mt-10 space-y-6">
                <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-[1.7] text-black">
                  At NoMAD, with Miami Ad School, our alumni are not just
                  outcomes. They’re proof.
                </p>

                <p className="text-[15px] sm:text-lg md:text-xl leading-[1.9] text-black/70">
                  Proof of what happens when learning mirrors the real world.
                  Proof of what strong portfolios can do. Our alumni work across
                  top agencies, brands, studios, and platforms globally.
                </p>

                <p className="text-[15px] sm:text-lg md:text-xl leading-[1.9] text-black/70">
                  From day one, students are trained on real briefs, real
                  expectations, and real creative challenges. So when they enter
                  the industry, they don’t arrive as beginners — they arrive
                  with work.
                </p>

                <p className="text-[15px] sm:text-lg md:text-xl leading-[1.9] text-black/70">
                  As they grow, they continue shaping the future of creativity
                  by mentoring, collaborating, hiring, and inspiring the next
                  generation of creators.
                </p>
              </div>

              {/* BUTTONS */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button className="group h-[56px] sm:h-[58px] px-8 rounded-full bg-[#ec008c] text-white text-[11px] sm:text-sm font-black uppercase tracking-[0.25em] flex items-center justify-center gap-3 hover:bg-black transition-all duration-500">
                  Explore Alumni
                  <ArrowRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
                </button>

                <button className="h-[56px] sm:h-[58px] px-8 rounded-full border border-black/10 bg-[#f5f5f5] text-black text-[11px] sm:text-sm font-black uppercase tracking-[0.25em] hover:bg-black hover:text-white transition-all duration-500">
                  View Success Stories
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[720px] overflow-hidden rounded-[35px] sm:rounded-[45px] lg:rounded-[55px] border border-black/10 shadow-[0_30px_100px_rgba(0,0,0,0.12)]">
                <Image
                  src="/alumni-success.jpg"
                  alt="Voices of Success"
                  width={1200}
                  height={1600}
                  className="
              w-full
              h-[380px]
              sm:h-[520px]
              md:h-[680px]
              lg:h-[820px]
              object-cover
              grayscale
            "
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* FLOATING CARD */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 md:bottom-8 md:left-8 md:right-8">
                  <div className="rounded-[24px] sm:rounded-[30px] border border-white/10 bg-black/40 p-5 sm:p-6 md:p-8 backdrop-blur-xl">
                    <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
                      Global Alumni Network
                    </p>

                    <h3 className="mt-4 text-[9vw] sm:text-5xl md:text-6xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-white">
                      Creativity
                      <br />
                      That
                      <br />
                      Leads.
                    </h3>

                    <p className="mt-5 max-w-[480px] text-sm sm:text-base md:text-lg leading-[1.8] text-white/75">
                      From agencies and brands to startups and studios, NoMAD
                      alumni continue shaping the future of creativity
                      worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
        <div className="pointer-events-none absolute top-[5%] left-[-5%] select-none whitespace-nowrap text-[24vw] sm:text-[18vw] md:text-[14vw] lg:text-[10vw] font-black uppercase tracking-[-0.08em] text-black/[0.03]">
          Success
        </div>

        {/* PINK GLOW */}
        <div className="absolute right-[-120px] top-[18%] h-[320px] w-[320px] rounded-full bg-[#ec008c]/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* TOP */}
          <div className="max-w-4xl">
            <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.35em] text-[#ec008c]">
              Success Stories
            </p>

            <div className="mt-6 flex flex-wrap items-end gap-x-5 gap-y-2">
              <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-black">
                Creative
              </h2>

              <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-[#ec008c]">
                Success
              </h2>

              <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-black">
                Stories
              </h2>
            </div>

            <p className="mt-8 max-w-3xl text-base sm:text-lg md:text-xl leading-[1.9] text-black/70">
              Meet the NoMAD alumni creating impact across global agencies,
              brands, creative studios, media platforms, and startups worldwide.
            </p>
          </div>

          {/* GRID */}
          <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 sm:gap-x-8 sm:gap-y-12">
            {successStories.map((item, i) => (
              <div
                key={i}
                className="group text-center transition-all duration-500 hover:-translate-y-2"
              >
                {/* IMAGE */}
                <div className="relative mx-auto h-[110px] w-[110px] sm:h-[130px] sm:w-[130px] overflow-hidden rounded-full bg-[#ec008c] p-[4px] shadow-lg transition-all duration-500 group-hover:scale-105">
                  <div className="h-full w-full overflow-hidden rounded-full bg-black">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={300}
                      height={300}
                      className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="mt-5 px-2">
                  <h3 className="text-sm sm:text-base font-black uppercase leading-[1.3] tracking-[-0.03em] text-black">
                    {item.name}
                  </h3>

                  <p className="mt-2 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-[#ec008c] leading-[1.5]">
                    {item.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALUMNI & INDUSTRY SPEAK */}
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
        <div className="pointer-events-none absolute top-[5%] left-[-5%] select-none whitespace-nowrap text-[24vw] sm:text-[18vw] md:text-[14vw] lg:text-[10vw] font-black uppercase tracking-[-0.08em] text-black/[0.03]">
          Alumni
        </div>

        {/* GLOW */}
        <div className="absolute right-[-120px] top-[18%] h-[320px] w-[320px] rounded-full bg-[#ec008c]/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* TOP */}
          <div className="max-w-5xl">
            <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.35em] text-[#ec008c]">
              Alumni Speak
            </p>

            <div className="mt-6 flex flex-wrap items-end gap-x-5 gap-y-2">
              <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-black">
                Voices
              </h2>

              <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-[#ec008c]">
                That
              </h2>

              <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-black">
                Inspire.
              </h2>
            </div>

            <p className="mt-8 max-w-4xl text-base sm:text-lg md:text-xl leading-[1.9] text-black/70">
              They were once in your seat. Today, NoMAD alumni are shaping
              global agencies, brands, studios, and creative platforms across
              the world.
            </p>
          </div>

          {/* ALUMNI TESTIMONIALS */}
          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {[
              {
                image: "/success/khushali.jpg",
                quote:
                  "NoMAD didn't just teach me how to make ads. It taught me how to think. That's the skill that has stayed with me through every job, every brief, every challenge.",
                name: "Khushali Bhansali",
                role: "Ogilvy India",
              },

              {
                image: "/success/rishikaa.jpg",
                quote:
                  "The internship I got through NoMAD opened every door that followed. I walked into that agency with a portfolio that held up — and that confidence came from the work I did here.",
                name: "Rishikaa Nair",
                role: "BBDO Hong Kong",
              },

              {
                image: "/success/uiren.jpg",
                quote:
                  "I came in not knowing if I was creative enough. I left knowing I had a voice. NoMAD finds what's unique about the way you think and builds on it.",
                name: "Juben Thakur",
                role: "Gresham Global",
              },

              {
                image: "/success/aman.jpg",
                quote:
                  "The global internship changed my life. I worked at an agency in a city I'd never been to, on briefs I never imagined I'd get.",
                name: "Aman Anil Malik",
                role: "Atom Network",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-[30px] border border-black/10 bg-white p-6 sm:p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)]"
              >
                {/* TOP */}
                <div className="flex items-center gap-5">
                  {/* IMAGE */}
                  <div className="relative h-[90px] w-[90px] overflow-hidden rounded-full bg-[#ec008c] p-[3px] shrink-0">
                    <div className="h-full w-full overflow-hidden rounded-full">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={300}
                        height={300}
                        className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                      />
                    </div>
                  </div>

                  {/* INFO */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black uppercase leading-[1.1] tracking-[-0.04em] text-black">
                      {item.name}
                    </h3>

                    <p className="mt-2 text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-[#ec008c]">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* QUOTE */}
                <div className="mt-8 border-l-[4px] border-[#ec008c] pl-5">
                  <p className="text-base sm:text-lg md:text-xl leading-[1.9] text-black/70">
                    “{item.quote}”
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-28">
            {/* TOP */}
            <div className="max-w-5xl">
              <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.35em] text-[#ec008c]">
                Industry Speak
              </p>

              <div className="mt-6 flex flex-wrap items-end gap-x-5 gap-y-2">
                <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-black">
                  Trusted
                </h2>

                <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-[#ec008c]">
                  By
                </h2>

                <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-black">
                  Industry.
                </h2>
              </div>

              <p className="mt-8 max-w-4xl text-base sm:text-lg md:text-xl leading-[1.9] text-black/70">
                Hiring managers, Creative Directors, and agency leaders
                consistently return to NoMAD for talent that is industry-ready
                from day one.
              </p>
            </div>

            {/* INDUSTRY GRID */}
            <div className="mt-16 grid gap-6 md:grid-cols-2">
              {[
                {
                  image: "/industry/suramanveshwar.jpg",
                  quote:
                    "When a NoMAD student walks in for an internship, you can tell immediately. There's a confidence in their work and a clarity in how they present it.",
                  name: "S. Suramanveshwar",
                  role: "Apac. MullenLowe Group",
                },

                {
                  image: "/industry/suraja-kishore.jpg",
                  quote:
                    "We've hired multiple NoMAD graduates over the years and the consistency in quality is remarkable. They've been trained to think creatively under pressure.",
                  name: "Suraja Kishore",
                  role: "Former COO, BBDO India",
                },

                {
                  image: "/industry/sakshi.jpg",
                  quote:
                    "The portfolios coming out of NoMAD are genuinely competitive at an international level. These students aren't just India-ready — they're world-ready.",
                  name: "Sakshi Choudhary",
                  role: "Creative Director, Ogilvy Chicago",
                },

                {
                  image: "/industry/ishan.jpg",
                  quote:
                    "What sets NoMAD students apart is that they've already worked on real briefs. They're not learning on your time — they're contributing from the start.",
                  name: "Ishan Mehta",
                  role: "Senior Creative Director, L&K Saatchi & Saatchi",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-[30px] border border-black/10 bg-white p-6 sm:p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)]"
                >
                  {/* TOP */}
                  <div className="flex items-center gap-5">
                    {/* IMAGE */}
                    <div className="relative h-[90px] w-[90px] overflow-hidden rounded-full bg-[#ec008c] p-[3px] shrink-0">
                      <div className="h-full w-full overflow-hidden rounded-full">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={300}
                          height={300}
                          className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                        />
                      </div>
                    </div>

                    {/* INFO */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black uppercase leading-[1.1] tracking-[-0.04em] text-black">
                        {item.name}
                      </h3>

                      <p className="mt-2 text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-[#ec008c]">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  {/* QUOTE */}
                  <div className="mt-8 border-l-[4px] border-[#ec008c] pl-5">
                    <p className="text-base sm:text-lg md:text-xl leading-[1.9] text-black/75">
                      “{item.quote}”
                    </p>
                  </div>

                  {/* DECOR */}
                  <div className="absolute bottom-[-40px] right-[-40px] h-[120px] w-[120px] rounded-full bg-[#ec008c]/10 blur-[60px]" />
                </div>
              ))}
            </div>

            {/* NOTE */}
            <p className="mt-10 text-sm sm:text-base text-black/50 italic">
              These are representative industry testimonials. Verified quotes
              from industry partners will be updated regularly.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-24 flex justify-center">
            <button className="group h-[58px] px-10 rounded-full bg-[#ec008c] text-white text-[11px] sm:text-sm font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-black transition-all duration-500">
              Download Alumni Brochure
              <ArrowRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
