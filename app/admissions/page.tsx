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
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
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
            <div className="relative">
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

      {/* STATS */}
      <section className="py-20 md:py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              ["2026", "Admissions Open"],
              ["15000", "Students"],
              ["45", "Countries"],
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

      {/* PROGRAMS */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[4px] text-[#ec008c] font-bold mb-5 text-sm">
              Programs Offered
            </p>

            <h2 className="split-text text-[14vw] md:text-[6vw] font-black uppercase tracking-[-0.05em] leading-[0.85]">
              Creative Programs
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="fade-card group rounded-[40px] overflow-hidden bg-[#f5f5f5] border border-black/5 hover:-translate-y-2 transition-all duration-500"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    width={700}
                    height={800}
                    className="w-full h-[360px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                <div className="p-8">
                  <h3 className="text-3xl font-black uppercase leading-tight">
                    {program.title}
                  </h3>

                  <div className="mt-6 space-y-4 text-sm uppercase tracking-[2px] font-semibold">
                    <div className="flex items-center gap-3">
                      <Calendar size={16} />
                      {program.duration}
                    </div>

                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={16} />
                      Eligibility: {program.eligibility}
                    </div>
                  </div>

                  <button className="mt-8 h-[52px] w-full rounded-full bg-black text-white uppercase tracking-[3px] text-sm font-bold hover:bg-[#ec008c] transition-all duration-500">
                    Apply Program
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADMISSION PROCESS */}
      <section className="py-24 md:py-32 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[4px] text-[#ec008c] font-bold mb-5 text-sm">
              Admission Process
            </p>

            <h2 className="text-[14vw] md:text-[6vw] font-black uppercase tracking-[-0.05em] leading-[0.85]">
              Simple Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="fade-card relative rounded-[40px] border border-white/10 bg-white/5 p-8 text-center"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-[#ec008c] flex items-center justify-center text-3xl font-black">
                  {index + 1}
                </div>

                <h3 className="mt-8 text-2xl font-black uppercase leading-tight">
                  {step}
                </h3>
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
              Why Choose Us
            </p>

            <h2 className="split-text text-[14vw] md:text-[6vw] font-black uppercase tracking-[-0.05em] leading-[0.85]">
              Global Creative Institute
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Industry Mentors",
              "Global Placements",
              "Live Projects",
              "International Exposure",
            ].map((item, index) => (
              <div
                key={index}
                className="fade-card rounded-[35px] border border-black/10 bg-[#f5f5f5] p-10 hover:bg-black hover:text-white transition-all duration-500"
              >
                <Star className="text-[#ec008c]" size={42} />

                <h3 className="mt-8 text-3xl font-black uppercase leading-tight">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO TOUR */}
      <section className="py-24 md:py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[4px] text-[#ec008c] font-bold mb-5 text-sm">
              Campus Experience
            </p>

            <h2 className="text-[14vw] md:text-[6vw] font-black uppercase tracking-[-0.05em] leading-[0.85]">
              Video Tour
            </h2>
          </div>

          <div className="relative overflow-hidden rounded-[50px]">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/campus-video-thumb.jpg"
              className="w-full h-[320px] md:h-[700px] object-cover"
            >
              <source src="/videos/campus-tour.mp4" type="video/mp4" />
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

      {/* CONTACT */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="fade-card rounded-[40px] bg-black text-white p-10 md:p-14">
              <p className="uppercase tracking-[4px] text-[#ec008c] font-bold mb-5 text-sm">
                Contact Admissions
              </p>

              <h2 className="text-5xl md:text-6xl font-black uppercase leading-[0.9]">
                Get In Touch
              </h2>

              <div className="mt-12 space-y-8 text-lg">
                <div className="flex items-center gap-4">
                  <Phone className="text-[#ec008c]" />
                  +91 9876543210
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="text-[#ec008c]" />
                  admissions@example.com
                </div>

                <div className="flex items-center gap-4">
                  <MapPin className="text-[#ec008c]" />
                  Creative Campus, Global City
                </div>
              </div>
            </div>

            <div className="fade-card rounded-[40px] bg-[#f5f5f5] border border-black/10 p-10 md:p-14">
              <p className="uppercase tracking-[4px] text-[#ec008c] font-bold mb-5 text-sm">
                Quick Apply
              </p>

              <div className="space-y-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full h-[60px] rounded-full px-6 bg-white border border-black/10 outline-none"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full h-[60px] rounded-full px-6 bg-white border border-black/10 outline-none"
                />

                <input
                  type="text"
                  placeholder="Preferred Program"
                  className="w-full h-[60px] rounded-full px-6 bg-white border border-black/10 outline-none"
                />

                <textarea
                  placeholder="Message"
                  className="w-full h-[180px] rounded-[30px] p-6 bg-white border border-black/10 outline-none resize-none"
                />

                <button className="h-[58px] px-10 rounded-full bg-black text-white uppercase tracking-[3px] text-sm font-bold hover:bg-[#ec008c] transition-all duration-500">
                  Submit Application
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-[#ec008c] text-white text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-[15vw] md:text-[6vw] font-black uppercase leading-[0.82] tracking-[-0.05em]">
            Admissions Open
          </h2>

          <p className="mt-8 text-lg md:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            Start your creative journey with globally recognized education,
            mentorship, and career opportunities.
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