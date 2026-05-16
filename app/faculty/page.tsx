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

  const facultyMembers = [
  {
    name: "Partha Sinha",
    role: "Former President, The Times of India Group",
    image: "/faculty/magnific__enhance__83935-Photoroom.png",
  },
  {
    name: "S Somanaswar",
    role: "Chief Strategy Officer, Space Mule & More Group",
    image: "/faculty/image-Photoroom.png",
  },
  {
    name: "Suraja Kishore",
    role: "Former CEO, BBDO India",
    image: "/faculty/81527815-30a3-46ab-bc19-db4c86beab84-Photoroom.png",
  },
  {
    name: "Venkatagiri Rao",
    role: "CEO, Salt Brand Solutions",
    image: "/faculty/383754ef-d382-451d-86f3-7e55ba0eb71a-Photoroom.png",
  },
  {
    name: "Vikram Gaikwad",
    role: "Co-Founder & CEO, Hatched",
    image: "/faculty/71600560-be07-4ac8-8b13-37afb361c409-Photoroom.png",
  },
  {
    name: "Harshad Rajadhyaksha",
    role: "COO, Ogilvy India",
    image: "/faculty/d34ed8d1-5fc6-4ee9-9587-8d6a9de27d53-Photoroom.png",
  },
  {
    name: "Kainaz Karmakar",
    role: "CCO, Ogilvy India",
    image: "/faculty/36491651-cea3-41f5-87fb-0cb876c52023-Photoroom.png",
  },
  {
    name: "Burzin Mehta",
    role: "MD, Indigo Consulting",
    image: "/faculty/board_member1.png",
  },
  {
    name: "Sakshi Choudhary",
    role: "Creative Director, Ogilvy Chicago",
    image: "/faculty/pngtree-user-vector-avatar-png-image_1541962.jpg",
  },
  {
    name: "Aparsh Sinha",
    role: "Managing Partner & Strategy Lead",
    image: "/faculty/pngtree-user-vector-avatar-png-image_1541962.jpg",
  },
  {
    name: "Sachin Puri",
    role: "Founder, That’s Pet Ltd",
    image: "/faculty/pngtree-user-vector-avatar-png-image_1541962.jpg",
  },
  {
    name: "Saurabh Karandikar",
    role: "UX Analyst & Designer",
    image: "/faculty/pngtree-user-vector-avatar-png-image_1541962.jpg",
  },
  {
    name: "Ishan Mehta",
    role: "Senior Creative Director, L&K Saatchi & Saatchi",
    image: "/faculty/pngtree-user-vector-avatar-png-image_1541962.jpg",
  },
  {
    name: "Neville Shah",
    role: "Executive Creative Director, Ogilvy Mumbai",
    image: "/faculty/pngtree-user-vector-avatar-png-image_1541962.jpg",
  },
  {
    name: "Deep Chabria",
    role: "Creative Lead, NOTTI",
    image: "/faculty/pngtree-user-vector-avatar-png-image_1541962.jpg",
  },
  {
    name: "Navdeep Scott",
    role: "Former Group Creative Director, Famous Innovations",
    image: "/faculty/pngtree-user-vector-avatar-png-image_1541962.jpg",
  },
  {
    name: "Sarang Kulkarni",
    role: "Type Designer & Co-Founder, Ek Type",
    image: "/faculty/pngtree-user-vector-avatar-png-image_1541962.jpg",
  },
  {
    name: "Jimeet Panaskar",
    role: "Owner, Jimeet Panaskar Photography",
    image: "/faculty/pngtree-user-vector-avatar-png-image_1541962.jpg",
  },
  {
    name: "Keiki Tewary",
    role: "Creative Consultant, Voice Director",
    image: "/faculty/pngtree-user-vector-avatar-png-image_1541962.jpg",
  },
  {
    name: "Bhumika Shah",
    role: "Unit Creative Director, MullenLowe Lintas Group",
    image: "/faculty/pngtree-user-vector-avatar-png-image_1541962.jpg",
  },
  {
    name: "Goral Ajmera",
    role: "Founder & Creative Director, Brave",
    image: "/faculty/pngtree-user-vector-avatar-png-image_1541962.jpg",
  },
  {
    name: "Rajdeep Das",
    role: "CCO & CEO, Leo Burnett India",
    image: "/faculty/pngtree-user-vector-avatar-png-image_1541962.jpg",
  },
  {
    name: "Rebecca Daniel",
    role: "Dancer & Decorator",
    image: "/faculty/pngtree-user-vector-avatar-png-image_1541962.jpg",
  },
  {
    name: "Rohan Mathew",
    role: "Creative Partner, BBDO India",
    image: "/faculty/pngtree-user-vector-avatar-png-image_1541962.jpg",
  },
  {
    name: "Roy Menezes",
    role: "Partner & CCO, Centrick",
    image: "/faculty/pngtree-user-vector-avatar-png-image_1541962.jpg",
  },
  {
    name: "Ryan Mendonca",
    role: "Creative Consultant, MTV",
    image: "/faculty/pngtree-user-vector-avatar-png-image_1541962.jpg",
  },
  {
    name: "Vikram Pandey",
    role: "VCD, Leo Burnett",
    image: "/faculty/pngtree-user-vector-avatar-png-image_1541962.jpg",
  },
  {
    name: "Neil Chitnis",
    role: "Copywriter/Supervising Producer, MTV",
    image: "/faculty/pngtree-user-vector-avatar-png-image_1541962.jpg",
  },
  {
    name: "Anvi Mody",
    role: "Global Asst. Brand Manager, AOL",
    image: "/faculty/pngtree-user-vector-avatar-png-image_1541962.jpg",
  },
  {
    name: "Chirag Gander",
    role: "Co-Founder, The Minimalist",
    image: "/faculty/pngtree-user-vector-avatar-png-image_1541962.jpg",
  },
  {
    name: "Sameera Khan",
    role: "Co-Founder, 3point5",
    image: "/faculty/pngtree-user-vector-avatar-png-image_1541962.jpg",
  },
  {
    name: "Avni Chinoy",
    role: "CCO, Managing Partner, Gravity Integrated",
    image: "/faculty/pngtree-user-vector-avatar-png-image_1541962.jpg",
  },
];

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
<div className="relative z-10 w-full max-w-[720px]">
  
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
    
    <h1 className="hero-reveal split-text text-[15vw] sm:text-[11vw] md:text-[7vw] lg:text-[5.5vw] font-black uppercase leading-[0.84] tracking-[-0.055em]">
      Empowering
    </h1>

    <h1 className="hero-reveal split-text text-[15vw] sm:text-[11vw] md:text-[7vw] lg:text-[5.5vw] font-black uppercase leading-[0.84] tracking-[-0.055em] text-[#ec008c]">
      Creative Talent
    </h1>

    <h1 className="hero-reveal split-text text-[15vw] sm:text-[11vw] md:text-[7vw] lg:text-[5.5vw] font-black uppercase leading-[0.84] tracking-[-0.055em]">
      With The Best
    </h1>
  </div>

  {/* DESCRIPTION */}
  <div className="hero-reveal mt-6 sm:mt-8 max-w-[650px] space-y-6">
    
    <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-[1.7] text-black">
      Learn directly from the industry’s leading creative minds.
    </p>

    <p className="text-[15px] sm:text-lg md:text-xl leading-[1.9] text-black/70">
      At NoMAD, our esteemed faculty comprises renowned industry
      experts who guide students in forging their own creative
      pathways through real-world experiences.
    </p>

    <p className="text-[15px] sm:text-lg md:text-xl leading-[1.9] text-black/70">
      From advertising and branding to design, storytelling, and
      strategy — students gain insights from professionals actively
      shaping the global creative landscape.
    </p>

    <p className="text-[15px] sm:text-lg md:text-xl leading-[1.9] text-black/70">
      These experts help students build a unique creative voice,
      empowering them to grow with confidence, originality, and
      industry-ready thinking.
    </p>
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

   {/* FACULTY INTRO SECTION */}
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
  <div className="pointer-events-none absolute right-[-5%] top-[5%] select-none whitespace-nowrap text-[24vw] sm:text-[18vw] md:text-[14vw] lg:text-[10vw] font-black uppercase leading-none tracking-[-0.08em] text-white/[0.03]">
    MENTORS
  </div>

  {/* GLOW */}
  <div className="absolute left-[-120px] top-[20%] h-[320px] w-[320px] rounded-full bg-[#ec008c]/20 blur-[140px]" />

  <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    
    <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20 lg:items-center">
      
      {/* LEFT CONTENT */}
      <div>
        
        {/* LABEL */}
        <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 backdrop-blur-xl">
          
          <GraduationCap
            size={16}
            className="text-[#ec008c]"
          />

          <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.35em] text-white/70">
            Faculty & Mentorship
          </p>
        </div>

        {/* HEADING */}
        <div className="mt-8">
          <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-white">
            The People
          </h2>

          <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-[#ec008c]">
            Who Make
          </h2>

          <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-white">
            NoMAD, NoMAD.
          </h2>
        </div>

        {/* DESCRIPTION */}
        <div className="mt-10 max-w-3xl space-y-7">
          
          <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-[1.7] text-white">
            Faculty at NoMAD aren’t just teachers — they’re practitioners.
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-[1.95] text-white/70">
            Active professionals who have worked on real briefs,
            won real awards, and built real careers at some of
            the world’s most respected agencies and creative companies.
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-[1.95] text-white/70">
            They don’t teach from textbooks. They teach from
            experience. And that makes all the difference.
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-[1.95] text-white/70">
            Every faculty member brings the outside world into
            the classroom — current trends, live industry
            challenges, honest perspectives, and unfiltered
            creative insight you simply can’t get from a syllabus.
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-[1.95] text-white/70">
            This is mentorship the way it should be:
            direct, relevant, and built around who you
            want to become.
          </p>
        </div>

        {/* FOOTER */}
        <div className="mt-12 flex flex-wrap items-center gap-5">
          
          <div className="flex items-center gap-4">
            <div className="h-px w-16 bg-[#ec008c]" />

            <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.35em] text-white/40">
              Real Industry Mentorship
            </p>
          </div>

          <button className="group h-[54px] w-full sm:w-auto rounded-full bg-[#ec008c] px-8 text-sm font-bold uppercase tracking-[2px] text-white transition-all duration-500 hover:bg-white hover:text-black">
            Meet The Faculty
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative">
        
        {/* MAIN IMAGE */}
        <div className="overflow-hidden rounded-[28px] sm:rounded-[36px] md:rounded-[40px] border border-white/10 bg-black shadow-[0_20px_80px_rgba(0,0,0,0.25)]">
          
          <div className="relative overflow-hidden">
            <Image
              src="/team.png"
              alt="NoMAD Faculty"
              width={1200}
              height={1500}
              className="h-[420px] sm:h-[520px] md:h-[620px] lg:h-[760px] w-full object-cover grayscale transition-all duration-700 hover:scale-105 hover:grayscale-0"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute inset-0 bg-[#ec008c]/15 mix-blend-multiply" />

            {/* CONTENT */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
              
              <div className="rounded-[22px] sm:rounded-[28px] border border-white/10 bg-black/20 p-5 sm:p-6 backdrop-blur-xl">
                
                <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
                  Creative Leadership
                </p>

                <h3 className="mt-3 text-[11vw] sm:text-5xl md:text-6xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-white">
                  Learn
                  <br />
                  From
                  <br />
                  Practitioners.
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* FLOATING IMAGE */}
        <div className="absolute -bottom-6 -left-3 hidden lg:block overflow-hidden rounded-[24px] border border-white/10 bg-black shadow-2xl">
          
          {/*<Image
            src="/team.png"
            alt="Faculty Workshop"
            width={320}
            height={200}
            className="h-[220px] w-[300px] object-cover grayscale transition-all duration-700 hover:grayscale-0"
          />*/}
        </div>
      </div>
    </div>
  </div>
</section>

{/* FACULTY & ADMIN SECTION */}
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
  <div className="pointer-events-none absolute right-[-5%] top-[4%] select-none whitespace-nowrap text-[24vw] sm:text-[18vw] md:text-[14vw] lg:text-[10vw] font-black uppercase leading-none tracking-[-0.08em] text-black/[0.03]">
    PEOPLE
  </div>

  <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    
    {/* TOP */}
    <div className="max-w-5xl">
      
      <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
        Faculty & Leadership
      </p>

      <div className="mt-6 flex flex-wrap items-end gap-x-5 gap-y-2">
        <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-black">
          Meet
        </h2>

        <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-[#ec008c]">
          The Minds
        </h2>

        <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-black">
          Behind The Work.
        </h2>
      </div>

      <p className="mt-8 max-w-4xl text-base sm:text-lg md:text-xl leading-[1.9] text-black/70">
        Our faculty roster reads like a who's who of Indian creative
        excellence — Creative Directors, Brand Strategists, UX
        Practitioners, Entrepreneurs, and industry leaders shaping both
        the classroom and the creative world outside it.
      </p>
    </div>

    {/* FACULTY + ADMIN GRID */}
    <div className="mt-16 grid gap-8 lg:grid-cols-2">
      
      {/* FACULTY */}
      <div className="group overflow-hidden rounded-[30px] sm:rounded-[40px] border border-black/10 bg-black text-white">
        
        {/* IMAGE */}
        <div className="relative overflow-hidden">
          
          <Image
            src="/creative-team.jpg"
            alt="Faculty Profiles"
            width={1200}
            height={900}
            className="h-[320px] sm:h-[420px] md:h-[500px] w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
          />

          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-[#ec008c]/20 mix-blend-multiply" />

          {/* TITLE */}
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-8">
            
            <div className="rounded-[24px] border border-white/10 bg-black/20 p-5 backdrop-blur-xl">
              
              <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
                Faculty Profiles
              </p>

              <h3 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] text-white">
                Creative
                <br />
                Excellence.
              </h3>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-6 sm:p-8 md:p-10">
          
          <div className="space-y-6">
            <p className="text-base sm:text-lg md:text-xl leading-[1.9] text-white/70">
              Each faculty member brings a unique specialisation,
              a distinct creative voice, and years of experience
              across agencies, global networks, and independent studios.
            </p>

            <p className="text-base sm:text-lg md:text-xl leading-[1.9] text-white/70">
              They’ve won international awards, built iconic campaigns,
              and mentored the next generation of creative thinkers.
            </p>

            <p className="text-base sm:text-lg md:text-xl leading-[1.9] text-white/70">
              Individual faculty profiles — including background,
              specialisation, agency experience, and notable work —
              will be featured here.
            </p>
          </div>

          {/* FOOTER */}
          <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
            
            <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
              Industry Mentors
            </p>

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ec008c] text-sm font-black text-white">
              01
            </div>
          </div>
        </div>
      </div>

      {/* ADMIN */}
      <div className="group overflow-hidden rounded-[30px] sm:rounded-[40px] border border-black/10 bg-[#f7f7f7]">
        
        {/* IMAGE */}
        <div className="relative overflow-hidden">
          
          <Image
            src="/faculty_grid.png"
            alt="Admin Team"
            width={1200}
            height={900}
            className="h-[320px] sm:h-[420px] md:h-[500px] w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
          />

          <div className="absolute inset-0 bg-black/35" />

          {/* TITLE */}
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-8">
            
            <div className="rounded-[24px] border border-white/10 bg-white/80 p-5 backdrop-blur-xl">
              
              <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
                Admin Team
              </p>

              <h3 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] text-black">
                The People
                <br />
                Behind
                <br />
                NoMAD.
              </h3>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-6 sm:p-8 md:p-10">
          
          <div className="space-y-6">
            <p className="text-base sm:text-lg md:text-xl leading-[1.9] text-black/70">
              Behind every great creative institution is a strong
              operational backbone supporting students at every step.
            </p>

            <p className="text-base sm:text-lg md:text-xl leading-[1.9] text-black/70">
              From admissions and academic coordination to placements,
              student support, and campus operations — the admin team
              keeps the NoMAD experience running seamlessly.
            </p>

            <p className="text-base sm:text-lg md:text-xl leading-[1.9] text-black/70">
              Approachable, responsive, and genuinely invested in
              student success, they remain your support system from
              application to graduation and beyond.
            </p>
          </div>

          {/* FOOTER */}
          <div className="mt-10 flex items-center justify-between border-t border-black/10 pt-6">
            
            <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
              Student Support System
            </p>

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-sm font-black text-white">
              02
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* TESTIMONIALS */}
    <div className="mt-20">
      
      {/* TITLE */}
      <div className="max-w-4xl">
        
        <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ec008c]">
          Faculty Testimonials
        </p>

        <div className="mt-5 flex flex-wrap items-end gap-x-5 gap-y-2">
          
          <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-black">
            In Their
          </h2>

          <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-[#ec008c]">
            Own Words.
          </h2>
        </div>

        <p className="mt-6 text-base sm:text-lg md:text-xl leading-[1.9] text-black/70">
          What does it feel like to teach at an institution that refuses
          to be ordinary? Here’s what our faculty had to say.
        </p>
      </div>

      {/* TESTIMONIAL CARDS */}
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        
        {[
          {
            quote:
              "Teaching at NoMAD means you're never just going through the motions. The students push you as much as you push them.",
            name: "Harshad Rajadhyaksha",
            role: "COO, Ogilvy India",
          },
          {
            quote:
              "What I love most is that the briefs here are real. The energy in the classroom feels electric and immediate.",
            name: "Partha Sinha",
            role: "Former President, Times Group",
          },
          {
            quote:
              "NoMAD gave me the freedom to teach through doing, failing, and trying again. It’s the most honest form of creative education.",
            name: "Saurabh Karandikar",
            role: "UX Analyst & Designer",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="rounded-[28px] border border-black/10 bg-white p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_80px_rgba(0,0,0,0.08)]"
          >
            {/* NUMBER */}
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ec008c] text-sm font-black text-white">
              0{i + 1}
            </div>

            {/* QUOTE */}
            <p className="mt-8 text-lg sm:text-xl md:text-2xl leading-[1.8] tracking-[-0.02em] text-black">
              “{item.quote}”
            </p>

            {/* AUTHOR */}
            <div className="mt-10 border-t border-black/10 pt-6">
              
              <h4 className="text-lg font-black uppercase tracking-[-0.03em] text-black">
                {item.name}
              </h4>

              <p className="mt-2 text-[11px] font-black uppercase tracking-[0.3em] text-[#ec008c]">
                {item.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

   {/* FACULTY GRID SECTION */}
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

  {/* PINK GRADIENT */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(236,0,140,0.35),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(236,0,140,0.25),_transparent_30%)]" />

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/[0.25]" />

  {/* BG TEXT */}
  <div className="pointer-events-none absolute top-[3%] right-[-5%] select-none whitespace-nowrap text-[24vw] sm:text-[18vw] md:text-[14vw] lg:text-[10vw] font-black uppercase leading-none tracking-[-0.08em] text-white/[0.03]">
    Faculty
  </div>

  {/* GLOW */}
  <div className="absolute left-[-120px] top-[10%] h-[300px] w-[300px] rounded-full bg-[#ec008c]/20 blur-[120px]" />

  <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    
    {/* TOP */}
    <div className="max-w-5xl">
      
      <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#ffb3dd]">
        Faculty Profiles
      </p>

      <div className="mt-6 flex flex-wrap items-end gap-x-5 gap-y-2">
        
        <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-white">
          Meet The
        </h2>

        <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-[#ffb3dd]">
          Minds
        </h2>

        <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-white">
          Behind
        </h2>

        <h2 className="text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] font-black uppercase leading-[0.88] tracking-[-0.06em] text-[#ffb3dd]">
          The Work.
        </h2>
      </div>

      <p className="mt-8 max-w-4xl text-base sm:text-lg md:text-xl leading-[1.9] text-white/75">
        Creative Directors, Brand Strategists, UX Practitioners,
        Entrepreneurs, and industry leaders shaping the future of
        creativity — inside and outside the classroom.
      </p>
    </div>

    {/* FACULTY GRID */}
    <div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 sm:gap-6">
      
      {facultyMembers.map((item, i) => (
        <div
          key={i}
          className="group transition-all duration-500 hover:-translate-y-2"
        >
          {/* CARD */}
          <div className="rounded-[22px] border border-white/10 bg-white/[0.04] p-2 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.08] hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            
            {/* IMAGE */}
            <div className="relative overflow-hidden rounded-[18px]">
              
              <Image
                src={item.image}
                alt={item.name}
                width={500}
                height={600}
                className="aspect-[0.9] w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/20 transition-all duration-500 group-hover:bg-black/0" />
            </div>

            {/* CONTENT */}
            <div className="px-1 pb-2 pt-4">
              
              <h3 className="text-sm sm:text-base md:text-lg font-black uppercase leading-[1.15] tracking-[-0.03em] text-white">
                {item.name}
              </h3>

              <p className="mt-2 text-[10px] sm:text-[11px] md:text-xs uppercase leading-[1.5] tracking-[0.18em] text-white/60 font-black">
                {item.role}
              </p>
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
