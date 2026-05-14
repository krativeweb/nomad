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

      gsap.to(".parallax-image", {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
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
    News
  </div>

  <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    
    <div className="grid lg:grid-cols-[1fr_1fr] gap-14 lg:gap-20 items-start">
      
      {/* LEFT */}
      <div className="relative z-10 w-full max-w-[720px]">
        
        {/* LABEL */}
        <div className="hero-reveal inline-flex items-center gap-3 border border-black/10 bg-[#f5f5f5] px-4 sm:px-5 py-3 rounded-full mb-6 sm:mb-8">
          
          <Sparkles
            size={16}
            className="text-[#ec008c] shrink-0"
          />

          <span className="uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[9px] sm:text-[10px] font-black whitespace-nowrap">
            News & Events
          </span>
        </div>

        {/* HEADING */}
        <div className="space-y-1">
          
          <h1 className="hero-reveal split-text text-[16vw] sm:text-[11vw] md:text-[7vw] lg:text-[5.8vw] font-black uppercase leading-[0.84] tracking-[-0.055em]">
            Always
          </h1>

          <h1 className="hero-reveal split-text text-[16vw] sm:text-[11vw] md:text-[7vw] lg:text-[5.8vw] font-black uppercase leading-[0.84] tracking-[-0.055em] text-[#ec008c]">
            Creating.
          </h1>

          <h1 className="hero-reveal split-text text-[16vw] sm:text-[11vw] md:text-[7vw] lg:text-[5.8vw] font-black uppercase leading-[0.84] tracking-[-0.055em]">
            Always Moving.
          </h1>
        </div>

        {/* DESCRIPTION */}
        <div className="hero-reveal mt-8 sm:mt-10 max-w-[650px] space-y-5 sm:space-y-6">
          
          <p className="text-base sm:text-xl md:text-2xl font-semibold leading-[1.7] text-black">
            NoMAD College of Creative Intelligence is never standing still.
          </p>

          <p className="text-[15px] sm:text-lg md:text-xl text-black/70 leading-[1.9]">
            From global award stages to industry podcasts, campus events to
            international collaborations — there’s always something happening
            in the NoMAD universe.
          </p>

          <p className="text-[15px] sm:text-lg md:text-xl text-black/70 leading-[1.9]">
            This is your window into the conversations, ideas, and moments
            shaping the future of creativity.
          </p>

          <p className="text-[15px] sm:text-lg md:text-xl text-black/70 leading-[1.9]">
            Stay tuned. Stay inspired. Stay connected.
          </p>
        </div>

        {/* BUTTONS */}
        <div className="hero-reveal mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">
          
          <button className="group h-[56px] sm:h-[58px] px-6 sm:px-8 md:px-10 rounded-full bg-black text-white text-[11px] sm:text-sm md:text-base font-bold uppercase tracking-[0.22em] sm:tracking-[2px] flex items-center justify-center gap-3 hover:bg-[#ec008c] transition-all duration-500">
            Explore Events

            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-all duration-300" />
          </button>

          <button className="h-[56px] sm:h-[58px] px-6 sm:px-8 md:px-10 rounded-full border border-black/10 bg-[#f5f5f5] text-black text-[11px] sm:text-sm md:text-base font-semibold hover:bg-black hover:text-white transition-all duration-500">
            View Newsroom
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative flex justify-center lg:justify-end">
        
        <div className="hero-image relative overflow-hidden rounded-[32px] sm:rounded-[40px] lg:rounded-[50px] shadow-2xl w-full max-w-[680px]">
          
          <Image
            src="/news-hero.jpg"
            alt="News Hero"
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

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* FLOATING CARD */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 rounded-[20px] sm:rounded-[25px] border border-black/5 bg-white/95 p-4 sm:p-5 backdrop-blur-xl">
            
            <p className="text-[10px] sm:text-xs uppercase tracking-[2px] sm:tracking-[3px] text-black/40 font-bold">
              Upcoming Events
            </p>

            <h3 className="mt-2 text-2xl sm:text-3xl font-black">
              48+
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* PODCAST SECTION */}
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
  <div className="pointer-events-none absolute left-[-5%] top-[5%] text-[22vw] font-black uppercase tracking-[-0.08em] text-black/[0.03]">
    PODCAST
  </div>

  <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
      {/* LEFT IMAGES */}
      <div className="relative">
        {/* MAIN IMAGE */}
        <div className="overflow-hidden rounded-[40px] border border-black/10 bg-black">
          <div className="relative overflow-hidden">
            <Image
              src="/podcast-main.jpg"
              alt="NoMAD Podcast"
              width={1200}
              height={1500}
              className="h-[720px] w-full object-cover grayscale transition-all duration-700 hover:scale-105 hover:grayscale-0"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/35" />
            <div className="absolute inset-0 bg-[#ec008c]/30 mix-blend-multiply" />

            {/* FLOATING CARD */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="rounded-[28px] border border-white/10 bg-black/20 p-6 backdrop-blur-xl">
                <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
                  The NoMAD Podcast
                </p>

                <h3 className="mt-4 text-4xl md:text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] text-white">
                  Think
                  <br />
                  Out Loud.
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* SMALL FLOATING IMAGE */}
        <div className="absolute -bottom-10 -right-4 hidden md:block overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-2xl">
          <Image
            src="/podcast-studio.jpg"
            alt="Podcast Studio"
            width={350}
            height={240}
            className="h-[220px] w-[300px] object-cover grayscale transition-all duration-700 hover:grayscale-0"
          />
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex flex-col justify-center">
        {/* LABEL */}
        <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
          Podcasts
        </p>

        {/* HEADING */}
        <div className="mt-6">
          <h2 className="text-[13vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-black">
            Think Out
          </h2>

          <h2 className="text-[13vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-[#ec008c]">
            Loud.
          </h2>
        </div>

        {/* SUBTITLE */}
        <p className="mt-6 text-lg sm:text-xl md:text-2xl font-semibold leading-[1.6] text-black">
          Great ideas don’t just live in portfolios.
          <br />
          They live in conversations.
        </p>

        {/* DESCRIPTION */}
        <div className="mt-8 max-w-2xl space-y-6">
          <p className="text-base sm:text-lg md:text-xl leading-[1.9] text-black/70">
            The NoMAD Podcast brings together some of the sharpest minds
            in advertising, design, branding, and creative leadership
            for honest, unfiltered conversations about the industry,
            the craft, and the future of creativity.
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-[1.9] text-black/70">
            From CCOs of global agencies to independent creative
            entrepreneurs, each episode goes beyond the résumé and into
            the real story — the risks taken, the briefs that changed
            everything, and the advice nobody tells you in a classroom.
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-[1.9] text-black/70">
            Whether you're a student finding your voice or a creative
            professional looking for perspective, there’s something in
            every episode worth taking back to your work.
          </p>
        </div>

        {/* FOOTER */}
        <div className="mt-10 flex flex-wrap items-center gap-5">
          <div className="flex items-center gap-4">
            <div className="h-px w-16 bg-[#ec008c]" />

            <p className="text-[11px] font-black uppercase tracking-[0.35em] text-black/40">
              New Episodes Regularly
            </p>
          </div>

          <button className="group h-[54px] rounded-full bg-black px-8 text-sm font-bold uppercase tracking-[2px] text-white transition-all duration-500 hover:bg-[#ec008c]">
            Listen Now
          </button>
        </div>
      </div>
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
