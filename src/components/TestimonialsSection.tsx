import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import thaboImg from "@/assets/Thabo_Nkosi.jpg";
import nalediImg from "@/assets/Naledi_Mokoena.jpg";
import siphoImg from "@/assets/Sipho_Radebe.jpg";
import leratoImg from "@/assets/Lerato_Khumalo.jpg";

const testimonials = [
  {
    image: thaboImg,
    name: "Thabo Nkosi",
    title: "Operations Manager, Johannesburg",
    text: "Mulaudzi Attorneys handled our complex commercial litigation matter with exceptional professionalism and attention to detail.",
  },
  {
    image: nalediImg,
    name: "Naledi Mokoena",
    title: "Small Business Owner, Pretoria",
    text: "Their friendly yet professional approach made a stressful situation much easier. I refer them to other entrepreneurs with legal issues",
  },
  {
    image: siphoImg,
    name: "Sipho Radebe",
    title: "Property Developer, Durban",
    text: "They are always accessible, explain legal concepts in plain language, and genuinely care about achieving the best outcome for their clients",
  },
  {
    image: leratoImg,
    name: "Lerato Khumalo",
    title: "HR Director, Cape Town",
    text: "Their knowledge of South African employment law is impressive, and they guided us step-by-step with sound, practical strategies.",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredQuote, setHoveredQuote] = useState<number | null>(null);

  const maxIndex = testimonials.length - 2;
  const next = () => setCurrentIndex((p) => (p >= maxIndex ? 0 : p + 1));
  const prev = () => setCurrentIndex((p) => (p <= 0 ? maxIndex : p - 1));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((p) => (p >= maxIndex ? 0 : p + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-secondary relative overflow-hidden">
      {/* Faded dotted background */}
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: `radial-gradient(circle, hsl(var(--gold)) 1px, transparent 1px)`,
        backgroundSize: '20px 20px',
      }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <p className="text-gold font-heading text-lg mb-2">Client Testimonials</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              What Our Clients Say
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border-2 border-gold text-gold hover:bg-gold hover:text-background flex items-center justify-center transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border-2 border-gold text-gold hover:bg-gold hover:text-background flex items-center justify-center transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (window.innerWidth < 768 ? 100 : 50)}%)` }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="min-w-[calc(100%-12px)] md:min-w-[calc(50%-12px)] flex-shrink-0 bg-background rounded-2xl p-6 md:p-8 relative shadow-sm"
                style={{
                  borderBottomWidth: '4px',
                  borderBottomStyle: 'solid',
                  borderBottomColor: 'hsl(var(--gold))',
                  borderBottomLeftRadius: '1rem',
                  borderBottomRightRadius: '1rem',
                  maxWidth: '520px',
                }}
              >
                {/* Quote icon top-right */}
                <div
                  className={`absolute top-0 right-0 w-16 h-16 rounded-bl-2xl rounded-tr-2xl flex items-center justify-center transition-colors duration-300 cursor-pointer ${
                    hoveredQuote === i ? "bg-gold" : "bg-secondary"
                  }`}
                  onMouseEnter={() => setHoveredQuote(i)}
                  onMouseLeave={() => setHoveredQuote(null)}
                >
                  <span className={`text-2xl font-bold transition-colors duration-300 ${hoveredQuote === i ? "text-foreground" : "text-gold"}`}>
                    ❝
                  </span>
                </div>

                {/* Avatar + Name */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-heading font-bold text-foreground text-lg">{t.name}</p>
                    <p className="font-body text-muted-foreground text-sm">{t.title}</p>
                    <div className="flex gap-0.5 mt-1">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Testimonial text */}
                <p className="font-body text-muted-foreground/80 text-sm leading-relaxed">
                  "{t.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
