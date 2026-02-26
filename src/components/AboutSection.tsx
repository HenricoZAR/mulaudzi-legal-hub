import { ArrowRight, Check } from "lucide-react";
import aboutLeft from "@/assets/about-1-left.jpg";
import aboutJohn from "@/assets/John.jpg";
import aboutRight2 from "@/assets/about-1-right-2.jpg";
import aboutCircle from "@/assets/about-circle.png";
import aboutGavel from "@/assets/about-gavel.png";

const bulletPoints = [
  "We help clients understand their legal rights and obligations",
  "We provide clients with information, guidance and support",
  "All legal documentation are accurate and legally binding",
  "Courtroom Representation by our lawyers",
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-secondary py-20 lg:py-28 relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left: Image Grid */}
        <div className="flex-1 relative">
          <div className="grid grid-cols-5 gap-3 max-w-[520px] mx-auto lg:mx-0">
            {/* Large left image */}
            <div className="col-span-3 row-span-2 relative">
              <div className="absolute -inset-2 border-2 border-gold rounded-tl-2xl rounded-bl-2xl rounded-br-2xl z-0" />
              <img
                src={aboutLeft}
                alt="Scales of justice"
                className="relative z-10 w-full h-full object-cover rounded-tl-2xl rounded-bl-2xl rounded-br-2xl"
                style={{ minHeight: "380px" }}
              />
            </div>

            {/* Top right */}
            <div className="col-span-2">
              <img
                src={aboutJohn}
                alt="Mr. John Mulaudzi"
                className="w-full h-[185px] object-cover rounded-tl-2xl rounded-tr-2xl rounded-br-2xl"
              />
            </div>

            {/* Bottom right */}
            <div className="col-span-2">
              <img
                src={aboutRight2}
                alt="Gavel on book"
                className="w-full h-[185px] object-cover rounded-tr-2xl rounded-bl-2xl rounded-br-2xl"
              />
            </div>
          </div>

          {/* Rotating Circle Badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative w-28 h-28">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-gold" />
              {/* Black circle center */}
              <div className="absolute inset-2 rounded-full bg-foreground border border-gold flex items-center justify-center">
                <img src={aboutCircle} alt="MJ Monogram" className="w-12 h-12 object-contain" />
              </div>
              {/* Rotating text */}
              <svg className="absolute inset-0 w-full h-full animate-rotate-slow" viewBox="0 0 112 112">
                <defs>
                  <path id="circlePath" d="M56,56 m-48,0 a48,48 0 1,1 96,0 a48,48 0 1,1 -96,0" />
                </defs>
                <text fill="hsl(42, 90%, 46%)" fontSize="8.5" fontFamily="Satoshi, sans-serif" fontWeight="600" letterSpacing="3">
                  <textPath href="#circlePath">MULAUDZI JOHN INCORPORATED ATTORNEYS •</textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex-1">
          <p className="text-gold font-heading text-lg mb-2">About Us</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">
            Welcome To Mulaudzi John Incorporated
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-8">
            Mulaudzi John Incorporated Attorneys is a black-owned law firm committed to offering value adding and innovative legal services to its clients. Based in Woodmead, Johannesburg, the firm covers a large spectrum of legal services.
          </p>

          <ul className="space-y-3 mb-8">
            {bulletPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 font-body text-foreground">
                <div className="w-5 h-5 rounded-full bg-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-gold-foreground" />
                </div>
                <span className="text-sm">{point}</span>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-gold text-gold-foreground font-body font-semibold px-7 py-3.5 rounded-md hover:bg-background hover:text-foreground border border-transparent hover:border-gold transition-all duration-300"
            >
              More About Us <ArrowRight className="w-4 h-4" />
            </a>

            {/* Floating Gavel */}
            <img
              src={aboutGavel}
              alt="Gavel"
              className="w-20 h-20 object-contain animate-gavel-float hidden md:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
