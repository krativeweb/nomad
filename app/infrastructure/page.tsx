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
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
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
            <div className="relative lg:mt-16">
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

      {/* CREATIVE ECOSYSTEM */}
      {/* CREATIVE ECOSYSTEM */}
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
        <div className="pointer-events-none absolute right-[-5%] top-[5%] text-[20vw] font-black uppercase tracking-[-0.08em] text-black/[0.03]">
          CAMPUS
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            {/* LEFT CONTENT */}
            <div className="flex flex-col justify-center">
              {/* LABEL */}
              <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
                Creative Ecosystem
              </p>

              {/* HEADING */}
              <div className="mt-6">
                <h2 className="text-[13vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-black">
                  Not A Campus
                </h2>

                <h2 className="text-[13vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-[#ec008c]">
                  But A Creative
                </h2>

                <h2 className="text-[13vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-black">
                  Ecosystem.
                </h2>
              </div>

              {/* DESCRIPTION */}
              <div className="mt-10 max-w-2xl space-y-6">
                <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-[1.6] text-black">
                  Forget boring classrooms and silent lectures.
                </p>

                <p className="text-base sm:text-lg md:text-xl leading-[1.9] text-black/70">
                  At NoMAD, we transform the campus into a vibrant creative
                  ecosystem where innovation and collaboration thrive.
                </p>

                <p className="text-base sm:text-lg md:text-xl leading-[1.9] text-black/70">
                  Our environment encourages students, faculty, and industry
                  experts to push boundaries and explore new ideas.
                </p>

                <p className="text-base sm:text-lg md:text-xl leading-[1.9] text-black/70">
                  Equipped with cutting-edge technology, interactive labs, and
                  collaborative studios, students experience a culture of
                  experimentation and discovery that reflects the evolving
                  creative landscape.
                </p>
              </div>

              {/* FOOTER */}
              <div className="mt-10 flex items-center gap-5">
                <div className="h-px w-20 bg-[#ec008c]" />

                <p className="text-[11px] font-black uppercase tracking-[0.35em] text-black/40">
                  Visual Of Our Campus
                </p>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="overflow-hidden rounded-[40px] border border-black/10 bg-black">
              <div className="relative overflow-hidden">
                <Image
                  src="/campus.jpg"
                  alt="NoMAD Campus"
                  width={1200}
                  height={1500}
                  className="h-[720px] w-full object-cover grayscale transition-all duration-700 hover:scale-105 hover:grayscale-0"
                />

                {/* OVERLAYS */}
                <div className="absolute inset-0 bg-black/35" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* LABEL */}
                <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/30 px-4 py-2 backdrop-blur-xl">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white">
                    Lecture Room
                  </p>
                </div>

                {/* BOTTOM CONTENT */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10">
                  <div className="rounded-[28px] border border-white/10 bg-black/20 p-6 backdrop-blur-xl">
                    <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
                      Creative Learning Space
                    </p>

                    <h3 className="mt-4 text-4xl md:text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] text-white">
                      Lecture Room.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREATIVE SPACES */}
      <section className="relative overflow-hidden bg-[#f5f5f5] py-14 sm:py-16 md:py-20 lg:py-24">
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
        <div className="pointer-events-none absolute right-[-5%] top-[5%] text-[20vw] font-black uppercase tracking-[-0.08em] text-black/[0.03]">
          SPACES
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* TOP */}
          <div className="max-w-5xl">
            <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
              Creative Spaces
            </p>

            <div className="mt-6 flex flex-wrap items-end gap-x-5 gap-y-2">
              <h2 className="text-[13vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em]">
                Built For
              </h2>

              <h2 className="text-[13vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-[#ec008c]">
                Creators.
              </h2>
            </div>

            <p className="mt-8 max-w-4xl text-base sm:text-lg md:text-xl leading-[1.9] text-black/70">
              Every environment at NoMAD is designed to encourage
              experimentation, storytelling, collaboration, and innovation.
            </p>
          </div>

          {/* GRID */}
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {[
              {
                title: "The Thinktank.",
                label: "Lecture Room",
                image: "/brainstorming-session.jpg",
                text: "Not your typical lecture space. This is where concepts are introduced, perspectives are challenged, and creative thinking takes its first step.",
              },
              {
                title: "The Archive.",
                label: "Library",
                image: "/library.jpg",
                text: "Packed with books, magazines, and inspiration from advertising, design, and storytelling — because sometimes the best ideas start with a single page.",
              },
              {
                title: "The Grid.",
                label: "Studio For Shoots",
                image: "/video-shoot.jpg",
                text: "Lights, camera, creativity. Explore content, analyze campaigns, and bring ideas to life through visuals, storytelling, and media.",
              },
             {
  title: "The Design Den.",
  label: "Creative Studio",
  image: "/creative-studio.jpg",
  text: "A space built for creators. From sketches to screens, this is where raw ideas turn into powerful visuals and design comes to life.",
},

{
  title: "The Labs.",
  label: "Innovation Labs",
  image: "/labs.jpg",
  text: "Hands-on technology and experimentation spaces designed for future-focused creative learning and innovation.",
},

{
  title: "The Archive.",
  label: "Library",
  image: "/library-2.jpg",
  text: "A modern learning library filled with design resources, books, magazines, and digital inspiration for curious minds.",
},

{
  title: "The Media Room.",
  label: "Media Room",
  image: "/media-room.jpg",
  text: "A collaborative media environment for screenings, editing, storytelling, presentations, and creative discussions.",
},

{
  title: "The Hall.",
  label: "Lecture Halls",
  image: "/lecture-hall.jpg",
  text: "Spacious and modern lecture halls designed for interactive sessions, workshops, guest talks, and industry learning.",
},

{
  title: "The Arena.",
  label: "Sports Facility",
  image: "/sports.jpg",
  text: "Fitness and recreational spaces that encourage teamwork, wellness, balance, and an active campus lifestyle.",
},

{
  title: "The Café.",
  label: "Cafeteria",
  image: "/cafeteria.jpg",
  text: "A vibrant social hub where students connect, collaborate, recharge, and share ideas beyond the classroom.",
},
            ].map((item, i) => (
              <div
                key={i}
                className="group overflow-hidden rounded-[36px] border border-black/10 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-[#ec008c]/30 hover:shadow-[0_25px_80px_rgba(0,0,0,0.08)]"
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1000}
                    height={700}
                    className="h-[340px] w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* LABEL */}
                  <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/30 px-4 py-2 backdrop-blur-xl">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white">
                      {item.label}
                    </p>
                  </div>

                  {/* TITLE */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-4xl md:text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6 sm:p-8">
                  <p className="text-base sm:text-lg md:text-xl leading-[1.9] text-black/70">
                    {item.text}
                  </p>

                  {/* FOOTER */}
                  <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-6">
                    <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
                      Creative Environment
                    </p>

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ec008c] text-sm font-black text-white">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
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
