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
                <Sparkles size={16} className="text-[#ec008c] shrink-0" />

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
                  NoMAD College of Creative Intelligence is never standing
                  still.
                </p>

                <p className="text-[15px] sm:text-lg md:text-xl text-black/70 leading-[1.9]">
                  From global award stages to industry podcasts, campus events
                  to international collaborations — there’s always something
                  happening in the NoMAD universe.
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

            

                {/* FLOATING CARD */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 rounded-[20px] sm:rounded-[25px] border border-black/5 bg-white/95 p-4 sm:p-5 backdrop-blur-xl">
                  <p className="text-[10px] sm:text-xs uppercase tracking-[2px] sm:tracking-[3px] text-black/40 font-bold">
                    Upcoming Events
                  </p>

                  <h3 className="mt-2 text-2xl sm:text-3xl font-black">48+</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWS CONTENT SECTIONS */}
      <section className="relative overflow-hidden bg-[#111111] py-14 sm:py-16 md:py-20 lg:py-24">
        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
        linear-gradient(to right, white 1px, transparent 1px),
        linear-gradient(to bottom, white 1px, transparent 1px)
      `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* BG TEXT */}
        <div className="pointer-events-none absolute right-[-5%] top-[3%] text-[22vw] font-black uppercase tracking-[-0.08em] text-white/[0.03]">
          CULTURE
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* PODCAST SECTION */}
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 xl:gap-20 lg:items-center">
            {/* LEFT IMAGE */}
            <div className="relative">
              <div className="overflow-hidden rounded-[28px] sm:rounded-[36px] md:rounded-[40px] border border-white/10 bg-black shadow-[0_20px_80px_rgba(0,0,0,0.2)]">
                <div className="relative overflow-hidden">
                  <Image
                    src="/think_out_loard.png"
                    alt="NoMAD Podcast"
                    width={1200}
                    height={1500}
                    className="h-[420px] sm:h-[520px] md:h-[620px] lg:h-[760px] w-full object-cover grayscale transition-all duration-700 hover:scale-105 hover:grayscale-0"
                  />

                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute inset-0 bg-[#ec008c]/20 mix-blend-multiply" />

                  {/* CONTENT */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                    <div className="rounded-[22px] sm:rounded-[28px] border border-white/10 bg-black/20 p-5 sm:p-6 backdrop-blur-xl">
                      <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
                        Podcasts
                      </p>

                      <h3 className="mt-3 text-[11vw] sm:text-5xl md:text-6xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-white">
                        Think
                        <br />
                        Out Loud.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
                The NoMAD Podcast
              </p>

              <div className="mt-5">
                <h2 className="text-[14vw] sm:text-[11vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-white">
                  Great Ideas
                </h2>

                <h2 className="text-[14vw] sm:text-[11vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-[#ec008c]">
                  Live In
                </h2>

                <h2 className="text-[14vw] sm:text-[11vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-white">
                  Conversations.
                </h2>
              </div>

              <div className="mt-8 space-y-6 max-w-2xl">
                <p className="text-base sm:text-lg md:text-xl leading-[1.9] text-white/70">
                  The NoMAD Podcast brings together some of the sharpest minds
                  in advertising, design, branding, and creative leadership for
                  honest, unfiltered conversations about the industry, the
                  craft, and the future of creativity.
                </p>

                <p className="text-base sm:text-lg md:text-xl leading-[1.9] text-white/70">
                  From CCOs of global agencies to independent creative
                  entrepreneurs, each episode goes beyond the résumé and into
                  the real story — the risks taken, the briefs that changed
                  everything, and the advice nobody tells you in a classroom.
                </p>

                <p className="text-base sm:text-lg md:text-xl leading-[1.9] text-white/70">
                  New episodes dropping regularly. Listen wherever you get your
                  podcasts.
                </p>
              </div>

              <button className="mt-10 h-[54px] rounded-full bg-[#ec008c] px-8 text-sm font-bold uppercase tracking-[2px] text-white transition-all duration-500 hover:bg-white hover:text-black">
                Listen Now
              </button>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="my-20 h-px w-full bg-white/10" />

          {/* BLOG SECTION */}
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20 lg:items-center">
            {/* LEFT CONTENT */}
            <div className="order-2 lg:order-1">
              <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
                Blogs
              </p>

              <div className="mt-5">
                <h2 className="text-[14vw] sm:text-[11vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-white">
                  The NoMAD
                </h2>

                <h2 className="text-[14vw] sm:text-[11vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-[#ec008c]">
                  Edit.
                </h2>
              </div>

              <div className="mt-8 space-y-6 max-w-2xl">
                <p className="text-base sm:text-lg md:text-xl leading-[1.9] text-white/70">
                  Ideas deserve to be shared. The NoMAD Blog is a space for
                  students, faculty, alumni, and industry voices to write,
                  reflect, and provoke.
                </p>

                <p className="text-base sm:text-lg md:text-xl leading-[1.9] text-white/70">
                  From deep dives into campaign craft and design thinking to
                  opinion pieces on where the industry is headed — The NoMAD
                  Edit is where the community thinks out loud.
                </p>

                <p className="text-base sm:text-lg md:text-xl leading-[1.9] text-white/70">
                  Whether you want to understand a creative movement, learn from
                  campaign breakdowns, or stay sharp on what’s happening in
                  advertising and design globally, the blog keeps you connected
                  to the conversation.
                </p>
              </div>

              <button className="mt-10 h-[54px] rounded-full bg-white px-8 text-sm font-bold uppercase tracking-[2px] text-black transition-all duration-500 hover:bg-[#ec008c] hover:text-white">
                Read Articles
              </button>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative order-1 lg:order-2">
              <div className="overflow-hidden rounded-[28px] sm:rounded-[36px] md:rounded-[40px] border border-white/10 bg-black shadow-[0_20px_80px_rgba(0,0,0,0.2)]">
                <div className="relative overflow-hidden">
                  <Image
                    src="/idea_worth.png"
                    alt="The NoMAD Edit"
                    width={1200}
                    height={1500}
                    className="h-[420px] sm:h-[520px] md:h-[620px] lg:h-[760px] w-full object-cover grayscale transition-all duration-700 hover:scale-105 hover:grayscale-0"
                  />

                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute inset-0 bg-[#ec008c]/15 mix-blend-multiply" />

                  {/* CONTENT */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                    <div className="rounded-[22px] sm:rounded-[28px] border border-white/10 bg-black/20 p-5 sm:p-6 backdrop-blur-xl">
                      <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
                        Creative Writing
                      </p>

                      <h3 className="mt-3 text-[11vw] sm:text-5xl md:text-6xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-white">
                        Ideas
                        <br />
                        Worth
                        <br />
                        Sharing.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="my-20 h-px w-full bg-white/10" />

          {/* MEDIA SECTION */}
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 xl:gap-20 lg:items-center">
            {/* LEFT IMAGE */}
            <div className="relative">
              <div className="overflow-hidden rounded-[28px] sm:rounded-[36px] md:rounded-[40px] border border-white/10 bg-black shadow-[0_20px_80px_rgba(0,0,0,0.2)]">
                <div className="relative overflow-hidden">
                  <Image
                    src="/in_the_world.png"
                    alt="Media Centre"
                    width={1200}
                    height={1500}
                    className="h-[420px] sm:h-[520px] md:h-[620px] lg:h-[760px] w-full object-cover grayscale transition-all duration-700 hover:scale-105 hover:grayscale-0"
                  />

                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute inset-0 bg-[#ec008c]/20 mix-blend-multiply" />

                  {/* CONTENT */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                    <div className="rounded-[22px] sm:rounded-[28px] border border-white/10 bg-black/20 p-5 sm:p-6 backdrop-blur-xl">
                      <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
                        Media Centre
                      </p>

                      <h3 className="mt-3 text-[11vw] sm:text-5xl md:text-6xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-white">
                        NoMAD
                        <br />
                        In The
                        <br />
                        World.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
                NoMAD Media Centre
              </p>

              <div className="mt-5">
                <h2 className="text-[14vw] sm:text-[11vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-white">
                  Stories
                </h2>

                <h2 className="text-[14vw] sm:text-[11vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-[#ec008c]">
                  Beyond
                </h2>

                <h2 className="text-[14vw] sm:text-[11vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-white">
                  The Campus.
                </h2>
              </div>

              <div className="mt-8 space-y-6 max-w-2xl">
                <p className="text-base sm:text-lg md:text-xl leading-[1.9] text-white/70">
                  The NoMAD Media Centre is your destination for everything the
                  college has put out into the world — and everything the world
                  has said about us.
                </p>

                <p className="text-base sm:text-lg md:text-xl leading-[1.9] text-white/70">
                  Browse video features, campaign showcases, student work
                  highlights, faculty interviews, and coverage from leading
                  industry publications.
                </p>

                <p className="text-base sm:text-lg md:text-xl leading-[1.9] text-white/70">
                  From behind-the-scenes glimpses of student life to
                  award-winning projects and global internship experiences, the
                  Media Centre captures what makes NoMAD unlike any other
                  creative institution.
                </p>
              </div>

              <button className="mt-10 h-[54px] rounded-full bg-[#ec008c] px-8 text-sm font-bold uppercase tracking-[2px] text-white transition-all duration-500 hover:bg-white hover:text-black">
                Explore Media
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PRESS & EVENTS SECTION */}
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
        <div className="pointer-events-none absolute left-[-5%] top-[4%] text-[22vw] font-black uppercase tracking-[-0.08em] text-black/[0.03]">
          EVENTS
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* TOP INTRO */}
          <div className="max-w-5xl">
            <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
              Press Releases & Events
            </p>

            <div className="mt-6 flex flex-wrap items-end gap-x-5 gap-y-2">
              <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-black">
                Creativity
              </h2>

              <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-[#ec008c]">
                Beyond
              </h2>

              <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-black">
                The Campus.
              </h2>
            </div>

            <p className="mt-8 max-w-4xl text-base sm:text-lg md:text-xl leading-[1.9] text-black/70">
              From official announcements and national creative gatherings to
              global collaborations and international showcases — NoMAD keeps
              students connected to the conversations shaping the future of
              creativity.
            </p>
          </div>

          {/* CARDS */}
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {/* PRESS RELEASES */}
            <div className="group overflow-hidden rounded-[30px] sm:rounded-[36px] border border-black/10 bg-[#f8f8f8] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <Image
                  src="/official_announcement.png"
                  alt="Press Releases"
                  width={900}
                  height={700}
                  className="h-[280px] sm:h-[320px] w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/30 px-4 py-2 backdrop-blur-xl">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white">
                    Press Releases
                  </p>
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-3xl sm:text-4xl font-black uppercase leading-[0.9] tracking-[-0.05em] text-white">
                    Official
                    <br />
                    Announcements.
                  </h3>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6 sm:p-8">
                <p className="text-base sm:text-lg leading-[1.9] text-black/70">
                  This is where NoMAD speaks on the record. Explore official
                  announcements, program launches, academic partnerships,
                  industry collaborations, award recognitions, and institutional
                  milestones.
                </p>

                <p className="mt-6 text-base sm:text-lg leading-[1.9] text-black/70">
                  Journalists, media professionals, and industry stakeholders
                  can find accurate and up-to-date information about NoMAD
                  College of Creative Intelligence and Miami Ad School India
                  here.
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-6">
                  <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
                    Media Enquiries
                  </p>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-sm font-black text-white">
                    01
                  </div>
                </div>
              </div>
            </div>

            {/* NATIONAL EVENTS */}
            <div className="group overflow-hidden rounded-[30px] sm:rounded-[36px] border border-black/10 bg-black text-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_80px_rgba(0,0,0,0.15)]">
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <Image
                  src="/made_in_india.png"
                  alt="National Events"
                  width={900}
                  height={700}
                  className="h-[280px] sm:h-[320px] w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />

                <div className="absolute inset-0 bg-black/45" />
                <div className="absolute inset-0 bg-[#ec008c]/15 mix-blend-multiply" />

                <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/30 px-4 py-2 backdrop-blur-xl">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white">
                    National Events
                  </p>
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-3xl sm:text-4xl font-black uppercase leading-[0.9] tracking-[-0.05em] text-white">
                    Made In India.
                    <br />
                    Built For
                    <br />
                    The World.
                  </h3>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6 sm:p-8">
                <p className="text-base sm:text-lg leading-[1.9] text-white/70">
                  NoMAD’s national events calendar is where the Indian creative
                  industry comes together through portfolio reviews, guest
                  lectures, creative competitions, panel discussions, and open
                  campus experiences.
                </p>

                <p className="mt-6 text-base sm:text-lg leading-[1.9] text-white/70">
                  Past events have featured Creative Directors, Brand
                  Strategists, Digital Innovators, and Entrepreneurs from some
                  of India’s most respected agencies and brands.
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                  <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
                    Upcoming Experiences
                  </p>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ec008c] text-sm font-black text-white">
                    02
                  </div>
                </div>
              </div>
            </div>

            {/* INTERNATIONAL EVENTS */}
            <div className="group overflow-hidden rounded-[30px] sm:rounded-[36px] border border-black/10 bg-[#f8f8f8] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <Image
                  src="/international-events.png"
                  alt="International Events"
                  width={900}
                  height={700}
                  className="h-[280px] sm:h-[320px] w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/30 px-4 py-2 backdrop-blur-xl">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white">
                    International Events
                  </p>
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-3xl sm:text-4xl font-black uppercase leading-[0.9] tracking-[-0.05em] text-white">
                    A Front Row
                    <br />
                    Seat To
                    <br />
                    The World.
                  </h3>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6 sm:p-8">
                <p className="text-base sm:text-lg leading-[1.9] text-black/70">
                  Through Miami Ad School’s global network, NoMAD students gain
                  access to international award shows, creative exchanges,
                  cross-campus collaborations, and internship showcases across
                  16 campuses worldwide.
                </p>

                <p className="mt-6 text-base sm:text-lg leading-[1.9] text-black/70">
                  From Cannes Lions to global creative summits, students are
                  exposed to worldwide creative perspectives that extend far
                  beyond Mumbai.
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-6">
                  <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
                    Global Opportunities
                  </p>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-sm font-black text-white">
                    03
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
