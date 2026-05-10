export default function Footer() {
  return (
    <footer className="bg-black text-white px-8 md:px-16 py-16 md:py-20 flex flex-col mt-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-10 md:gap-8 lg:gap-12 w-full max-w-[1600px] mx-auto text-[11px] md:text-[13px] tracking-wide leading-relaxed">
        {/* Col 1 */}
        <div className="lg:col-span-2 flex flex-col gap-6 text-white/80 pr-0 lg:pr-8">
          <div>
            <span className="font-bold text-white">Campus:</span> Kohinoor City,
            Kirol Road, Off LBS Marg,
            <br />
            Upper BKC, Mumbai – 400070, Maharashtra
          </div>

          <div>
            <span className="font-bold text-white">Admissions Office:</span>{" "}
            Rose Cottage Complex,
            <br />
            Dr SS Rao Marg, Next to Amit Industrial Estate,
            <br />
            Parel East, Mumbai - 400012, Maharashtra
          </div>

          <div>Email: hello@nomadcollege.in</div>

          <div>www.nomadcollege.in</div>
        </div>

        {/* Col 2 */}
        <div className="flex flex-col gap-6">
          <div className="font-bold uppercase text-white mb-2 tracking-wider">
            CONTACT
          </div>

          <div className="text-white/80 leading-snug">
            <div className="text-white mb-1">Mumbai</div>
            +91 98195 43130 /
            <br />
            +91 98195 43376
          </div>

          <div className="text-white/80 leading-snug">
            <div className="text-white mb-1">Bangalore</div>
            +91 98195 43375 /
            <br />
            +91 98336 21147
          </div>
        </div>

        {/* Col 3 */}
        <div className="flex flex-col gap-2 text-white/80">
          <div className="font-bold uppercase text-white mb-4 tracking-wider">
            STUDY
          </div>

          <div className="cursor-pointer hover:text-[#ec008c] transition-colors">
            Undergraduate Program
          </div>

          <div className="cursor-pointer hover:text-[#ec008c] transition-colors">
            Postgraduate Program
          </div>

          <div className="cursor-pointer hover:text-[#ec008c] transition-colors">
            Curriculum
          </div>

          <div className="cursor-pointer hover:text-[#ec008c] transition-colors">
            Global Exchange
          </div>

          <div className="cursor-pointer hover:text-[#ec008c] transition-colors">
            Internships
          </div>
        </div>

        {/* Col 4 */}
        <div className="flex flex-col gap-2 text-white/80">
          <div className="font-bold uppercase text-white mb-4 tracking-wider">
            WHY NOMAD
          </div>

          <div className="cursor-pointer hover:text-[#ec008c] transition-colors">
            Creative Intelligence
          </div>

          <div className="cursor-pointer hover:text-[#ec008c] transition-colors">
            Real Client Work
          </div>

          <div className="cursor-pointer hover:text-[#ec008c] transition-colors">
            Industry Mentors
          </div>

          <div className="cursor-pointer hover:text-[#ec008c] transition-colors">
            Global Exposure
          </div>

          <div className="cursor-pointer hover:text-[#ec008c] transition-colors">
            Portfolio First
          </div>
        </div>

        {/* Col 5 */}
        <div className="flex flex-col gap-2 text-white/80">
          <div className="font-bold uppercase text-white mb-4 tracking-wider">
            EXPLORE
          </div>

          <div className="cursor-pointer hover:text-[#ec008c] transition-colors">
            Student Work
          </div>

          <div className="cursor-pointer hover:text-[#ec008c] transition-colors">
            Alumni
          </div>

          <div className="cursor-pointer hover:text-[#ec008c] transition-colors">
            Faculty
          </div>

          <div className="cursor-pointer hover:text-[#ec008c] transition-colors">
            Campus Life
          </div>

          <div className="cursor-pointer hover:text-[#ec008c] transition-colors">
            Admissions
          </div>
        </div>

        {/* Col 6 */}
        <div className="flex flex-col gap-2 text-white/80">
          <div className="font-bold uppercase text-white mb-4 tracking-wider">
            QUICK LINKS
          </div>

          <div className="cursor-pointer hover:text-[#ec008c] transition-colors">
            Apply Now
          </div>

          <div className="cursor-pointer hover:text-[#ec008c] transition-colors">
            Download Brochure
          </div>

          <div className="cursor-pointer hover:text-[#ec008c] transition-colors">
            Visit Campus
          </div>

          <div className="cursor-pointer hover:text-[#ec008c] transition-colors">
            Contact Us
          </div>
        </div>
      </div>

      <div className="w-full text-center mt-20 pt-10 text-[20px] md:text-[28px] lg:text-[34px] font-medium tracking-tight">
        OPEN EDUCATION PVT. LTD.
      </div>
    </footer>
  );
}
