import { Handshake, ClipboardCheck, Scale } from "lucide-react";
import jmweb2 from "@/assets/jmweb2.jpg";

const steps = [
  {
    icon: Handshake,
    title: "Initial Consultation",
    description:
      "Our experienced lawyers thoroughly analyze the facts of each case, and applies the relevant laws to form a legal defense.",
  },
  {
    icon: ClipboardCheck,
    title: "Case Evaluation",
    description:
      "We prioritize understanding your concerns and aligning with your goals. Your satisfaction is our top priority.",
  },
  {
    icon: Scale,
    title: "Legal Strategy",
    description:
      "We develop a customised plan to protect your rights and achieve the best possible outcome.",
  },
];

const WorkProcessSection = () => {
  return (
    <section id="work-process" className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Image */}
          <div className="flex-1 w-full">
            <div className="relative">
              <img
                src={jmweb2}
                alt="Law office"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-tr-[40px] rounded-br-[40px]"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex-1">
            <p className="text-gold font-heading text-lg mb-2">Work Process</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight mb-10">
              Navigating The Law: Your Assurance Of Peace
            </h2>

            <div className="relative">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="flex gap-5 mb-8 last:mb-0">
                    {/* Icon + dotted line */}
                    <div className="flex flex-col items-center">
                      <div className="group w-14 h-14 rounded-full bg-gold flex items-center justify-center shrink-0 cursor-pointer transition-colors">
                        <Icon className="w-6 h-6 text-background transition-all duration-300 group-hover:text-foreground group-hover:rotate-[360deg]" />
                      </div>
                      {index < steps.length - 1 && (
                        <div className="w-0.5 h-16 border-l-2 border-dashed border-gold mt-2" />
                      )}
                    </div>

                    {/* Text */}
                    <div className="pt-2">
                      <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="font-body text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection;
