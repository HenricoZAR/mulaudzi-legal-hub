import { useEffect, useRef, useState } from "react";
import { Briefcase, Users, Smile, MapPin } from "lucide-react";

const stats = [
  { icon: Briefcase, value: 5000, suffix: "k", label: "Cases Done", display: "5k" },
  { icon: Users, value: 4, suffix: "", label: "Expert Attorneys", display: "4" },
  { icon: Smile, value: 2000, suffix: "k+", label: "Happy Clients", display: "2k+" },
  { icon: MapPin, value: 9, suffix: "", label: "Provinces Served", display: "9" },
];

const StatsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const targets = [5, 4, 2, 9];
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounts(targets.map((t) => Math.round(t * eased)));
      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [visible]);

  return (
    <section ref={ref} className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="bg-gold rounded-xl py-10 px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex flex-col items-center text-center">
                <Icon className="w-8 h-8 text-gold-foreground mb-3" />
                <p className="text-3xl md:text-4xl font-heading font-bold text-gold-foreground">
                  {counts[i]}{stat.suffix}
                </p>
                <p className="font-body text-sm text-gold-foreground/80 mt-1">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
