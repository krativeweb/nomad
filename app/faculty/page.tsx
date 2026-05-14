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
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function FacultyPage() {
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
        clearProps: "all",
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

    gsap.utils.toArray(".faculty-card").forEach((card: any) => {
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
          clearProps: "all",

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
      gsap.killTweensOf(".hero-reveal");
      gsap.killTweensOf(".fade-section");

      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const allFacultyMembers = [
    {
      name: "Sophia Carter",
      role: "Creative Director",
      image: "/faculty-1.jpg",
      expertise: "Brand Strategy & Visual Design",
    },
    {
      name: "Daniel Lee",
      role: "UX Design Mentor",
      image: "/faculty-2.jpg",
      expertise: "Product Design & Innovation",
    },
    {
      name: "Emma Wilson",
      role: "Animation Expert",
      image: "/faculty-3.jpg",
      expertise: "Motion Graphics & Film",
    },
    {
      name: "Michael Scott",
      role: "Business Strategist",
      image: "/faculty-4.jpg",
      expertise: "Creative Entrepreneurship",
    },
    {
      name: "Olivia Brown",
      role: "Fashion Mentor",
      image: "/faculty-5.jpg",
      expertise: "Luxury Fashion & Styling",
    },
    {
      name: "James Walker",
      role: "Digital Marketing Lead",
      image: "/faculty-6.jpg",
      expertise: "Social Media & Campaigns",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(4);
  const visibleFaculty = allFacultyMembers.slice(0, visibleCount);

  return (
    <div className="bg-[#efefef] text-black overflow-x-hidden">
      <Header />

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
    Faculty
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
            Meet Our Faculty
          </span>
        </div>

        {/* HEADING */}
        <div className="space-y-1">
          
          <h1 className="hero-reveal split-text text-[16vw] sm:text-[11vw] md:text-[7vw] lg:text-[5.8vw] font-black uppercase leading-[0.84] tracking-[-0.055em]">
            Creative
          </h1>

          <h1 className="hero-reveal split-text text-[16vw] sm:text-[11vw] md:text-[7vw] lg:text-[5.8vw] font-black uppercase text-[#ec008c] leading-[0.84] tracking-[-0.055em]">
            Industry
          </h1>

          <h1 className="hero-reveal split-text text-[16vw] sm:text-[11vw] md:text-[7vw] lg:text-[5.8vw] font-black uppercase leading-[0.84] tracking-[-0.055em]">
            Leaders
          </h1>
        </div>

        {/* DESCRIPTION */}
        <p className="hero-reveal mt-6 sm:mt-8 max-w-[620px] text-[15px] sm:text-lg md:text-xl leading-[1.9] text-black/70">
          Learn from award-winning professionals, visionary creators, and
          experienced strategists shaping the future of the creative
          industry.
        </p>

        {/* BUTTONS */}
        <div className="hero-reveal mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">
          
          <button className="group h-[56px] sm:h-[58px] px-6 sm:px-8 rounded-full bg-black text-white uppercase tracking-[0.22em] sm:tracking-[3px] text-[11px] sm:text-sm font-bold hover:bg-[#ec008c] transition-all duration-500 flex items-center justify-center gap-3">
            Explore Faculty

            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-all duration-300" />
          </button>

          <button className="h-[56px] sm:h-[58px] px-6 sm:px-8 rounded-full border border-black/10 bg-[#f5f5f5] text-black uppercase tracking-[0.22em] sm:tracking-[3px] text-[11px] sm:text-sm font-bold hover:bg-black hover:text-white transition-all duration-500">
            Download Brochure
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative flex justify-center lg:justify-end">
        
        <div className="hero-image relative overflow-hidden rounded-[32px] sm:rounded-[40px] lg:rounded-[50px] shadow-2xl w-full max-w-[680px]">
          
          <Image
            src="/faculty-hero.jpg"
            alt="Faculty"
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
              Global Faculty Network
            </p>

            <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl md:text-2xl font-black leading-tight">
              Mentoring future innovators worldwide.
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              ["120+", "Industry Experts"],
              ["25+", "Countries"],
              ["15+", "Years Experience"],
              ["300+", "Workshops"],
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-[24px] md:rounded-[40px] bg-white/5 border border-white/10 p-6 md:p-10"
              >
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-black">
                  {item[0]}
                </h3>

                <p className="mt-4 uppercase tracking-[3px] text-white/50 font-bold text-xs sm:text-sm">
                  {item[1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACULTY GRID */}
      <section className="py-24 md:py-32 bg-[#efefef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <p className="uppercase tracking-[4px] text-[#ec008c] font-bold mb-5 text-sm">
              Our Mentors
            </p>

            <h2 className="split-text text-[14vw] md:text-[6vw] font-black uppercase leading-[0.85] tracking-[-0.05em]">
              Faculty Team
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 md:gap-8">
            {visibleFaculty.map((faculty, index) => (
              <div
                key={index}
                className="faculty-card group rounded-[30px] md:rounded-[40px] overflow-hidden bg-[#f5f5f5] border border-black/5 hover:-translate-y-2 transition-all duration-500"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={faculty.image}
                    alt={faculty.name}
                    width={600}
                    height={800}
                    className="w-full h-[360px] sm:h-[420px] md:h-[500px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Star size={16} className="text-[#ec008c] fill-[#ec008c]" />

                    <p className="uppercase tracking-[3px] text-xs font-bold text-[#ec008c]">
                      {faculty.role}
                    </p>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black uppercase leading-tight">
                    {faculty.name}
                  </h3>

                  <p className="mt-4 text-black/60 leading-relaxed text-sm md:text-base">
                    {faculty.expertise}
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-4 text-sm font-semibold uppercase tracking-[2px]">
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} />
                      Industry Expert
                    </div>

                    <div className="flex items-center gap-2">
                      <Globe2 size={16} />
                      Global Mentor
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {visibleCount < allFacultyMembers.length && (
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

      {/* CTA */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-[#ec008c] text-white text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-[15vw] md:text-[6vw] font-black uppercase leading-[0.82] tracking-[-0.05em]">
            Learn From The Best
          </h2>

          <p className="mt-8 text-lg md:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            Connect with globally recognized educators and industry leaders.
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
