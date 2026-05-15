"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

import Header from "@/components/header";
import Footer from "@/components/footer";

import { ArrowRight, Mail, Phone, MapPin, Clock3, Send } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  useEffect(() => {
    ScrollTrigger.config({
      ignoreMobileResize: true,
    });

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

    gsap.utils.toArray(".fade-section").forEach((section: any) => {
      gsap.fromTo(
        section,
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power4.out",
          clearProps: "all",

          scrollTrigger: {
            trigger: section,
            start: "top 90%",
          },
        },
      );
    });

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      gsap.killTweensOf(".hero-reveal");
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-[#efefef] text-black overflow-x-hidden">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden min-h-screen pb-20 md:pb-32">
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
        <div className="absolute top-[10%] left-[-5%] text-[25vw] md:text-[16vw] font-black uppercase text-black/[0.03] leading-none select-none pointer-events-none">
          Contact
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 md:pt-44 lg:pt-48 relative z-10">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-20 items-start">
            {/* LEFT */}
            <div>
              <div className="hero-reveal inline-flex items-center gap-3 border border-black/10 bg-[#f5f5f5] px-4 sm:px-5 py-3 rounded-full mb-8 md:mb-10">
                <Send size={18} className="text-[#ec008c]" />

                <span className="uppercase tracking-[3px] sm:tracking-[4px] text-[10px] sm:text-xs font-bold">
                  Contact Our Team
                </span>
              </div>

              <div>
                <div className="overflow-hidden pb-3 md:pb-4">
                  <h1 className="split-text text-[18vw] sm:text-[14vw] md:text-[9vw] lg:text-[7vw] xl:text-[6vw] font-black uppercase leading-[0.9] tracking-[-0.05em]">
                    Let’s
                  </h1>
                </div>

                <div className="overflow-hidden pb-3 md:pb-4">
                  <h1 className="split-text text-[18vw] sm:text-[14vw] md:text-[9vw] lg:text-[7vw] xl:text-[6vw] font-black uppercase leading-[0.9] tracking-[-0.05em] text-[#ec008c]">
                    Connect
                  </h1>
                </div>

                <div className="overflow-hidden pb-3 md:pb-4">
                  <h1 className="split-text text-[18vw] sm:text-[14vw] md:text-[9vw] lg:text-[7vw] xl:text-[6vw] font-black uppercase leading-[0.9] tracking-[-0.05em]">
                    Today
                  </h1>
                </div>
              </div>

              <p className="hero-reveal mt-6 md:mt-8 max-w-[650px] text-base sm:text-lg md:text-xl text-black/70 leading-relaxed md:leading-[1.8]">
                Have questions about admissions, programs, campus life, or
                partnerships? Our team is ready to help you.
              </p>

        
            </div>

            {/* FORM */}
            <div className="fade-section relative opacity-100">
              {/* PINK SHADOW */}
             

              <div className="relative rounded-[30px] sm:rounded-[50px] bg-[#f5f5f5] border border-black/5 p-5 sm:p-8 md:p-10">
                <div className="mb-8 md:mb-10">
                  <p className="uppercase tracking-[4px] text-[#ec008c] font-bold text-xs sm:text-sm">
                    Send Message
                  </p>

                  <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-[0.9]">
                    Contact Form
                  </h2>
                </div>

                <form className="space-y-5 md:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full h-[54px] sm:h-[58px] px-5 rounded-full bg-white border border-black/10 outline-none focus:border-[#ec008c] transition-all"
                    />

                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full h-[54px] sm:h-[58px] px-5 rounded-full bg-white border border-black/10 outline-none focus:border-[#ec008c] transition-all"
                    />
                  </div>

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full h-[54px] sm:h-[58px] px-5 rounded-full bg-white border border-black/10 outline-none focus:border-[#ec008c] transition-all"
                  />

                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full h-[54px] sm:h-[58px] px-5 rounded-full bg-white border border-black/10 outline-none focus:border-[#ec008c] transition-all"
                  />

                  <textarea
                    placeholder="Write your message..."
                    rows={6}
                    className="w-full p-5 rounded-[24px] sm:rounded-[30px] bg-white border border-black/10 outline-none focus:border-[#ec008c] transition-all resize-none"
                  />

                  <button className="group w-full h-[54px] sm:h-[58px] rounded-full bg-black text-white uppercase tracking-[3px] font-bold flex items-center justify-center gap-3 hover:bg-[#ec008c] transition-all duration-500">
                    Send Message
                    <ArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT INFO SECTION */}
<section className="relative overflow-hidden bg-white py-20 sm:py-24 md:py-32">
  
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
  <div className="pointer-events-none absolute right-[-5%] top-[10%] select-none text-[24vw] md:text-[14vw] font-black uppercase leading-none tracking-[-0.08em] text-black/[0.03]">
    Connect
  </div>

  <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    
    {/* TOP */}
    <div className="max-w-5xl">
      
      <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.35em] text-[#ec008c]">
        Contact Information
      </p>

      <div className="mt-5 flex flex-wrap items-end gap-x-5 gap-y-2">
        
        <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-black">
          Reach
        </h2>

        <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-[#ec008c]">
          Out
        </h2>

        <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-black">
          Anytime.
        </h2>
      </div>

      <p className="mt-8 max-w-4xl text-base sm:text-lg md:text-xl leading-[1.9] text-black/70">
        Whether you're exploring admissions, partnerships,
        programs, or campus life — our team is here to help.
      </p>
    </div>

    {/* CONTACT GRID */}
    <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      
      {[
        {
          icon: MapPin,
          title: "Campus Address",
          value:
            "Kohinoor City, Kirol Road, Off LBS Marg, Upper BKC, Mumbai – 400070, Maharashtra",
          dark: false,
        },

        {
          icon: MapPin,
          title: "Admissions Office",
          value:
            "Rose Cottage Complex, Dr SS Rao Marg, Next to Amit Industrial Estate, Parel East, Mumbai – 400012, Maharashtra",
          dark: true,
        },

        {
          icon: Phone,
          title: "Mumbai Contact",
          value: "9819543130 / 9819543376",
          dark: false,
        },

        {
          icon: Phone,
          title: "Bangalore Contact",
          value: "9819543375 / 9833621147",
          dark: false,
        },

        {
          icon: Mail,
          title: "Email Address",
          value: "info@nomadcollege.in",
          dark: false,
          full: true,
        },
      ].map((item, index) => (
        
        <div
          key={index}
          className={`
            fade-section
            group
            relative
            overflow-hidden
            rounded-[28px]
            border
            p-5
            sm:p-6
            md:p-7
            transition-all
            duration-500
            hover:-translate-y-2
            ${
              item.dark
                ? "border-white/10 bg-black text-white"
                : "border-black/10 bg-[#f5f5f5] text-black"
            }
            ${item.full ? "md:col-span-2 xl:col-span-1" : ""}
          `}
        >
          {/* GLOW */}
          <div className="absolute right-[-60px] top-[-60px] h-[140px] w-[140px] rounded-full bg-[#ec008c]/10 blur-[60px]" />

          {/* ICON */}
          <div
            className={`
              relative z-10
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              transition-all
              duration-500
              ${
                item.dark
                  ? "bg-white text-black"
                  : "bg-black text-white group-hover:bg-[#ec008c]"
              }
            `}
          >
            <item.icon size={22} />
          </div>

          {/* CONTENT */}
          <div className="relative z-10 mt-8">
            
            <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
              {item.title}
            </p>

            <div
              className={`
                mt-4 h-px w-16
                ${item.dark ? "bg-white/10" : "bg-black/10"}
              `}
            />

            <h3
              className={`
                mt-5
                text-lg
                sm:text-xl
                md:text-2xl
                font-black
                leading-[1.6]
                tracking-[-0.03em]
                break-words
                ${
                  item.dark
                    ? "text-white"
                    : "text-black"
                }
              `}
            >
              {item.value}
            </h3>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* MAP */}
      <section className="py-20 md:py-32 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="uppercase tracking-[4px] text-[#ec008c] font-bold text-xs sm:text-sm mb-5">
              Visit Our Campus
            </p>

            <h2 className="split-text text-[14vw] md:text-[6vw] text-white font-black uppercase leading-[0.85] tracking-[-0.05em]">
              Find Us
            </h2>
          </div>

          <div className="fade-section overflow-hidden rounded-[30px] md:rounded-[50px] border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyBVizdQeh3udy11xDc5Ao2YStR2gLc-rfc&amp;origin=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland&amp;destination=1%20Fitzwilliam%20Street%20Lower%2C%20Dublin%2C%20Ireland&amp;mode=driving&amp;maptype=roadmap&amp;zoom=14"
              width="100%"
              height="600"
              loading="lazy"
              className="w-full h-[320px] sm:h-[420px] md:h-[600px] grayscale invert border-0"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-[#ec008c] text-white text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-[15vw] md:text-[6vw] font-black uppercase leading-[0.82] tracking-[-0.05em]">
            Start Your Journey
          </h2>

          <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            Connect with our admissions and academic team today.
          </p>

          <button className="mt-10 md:mt-12 w-full sm:w-auto h-[54px] sm:h-[60px] px-8 md:px-10 rounded-full bg-black text-white uppercase tracking-[3px] font-bold hover:bg-white hover:text-black transition-all duration-500">
            Apply Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
