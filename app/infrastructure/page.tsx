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
  Building2,
  GraduationCap,
  Globe2,
  Star,
  MonitorSmartphone,
  Camera,
  Music4,
  Cpu,
  Play,
  CheckCircle2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function InfrastructurePage() {
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

  const facilities = [
    {
      title: "Creative Design Labs",
      icon: MonitorSmartphone,
      image: "/infra-1.jpg",
      description:
        "Advanced digital labs equipped with industry-standard software and high-performance systems.",
    },
    {
      title: "Photography Studio",
      icon: Camera,
      image: "/infra-2.jpg",
      description:
        "Professional photography and lighting setup for fashion, advertising, and media production.",
    },
    {
      title: "Sound & Music Studio",
      icon: Music4,
      image: "/infra-3.jpg",
      description:
        "Modern sound recording and editing studios for audio, film, and music production.",
    },
    {
      title: "Innovation Labs",
      icon: Cpu,
      image: "/infra-4.jpg",
      description:
        "Technology-driven innovation spaces designed for experimentation and future-ready learning.",
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
          Campus
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 md:pt-48 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* LEFT */}
            <div>
              <div className="hero-reveal inline-flex items-center gap-3 border border-black/10 bg-[#f5f5f5] px-5 py-3 rounded-full mb-10">
                <Building2 size={18} className="text-[#ec008c]" />

                <span className="uppercase tracking-[4px] text-xs font-bold">
                  World Class Infrastructure
                </span>
              </div>

              <div>
                <div className="overflow-hidden pb-4">
                  <h1 className="split-text text-[18vw] sm:text-[14vw] md:text-[9vw] lg:text-[7vw] xl:text-[6vw] font-black uppercase leading-[0.9] tracking-[-0.05em]">
                    Creative
                  </h1>
                </div>

                <div className="overflow-hidden pb-4">
                  <h1 className="split-text text-[18vw] sm:text-[14vw] md:text-[9vw] lg:text-[7vw] xl:text-[6vw] font-black uppercase text-[#ec008c] leading-[0.9] tracking-[-0.05em]">
                    Learning
                  </h1>
                </div>

                <div className="overflow-hidden pb-4">
                  <h1 className="split-text text-[18vw] sm:text-[14vw] md:text-[9vw] lg:text-[7vw] xl:text-[6vw] font-black uppercase leading-[0.9] tracking-[-0.05em]">
                    Spaces
                  </h1>
                </div>
              </div>

              <p className="hero-reveal mt-8 max-w-[650px] text-base sm:text-lg md:text-xl text-black/70 leading-relaxed md:leading-[1.8]">
                Explore modern infrastructure designed to inspire creativity,
                innovation, collaboration, and future-ready learning
                experiences.
              </p>

              <div className="hero-reveal mt-10 flex flex-col sm:flex-row gap-4">
                <button className="group h-[58px] px-8 rounded-full bg-black text-white uppercase tracking-[3px] text-sm font-bold hover:bg-[#ec008c] transition-all duration-500 flex items-center justify-center gap-3">
                  Explore Campus
                  <ArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
                </button>

                <button className="h-[58px] px-8 rounded-full border border-black/10 bg-[#f5f5f5] text-black uppercase tracking-[3px] text-sm font-bold hover:bg-black hover:text-white transition-all duration-500">
                  Virtual Tour
                </button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-full h-full rounded-[50px] bg-[#ec008c]/80"></div>

              <div className="hero-image relative overflow-hidden rounded-[50px]">
                <Image
                  src="/infrastructure-hero.jpg"
                  alt="Infrastructure"
                  width={900}
                  height={1200}
                  priority
                  className="w-full h-[320px] sm:h-[520px] md:h-[680px] lg:h-[780px] object-cover grayscale"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                <div className="absolute bottom-8 left-8 bg-[#f5f5f5] rounded-[30px] p-6 border border-black/5 max-w-[280px]">
                  <p className="text-xs uppercase tracking-[3px] text-black/40 font-bold">
                    Smart Campus
                  </p>

                  <h3 className="mt-3 text-2xl font-black leading-tight">
                    Designed for future innovators.
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
              ["25+", "Creative Labs"],
              ["12+", "Studios"],
              ["45K+", "Campus Area"],
              ["24/7", "Smart Access"],
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

      {/* FACILITIES */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[4px] text-[#ec008c] font-bold mb-5 text-sm">
              Campus Facilities
            </p>

            <h2 className="split-text text-[14vw] md:text-[6vw] font-black uppercase tracking-[-0.05em] leading-[0.85]">
              Learning Environment
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="fade-card group rounded-[40px] overflow-hidden bg-[#f5f5f5] border border-black/5 hover:-translate-y-2 transition-all duration-500"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    width={700}
                    height={800}
                    className="w-full h-[360px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                <div className="p-8">
                  <facility.icon
                    className="text-[#ec008c]"
                    size={42}
                  />

                  <h3 className="mt-6 text-3xl font-black uppercase leading-tight">
                    {facility.title}
                  </h3>

                  <p className="mt-5 text-black/60 leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CAMPUS */}
      <section className="py-24 md:py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[4px] text-[#ec008c] font-bold mb-5 text-sm">
              Why Our Campus
            </p>

            <h2 className="text-[14vw] md:text-[6vw] font-black uppercase tracking-[-0.05em] leading-[0.85]">
              Premium Experience
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Industry Standard Labs",
              },
              {
                icon: Globe2,
                title: "Global Learning Environment",
              },
              {
                icon: Star,
                title: "Creative Ecosystem",
              },
              {
                icon: CheckCircle2,
                title: "Smart Campus Facilities",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="fade-card rounded-[35px] border border-white/10 bg-white/5 p-10 hover:bg-[#ec008c] transition-all duration-500"
              >
                <item.icon size={42} />

                <h3 className="mt-8 text-3xl font-black uppercase leading-tight">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO TOUR */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[4px] text-[#ec008c] font-bold mb-5 text-sm">
              Campus Tour
            </p>

            <h2 className="split-text text-[14vw] md:text-[6vw] font-black uppercase tracking-[-0.05em] leading-[0.85]">
              Explore Infrastructure
            </h2>
          </div>

          <div className="relative overflow-hidden rounded-[50px]">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/infra-video-thumb.jpg"
              className="w-full h-[320px] md:h-[700px] object-cover"
            >
              <source
                src="/videos/infrastructure-tour.mp4"
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

      {/* GALLERY */}
      <section className="py-24 md:py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[4px] text-[#ec008c] font-bold mb-5 text-sm">
              Campus Gallery
            </p>

            <h2 className="text-[14vw] md:text-[6vw] font-black uppercase tracking-[-0.05em] leading-[0.85]">
              Creative Spaces
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="fade-card group overflow-hidden rounded-[30px]"
              >
                <Image
                  src={`/gallery-${item}.jpg`}
                  alt="Gallery"
                  width={500}
                  height={500}
                  className="w-full h-[220px] md:h-[280px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-[#ec008c] text-white text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-[15vw] md:text-[6vw] font-black uppercase leading-[0.82] tracking-[-0.05em]">
            Experience Innovation
          </h2>

          <p className="mt-8 text-lg md:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            Discover modern creative infrastructure designed to inspire
            collaboration, experimentation, and global learning experiences.
          </p>

          <button className="mt-12 h-[60px] px-10 rounded-full bg-black text-white uppercase tracking-[3px] font-bold hover:bg-white hover:text-black transition-all duration-500">
            Visit Campus
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}