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
          
          <Briefcase
            size={16}
            className="text-[#ec008c] shrink-0"
          />

          <span className="uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[9px] sm:text-[10px] font-black whitespace-nowrap">
            Placement & Internship
          </span>
        </div>

        {/* HEADING */}
        <div className="space-y-1">
          
          <h1 className="hero-reveal split-text text-[16vw] sm:text-[11vw] md:text-[7vw] lg:text-[5.8vw] font-black uppercase leading-[0.84] tracking-[-0.055em]">
            Career
          </h1>

          <h1 className="hero-reveal split-text text-[16vw] sm:text-[11vw] md:text-[7vw] lg:text-[5.8vw] font-black uppercase text-[#ec008c] leading-[0.84] tracking-[-0.055em]">
            Success
          </h1>

          <h1 className="hero-reveal split-text text-[16vw] sm:text-[11vw] md:text-[7vw] lg:text-[5.8vw] font-black uppercase leading-[0.84] tracking-[-0.055em]">
            Starts Here
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

      {/* STATS */}
      <section className="py-20 md:py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              ["92%", "Placement Rate"],
              ["500+", "Hiring Companies"],
              ["1200+", "Internships"],
              ["45+", "Countries"],
            ].map((item, index) => (
              <div
                key={index}
                className="fade-card rounded-[40px] bg-white/5 border border-white/10 p-8 md:p-10"
              >
                <h3 className="text-5xl md:text-6xl font-black">
                  {item[0]}
                </h3>

                <p className="mt-4 uppercase tracking-[3px] text-white/50 font-bold text-sm">
                  {item[1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECRUITERS */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[4px] text-[#ec008c] font-bold mb-5 text-sm">
              Top Recruiters
            </p>

            <h2 className="split-text text-[14vw] md:text-[6vw] font-black uppercase tracking-[-0.05em] leading-[0.85]">
              Hiring Partners
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {recruiters.map((company, index) => (
              <div
                key={index}
                className="fade-card rounded-[35px] border border-black/10 bg-[#f5f5f5] p-10 text-center hover:bg-black hover:text-white transition-all duration-500"
              >
                <Building2 size={42} className="mx-auto mb-6" />

                <h3 className="text-3xl font-black uppercase">{company}</h3>

                <p className="mt-4 uppercase tracking-[2px] text-sm font-bold opacity-60">
                  Global Hiring Partner
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNSHIPS */}
      <section className="py-24 md:py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[4px] text-[#ec008c] font-bold mb-5 text-sm">
              Internship Programs
            </p>

            <h2 className="text-[14vw] md:text-[6vw] font-black uppercase tracking-[-0.05em] leading-[0.85]">
              Industry Experience
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8">
            {internships.map((internship, index) => (
              <div
                key={index}
                className="fade-card group rounded-[40px] overflow-hidden bg-white/5 border border-white/10 hover:-translate-y-2 transition-all duration-500"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={internship.image}
                    alt={internship.title}
                    width={700}
                    height={800}
                    className="w-full h-[360px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-black uppercase leading-tight">
                    {internship.title}
                  </h3>

                  <div className="mt-6 space-y-4 text-sm uppercase tracking-[2px] font-semibold">
                    <div className="flex items-center gap-3">
                      <Building2 size={16} />
                      {internship.company}
                    </div>

                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={16} />
                      {internship.duration}
                    </div>
                  </div>

                  <button className="mt-8 h-[52px] w-full rounded-full bg-[#ec008c] text-white uppercase tracking-[3px] text-sm font-bold hover:bg-white hover:text-black transition-all duration-500">
                    Apply Internship
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[4px] text-[#ec008c] font-bold mb-5 text-sm">
              Career Benefits
            </p>

            <h2 className="split-text text-[14vw] md:text-[6vw] font-black uppercase tracking-[-0.05em] leading-[0.85]">
              Why Students Succeed
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "High Placement Rate",
              },
              {
                icon: Users,
                title: "Industry Mentorship",
              },
              {
                icon: Globe2,
                title: "Global Opportunities",
              },
              {
                icon: Award,
                title: "Career Excellence",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="fade-card rounded-[35px] border border-black/10 bg-[#f5f5f5] p-10 hover:bg-black hover:text-white transition-all duration-500"
              >
                <item.icon className="text-[#ec008c]" size={42} />

                <h3 className="mt-8 text-3xl font-black uppercase leading-tight">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="py-24 md:py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[4px] text-[#ec008c] font-bold mb-5 text-sm">
              Career Journey
            </p>

            <h2 className="text-[14vw] md:text-[6vw] font-black uppercase tracking-[-0.05em] leading-[0.85]">
              Placement Stories
            </h2>
          </div>

          <div className="relative overflow-hidden rounded-[50px]">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/placement-video-thumb.jpg"
              className="w-full h-[320px] md:h-[700px] object-cover"
            >
              <source
                src="/videos/placement-story.mp4"
                type="video/mp4"
              />
            </video>

            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-[#ec008c] flex items-center justify-center">
                <Play size={34} fill="white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[4px] text-[#ec008c] font-bold mb-5 text-sm">
              Student Achievements
            </p>

            <h2 className="split-text text-[14vw] md:text-[6vw] font-black uppercase tracking-[-0.05em] leading-[0.85]">
              Success Stories
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="fade-card rounded-[40px] bg-[#f5f5f5] border border-black/10 p-10"
              >
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden">
                    <Image
                      src={`/student-${item}.jpg`}
                      alt="Student"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-2xl font-black uppercase">
                      Student Name
                    </h3>

                    <p className="uppercase tracking-[2px] text-sm text-[#ec008c] font-bold">
                      Placed at Google
                    </p>
                  </div>
                </div>

                <p className="mt-8 text-black/60 leading-relaxed">
                  The institute provided industry exposure, mentorship,
                  internships, and placement support that transformed my career.
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
            Build Your Career
          </h2>

          <p className="mt-8 text-lg md:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            Explore global placements, internships, mentorship, and career
            opportunities with industry-leading companies.
          </p>

          <button className="mt-12 h-[60px] px-10 rounded-full bg-black text-white uppercase tracking-[3px] font-bold hover:bg-white hover:text-black transition-all duration-500">
            Apply Today
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}