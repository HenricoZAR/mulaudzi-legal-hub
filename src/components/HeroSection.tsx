import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, Star } from "lucide-react";
import heroBg from "@/assets/jmweb1.jpg";
import heroImg1 from "@/assets/hero_1_1.jpg";
import heroImg2 from "@/assets/hero_1_2.png";
import rating1 from "@/assets/small-rating1.png";
import rating2 from "@/assets/small-rating2.png";
import rating3 from "@/assets/small-rating3.png";

const slides = [
  {
    subtitle: "Trustworthy and Dependable",
    title: "Customised Solutions",
    image: heroImg1,
  },
  {
    subtitle: "Your Guardian In Law",
    title: "To Complex Legal Solutions",
    image: heroImg2,
  },
];

const ratingImages = [rating1, rating2, rating3];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setAnimating(true);
      }, 100);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 py-20">
        {/* Left: Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <p
            className={`text-gold font-heading text-lg mb-3 transition-opacity duration-300 ${animating ? "opacity-100" : "opacity-0"}`}
          >
            {slide.subtitle}
          </p>
          <h1
            className={`text-background font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 transition-opacity duration-300 ${
              animating ? "opacity-100" : "opacity-0"
            }`}
          >
            {slide.title}
          </h1>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gold text-gold-foreground font-body font-semibold px-7 py-3.5 rounded-md hover:bg-background hover:text-foreground transition-all duration-300"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </a>

          {/* Testimonial */}
          <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 lg:items-start">
            <div className="flex -space-x-3">
              {ratingImages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Client ${i + 1}`}
                  className="w-10 h-10 rounded-full border-2 border-background object-cover"
                />
              ))}
            </div>
            <div>
              <p className="text-background font-body text-sm font-medium">More than +2k happy clients</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <span className="text-background/60 font-body text-xs">4.5/5 (15k+ Reviews)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Slide Image */}
        <div className="flex-1 flex justify-center lg:justify-end pl-4 lg:pl-8">
          <div className="relative">
            {/* Gold decorative border */}
            <div className="absolute -inset-3 border-2 border-gold rounded-tr-3xl rounded-bl-3xl rounded-tl-none rounded-br-none z-0" />
            <img
              src={slide.image}
              alt={slide.subtitle}
              className={`relative z-10 w-[320px] md:w-[400px] lg:w-[450px] h-[400px] md:h-[480px] lg:h-[520px] object-cover rounded-tr-3xl rounded-bl-3xl transition-opacity duration-500 ${animating ? "opacity-100" : "opacity-0"}`}
            />
          </div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-6 right-6 w-12 h-12 bg-foreground hover:bg-gold rounded-full flex items-center justify-center transition-colors z-20 group"
        aria-label="Scroll to About"
      >
        <ChevronDown className="w-5 h-5 text-background group-hover:text-gold-foreground" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setAnimating(false); setTimeout(() => { setCurrentSlide(i); setAnimating(true); }, 100); }}
            className={`w-3 h-3 rounded-full transition-all ${i === currentSlide ? "bg-gold w-8" : "bg-background/50"}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
