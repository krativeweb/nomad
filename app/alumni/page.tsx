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
          
          <GraduationCap
            size={16}
            className="text-[#ec008c] shrink-0"
          />

          <span className="uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[9px] sm:text-[10px] font-black whitespace-nowrap">
            Global Alumni Network
          </span>
        </div>

        {/* HEADING */}
        <div className="space-y-1">
          
          <h1 className="hero-reveal split-text text-[16vw] sm:text-[11vw] md:text-[7vw] lg:text-[5.8vw] font-black uppercase leading-[0.84] tracking-[-0.055em]">
            Creative
          </h1>

          <h1 className="hero-reveal split-text text-[16vw] sm:text-[11vw] md:text-[7vw] lg:text-[5.8vw] font-black uppercase text-[#ec008c] leading-[0.84] tracking-[-0.055em]">
            Success
          </h1>

          <h1 className="hero-reveal split-text text-[16vw] sm:text-[11vw] md:text-[7vw] lg:text-[5.8vw] font-black uppercase leading-[0.84] tracking-[-0.055em]">
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

      {/* STATS */}
      <section className="py-20 md:py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              ["15000", "Graduates"],
              ["45", "Countries"],
              ["500", "Hiring Partners"],
              ["92", "Placement Rate"],
            ].map((item, index) => (
              <div
                key={index}
                className="fade-card rounded-[40px] bg-white/5 border border-white/10 p-8 md:p-10"
              >
                <h3 className="text-5xl md:text-6xl font-black">
                  <span className="counter" data-target={item[0]}>
                    0
                  </span>
                  +
                </h3>

                <p className="mt-4 uppercase tracking-[3px] text-white/50 font-bold text-sm">
                  {item[1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED ALUMNI */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[4px] text-[#ec008c] font-bold mb-5 text-sm">
              Featured Alumni
            </p>

            <h2 className="split-text text-[14vw] md:text-[6vw] font-black uppercase leading-[0.85] tracking-[-0.05em]">
              Success Leaders
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {visibleAlumni.map((alumni, index) => (
              <div
                key={index}
                className="fade-card group rounded-[40px] overflow-hidden bg-[#f5f5f5] border border-black/5 hover:-translate-y-2 transition-all duration-500"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={alumni.image}
                    alt={alumni.name}
                    width={700}
                    height={900}
                    className="w-full h-[420px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  <div className="absolute bottom-6 left-6 flex gap-2">
                    <div className="bg-[#ec008c] text-white text-xs uppercase tracking-[2px] px-4 py-2 rounded-full font-bold">
                      {alumni.company}
                    </div>

                    <div className="bg-black text-white text-xs uppercase tracking-[2px] px-4 py-2 rounded-full font-bold">
                      {alumni.batch}
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-3xl font-black uppercase leading-tight">
                      {alumni.name}
                    </h3>

                    <a
                      href="#"
                      className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-[#ec008c] hover:text-white transition-all duration-500"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>

                  <p className="mt-3 uppercase tracking-[2px] text-[#ec008c] text-sm font-bold">
                    {alumni.role}
                  </p>

                  <p className="mt-5 text-black/60 leading-relaxed">
                    {alumni.story}
                  </p>

                  <div className="mt-8 space-y-4 text-sm font-semibold uppercase tracking-[2px]">
                    <div className="flex items-center gap-3">
                      <MapPin size={16} />
                      {alumni.location}
                    </div>

                    <div className="flex items-center gap-3">
                      <Award size={16} />
                      {alumni.award}
                    </div>

                    <div className="flex items-center gap-3">
                      <Briefcase size={16} />
                      Salary Package {alumni.salary}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {visibleCount < alumni.length && (
            <div className="flex justify-center mt-14">
              <button
                onClick={() => setVisibleCount((prev) => prev + 3)}
                className="group h-[58px] px-10 rounded-full bg-black text-white uppercase tracking-[3px] text-sm font-bold hover:bg-[#ec008c] transition-all duration-500 flex items-center gap-3"
              >
                Load More
                <ArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* VIDEO STORIES */}
     <section className="py-24 md:py-32 bg-black text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-20">
      <p className="uppercase tracking-[4px] text-[#ec008c] font-bold mb-5 text-sm">
        Alumni Stories
      </p>

            <h2 className="text-[14vw] md:text-[6vw] font-black uppercase tracking-[-0.05em] leading-[0.85]">
              Video Testimonials
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="fade-card group relative overflow-hidden rounded-[40px] bg-black"
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={`/video-thumb-${item}.jpg`}
                  className="w-full h-[320px] sm:h-[380px] md:h-[420px] object-cover group-hover:scale-105 transition-all duration-1000"
                >
                  <source src={`/videos/alumni-${item}.mp4`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                {/* PLAY BUTTON */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-20 h-20 rounded-full bg-[#ec008c]/90 flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-all duration-500">
                    <Play size={30} fill="white" className="ml-1" />
                  </div>
                </div>

                {/* TEXT */}
                <div className="absolute bottom-8 left-8 z-10">
                  <h3 className="text-2xl md:text-3xl font-black uppercase max-w-[300px] leading-tight text-white">
                    From Student To Industry Leader
                  </h3>

                  <p className="mt-3 text-sm uppercase tracking-[3px] text-white/70 font-semibold">
                    Alumni Success Story
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOP RECRUITERS */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[4px] text-[#ec008c] font-bold mb-5 text-sm">
              Career Partners
            </p>

            <h2 className="split-text text-[14vw] md:text-[6vw] font-black uppercase tracking-[-0.05em] leading-[0.85]">
              Top Recruiters
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Google",
              "Netflix",
              "Adobe",
              "Spotify",
              "Meta",
              "Nike",
              "Amazon",
              "Apple",
            ].map((company, index) => (
              <div
                key={index}
                className="fade-card rounded-[35px] border border-black/10 bg-[#f5f5f5] p-10 text-center hover:bg-black hover:text-white transition-all duration-500"
              >
                <Building2 size={42} className="mx-auto mb-6" />

                <h3 className="text-3xl font-black uppercase">{company}</h3>

                <p className="mt-4 uppercase tracking-[2px] text-sm font-bold opacity-60">
                  120+ Alumni Hired
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-[#ec008c] text-white text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-[15vw] md:text-[6vw] font-black uppercase leading-[0.82] tracking-[-0.05em]">
            Join The Network
          </h2>

          <p className="mt-8 text-lg md:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            Connect with successful graduates, mentors, innovators, and global
            industry leaders.
          </p>

          <button className="mt-12 h-[60px] px-10 rounded-full bg-black text-white uppercase tracking-[3px] font-bold hover:bg-white hover:text-black transition-all duration-500">
            Connect Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
