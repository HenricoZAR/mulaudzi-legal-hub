import { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import glassesBg from "@/assets/glasses.jpg";
import johnImg from "@/assets/John_1.JPG";
import mmolediImg from "@/assets/Mmoledi2.jpg";
import davidImg from "@/assets/David.jpg";

const attorneys = [
  { image: johnImg, name: "Mr. John Mulaudzi", title: "Director" },
  { image: mmolediImg, name: "Mr. Mmoledi Malokane", title: "Consultant" },
  { image: davidImg, name: "Mr. David Mohale", title: "Candidate Attorney" },
];

const AttorneysSection = () => {
  const [startIdx, setStartIdx] = useState(0);

  const next = () => setStartIdx((p) => Math.min(p + 1, attorneys.length - 2));
  const prev = () => setStartIdx((p) => Math.max(p - 1, 0));

  const visibleAttorneys = attorneys.slice(startIdx, startIdx + 2);

  return (
    <section
      id="attorneys"
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${glassesBg})` }}
      >
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <p className="text-gold font-heading text-lg mb-2">Our Attorneys</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-background leading-tight mb-8">
            Qualified Team, Proven Results
          </h2>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-gold text-gold-foreground font-body font-semibold px-7 py-3.5 rounded-md hover:bg-background hover:text-foreground transition-all duration-300"
          >
            See Attorneys <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Attorney Cards */}
        <div className="flex-1 w-full">
          {/* Navigation Arrows */}
          <div className="flex justify-end gap-2 mb-4">
            <button
              onClick={prev}
              disabled={startIdx === 0}
              className="w-10 h-10 rounded-full bg-background/20 hover:bg-gold disabled:opacity-40 flex items-center justify-center transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-background" />
            </button>
            <button
              onClick={next}
              disabled={startIdx >= attorneys.length - 2}
              className="w-10 h-10 rounded-full bg-background/20 hover:bg-gold disabled:opacity-40 flex items-center justify-center transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-background" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {visibleAttorneys.map((attorney) => (
              <div
                key={attorney.name}
                className="group relative rounded-xl overflow-hidden border-b-4 border-gold bg-background cursor-pointer"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-[380px]">
                  <img
                    src={attorney.image}
                    alt={attorney.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gold hover overlay */}
                  <div className="absolute inset-0 bg-gold/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-background font-heading text-lg font-bold">{attorney.name}</p>
                      <p className="text-background/90 font-body text-sm">{attorney.title}</p>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 text-center">
                  <p className="font-heading text-foreground font-semibold">{attorney.name}</p>
                  <p className="font-body text-muted-foreground text-sm">{attorney.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttorneysSection;
