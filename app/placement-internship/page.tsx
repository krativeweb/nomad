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
          Placements
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 md:pt-48 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* LEFT */}
            <div>
              <div className="hero-reveal inline-flex items-center gap-3 border border-black/10 bg-[#f5f5f5] px-5 py-3 rounded-full mb-10">
                <Briefcase size={18} className="text-[#ec008c]" />

                <span className="uppercase tracking-[4px] text-xs font-bold">
                  Placement & Internship
                </span>
              </div>

              <div>
                <div className="overflow-hidden pb-4">
                  <h1 className="split-text text-[18vw] sm:text-[14vw] md:text-[9vw] lg:text-[7vw] xl:text-[6vw] font-black uppercase leading-[0.9] tracking-[-0.05em]">
                    Career
                  </h1>
                </div>

                <div className="overflow-hidden pb-4">
                  <h1 className="split-text text-[18vw] sm:text-[14vw] md:text-[9vw] lg:text-[7vw] xl:text-[6vw] font-black uppercase text-[#ec008c] leading-[0.9] tracking-[-0.05em]">
                    Success
                  </h1>
                </div>

                <div className="overflow-hidden pb-4">
                  <h1 className="split-text text-[18vw] sm:text-[14vw] md:text-[9vw] lg:text-[7vw] xl:text-[6vw] font-black uppercase leading-[0.9] tracking-[-0.05em]">
                    Starts Here
                  </h1>
                </div>
              </div>

              <p className="hero-reveal mt-8 max-w-[650px] text-base sm:text-lg md:text-xl text-black/70 leading-relaxed md:leading-[1.8]">
                Unlock global career opportunities with top recruiters,
                internships, industry projects, and placement programs designed
                for future innovators.
              </p>

              <div className="hero-reveal mt-10 flex flex-col sm:flex-row gap-4">
                <button className="group h-[58px] px-8 rounded-full bg-black text-white uppercase tracking-[3px] text-sm font-bold hover:bg-[#ec008c] transition-all duration-500 flex items-center justify-center gap-3">
                  Explore Careers
                  <ArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
                </button>

                <button className="h-[58px] px-8 rounded-full border border-black/10 bg-[#f5f5f5] text-black uppercase tracking-[3px] text-sm font-bold hover:bg-black hover:text-white transition-all duration-500">
                  Placement Report
                </button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-full h-full rounded-[50px] bg-[#ec008c]/80"></div>

              <div className="hero-image relative overflow-hidden rounded-[50px]">
                <Image
                  src="/placement-hero.jpg"
                  alt="Placement"
                  width={900}
                  height={1200}
                  priority
                  className="w-full h-[320px] sm:h-[520px] md:h-[680px] lg:h-[780px] object-cover grayscale"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                <div className="absolute bottom-8 left-8 bg-[#f5f5f5] rounded-[30px] p-6 border border-black/5 max-w-[280px]">
                  <p className="text-xs uppercase tracking-[3px] text-black/40 font-bold">
                    Global Recruiters
                  </p>

                  <h3 className="mt-3 text-2xl font-black leading-tight">
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