"use client";

import Image from "next/image";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

import Header from "@/components/header";
import Footer from "@/components/footer";

import { ArrowRight, CalendarDays, Clock3, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const featuredNews = [
  {
    title: "Global Design Summit 2026",
    date: "March 12, 2026",
    category: "Event",
    image: "/news-1.jpg",
  },

  {
    title: "Creative Industry Collaboration Program",
    date: "April 03, 2026",
    category: "News",
    image: "/news-2.jpg",
  },
];

const events = [
  {
    title: "Future of Branding Workshop",
    date: "May 14",
    time: "10:00 AM",
    image: "/event-1.jpg",
  },

  {
    title: "Creative Portfolio Exhibition",
    date: "May 22",
    time: "03:00 PM",
    image: "/event-2.jpg",
  },

  {
    title: "Global Innovation Conference",
    date: "June 02",
    time: "11:30 AM",
    image: "/event-3.jpg",
  },
];

export default function NewsEventsPage() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /*
    HERO REVEAL
    */

      gsap.from(".hero-reveal", {
        y: 100,
        opacity: 0,
        stagger: 0.12,
        duration: 1.2,
        ease: "power4.out",
      });

      /*
    SPLIT TEXT
    */

      const splitInstances: SplitType[] = [];

      const titles = gsap.utils.toArray(".split-text");

      titles.forEach((title: any) => {
        const split = new SplitType(title, {
          types: "chars",
        });

        splitInstances.push(split);

        gsap.from(split.chars, {
          yPercent: 120,
          opacity: 0,
          stagger: 0.03,
          duration: 1.2,
          ease: "power4.out",
          delay: 0.2,
        });
      });

      /*
    SECTION ANIMATION
    */

      gsap.utils.toArray(".fade-section").forEach((section: any) => {
        gsap.from(section, {
          y: 80,
          opacity: 0,
          duration: 1.2,
          ease: "power4.out",

          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
        });
      });

      /*
    PARALLAX
    */

      gsap.utils.toArray(".parallax-image").forEach((image: any) => {
        gsap.to(image, {
          yPercent: 10,
          ease: "none",

          scrollTrigger: {
            trigger: image,
            scrub: 1,
          },
        });
      });

      /*
    CLEANUP
    */

      return () => {
        splitInstances.forEach((split) => split.revert());
      };
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[#efefef] text-black overflow-x-hidden">
      <Header />

      {/* HERO */}

      <section className="relative min-h-screen pb-24 md:pb-32 overflow-hidden">
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

        <div className="absolute top-[10%] left-[-5%] text-[25vw] font-black uppercase text-black/[0.03] leading-none pointer-events-none">
          News
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-40 md:pt-48 relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-20 items-center">
            {/* LEFT */}

            <div className="max-w-[760px]">
              <div className="hero-reveal inline-flex items-center gap-3 border border-black/10 bg-[#f5f5f5] px-5 py-3 rounded-full mb-10">
                <Sparkles size={18} className="text-[#ec008c]" />

                <span className="uppercase tracking-[4px] text-xs font-bold">
                  Latest News & Events
                </span>
              </div>

              <div className="space-y-0">
                <div className="overflow-hidden pb-4 md:pb-6">
                  <h1 className="hero-reveal split-text text-[20vw] sm:text-[16vw] md:text-[9vw] lg:text-[7vw] font-black uppercase leading-[0.9] tracking-[-0.05em]">
                    Stories
                  </h1>
                </div>

                <div className="overflow-hidden pb-4 md:pb-6">
                  <h1 className="hero-reveal split-text text-[20vw] sm:text-[16vw] md:text-[9vw] lg:text-[7vw] font-black uppercase leading-[0.9] tracking-[-0.05em] text-[#ec008c]">
                    Events
                  </h1>
                </div>

                <div className="overflow-hidden pb-4 md:pb-6">
                  <h1 className="hero-reveal split-text text-[20vw] sm:text-[16vw] md:text-[9vw] lg:text-[7vw] font-black uppercase leading-[0.9] tracking-[-0.05em]">
                    Culture
                  </h1>
                </div>
              </div>

              <p className="hero-reveal mt-8 md:mt-10 max-w-[650px] text-base sm:text-lg md:text-xl text-black/70 leading-relaxed md:leading-[1.8]">
                Discover the latest happenings, workshops, exhibitions,
                collaborations, and creative experiences shaping our campus
                culture.
              </p>

              <div className="hero-reveal mt-10 flex flex-col sm:flex-row gap-4">
                <button className="group h-[58px] px-8 md:px-10 rounded-full bg-black text-white text-sm md:text-base font-bold uppercase tracking-[2px] flex items-center justify-center gap-3 hover:bg-[#ec008c] transition-all duration-500">
                  Explore Events
                  <ArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
                </button>

                <button className="h-[58px] px-8 md:px-10 rounded-full border border-black/10 bg-[#f5f5f5] text-black text-sm md:text-base font-semibold hover:bg-black hover:text-white transition-all duration-500">
                  View Newsroom
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE */}

            <div className="relative">
              <div className="absolute -top-6 -right-6 w-full h-full rounded-[50px] bg-[#ec008c]/80"></div>

              <div className="relative overflow-hidden rounded-[50px]">
                <Image
                  src="/news-hero.jpg"
                  alt="News Hero"
                  width={900}
                  height={1200}
                  priority
                  className="parallax-image w-full h-[420px] sm:h-[520px] md:h-[680px] lg:h-[780px] object-cover grayscale"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                <div className="absolute top-6 right-6 bg-white rounded-[25px] p-5 border border-black/5">
                  <p className="text-xs uppercase tracking-[3px] text-black/40 font-bold">
                    Upcoming Events
                  </p>

                  <h3 className="mt-2 text-3xl font-black">48+</h3>
                </div>

                <div className="absolute bottom-[25%] -left-6 md:-left-10 bg-black text-white rounded-[30px] p-6">
                  <p className="text-xs uppercase tracking-[3px] text-white/40">
                    Global Reach
                  </p>

                  <h3 className="mt-2 text-2xl font-black">25 Countries</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED NEWS */}

      <section className="fade-section py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <p className="uppercase tracking-[4px] text-[#ec008c] font-bold mb-6">
              Featured Stories
            </p>

            <h2 className="text-[14vw] md:text-[5vw] font-black uppercase leading-[0.85] tracking-[-0.05em]">
              News Highlights
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {featuredNews.map((item, index) => (
              <div
                key={index}
                className="group rounded-[50px] overflow-hidden border border-white/10 transition-all duration-700 hover:-translate-y-3"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={900}
                    height={700}
                    className="w-full h-[500px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />

                  <div className="absolute top-6 left-6 bg-[#ec008c] text-white px-5 py-3 rounded-full uppercase tracking-[3px] text-xs font-bold">
                    {item.category}
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-sm uppercase tracking-[3px] text-white/40 font-bold">
                    {item.date}
                  </p>

                  <h3 className="mt-5 text-3xl md:text-4xl font-black uppercase leading-tight">
                    {item.title}
                  </h3>

                  <button className="group mt-8 flex items-center gap-3 uppercase tracking-[3px] text-sm font-bold text-[#ec008c]">
                    Read Story
                    <ArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}

      <section className="py-10 bg-black overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-20">
          {[
            "Workshops",
            "Innovation",
            "Creativity",
            "Design",
            "Culture",
            "Leadership",
          ].map((item, index) => (
            <h2
              key={index}
              className="text-7xl md:text-9xl font-black uppercase text-white/10"
            >
              {item}
            </h2>
          ))}
        </div>
      </section>

      {/* EVENTS */}

      <section className="fade-section py-32 bg-[#efefef]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20">
            <div>
              <p className="uppercase tracking-[4px] text-[#ec008c] font-bold mb-6">
                Upcoming Events
              </p>

              <h2 className="text-[14vw] md:text-[5vw] font-black uppercase leading-[0.85] tracking-[-0.05em]">
                Join Experiences
              </h2>
            </div>
          </div>

          <div className="space-y-8">
            {events.map((item, index) => (
              <div
                key={index}
                className="group grid lg:grid-cols-[320px_1fr_auto] gap-8 items-center rounded-[40px] bg-[#f5f5f5] border border-black/5 p-6 transition-all duration-700 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden rounded-[30px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-[220px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                </div>

                <div>
                  <h3 className="text-3xl md:text-4xl font-black uppercase leading-tight">
                    {item.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-6 mt-6">
                    <div className="flex items-center gap-3">
                      <CalendarDays size={18} className="text-[#ec008c]" />

                      <p className="uppercase tracking-[2px] text-sm font-bold text-black/50">
                        {item.date}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock3 size={18} className="text-[#ec008c]" />

                      <p className="uppercase tracking-[2px] text-sm font-bold text-black/50">
                        {item.time}
                      </p>
                    </div>
                  </div>
                </div>

                <button className="group h-[58px] px-8 rounded-full bg-black text-white uppercase tracking-[3px] text-sm font-bold hover:bg-[#ec008c] transition-all duration-500">
                  Register
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="relative py-32 overflow-hidden bg-[#ec008c] text-white text-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-[20vw] font-black uppercase text-white/10">
            Future
          </h2>
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <h2 className="text-[16vw] md:text-[6vw] font-black uppercase leading-[0.82] tracking-[-0.05em]">
            Stay Connected
          </h2>

          <p className="mt-8 text-lg md:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            Be part of workshops, exhibitions, conferences, and creative
            experiences shaping the next generation.
          </p>

          <button className="mt-12 h-[60px] px-10 rounded-full bg-black text-white uppercase tracking-[3px] font-bold hover:bg-white hover:text-black transition-all duration-500">
            Explore More
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
