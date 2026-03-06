import { Landmark, Building2, Briefcase, FileText, Plane, Gavel, DollarSign, AlertTriangle, BookOpen, Cpu } from "lucide-react";

const services = [
  { icon: Landmark, label: "Public Law" },
  { icon: Building2, label: "Commercial & Corporate Law" },
  { icon: Briefcase, label: "Employment Law" },
  { icon: FileText, label: "Company Secretarial Law" },
  { icon: Plane, label: "Aviation & Insurance Law" },
  { icon: Gavel, label: "General Litigation" },
  { icon: DollarSign, label: "Debt Collection" },
  { icon: AlertTriangle, label: "Liquidations & Insolvency" },
  { icon: BookOpen, label: "Deceased Estates & Wills" },
  { icon: Cpu, label: "ICT & Regulation" },
];

const ServicesSlider = () => {
  const doubled = [...services, ...services];

  return (
    <section className="py-6 bg-gold overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap">
        {doubled.map((service, i) => {
          const Icon = service.icon;
          return (
            <div
              key={i}
              className="inline-flex items-center gap-3 mx-10 shrink-0"
            >
              <Icon className="w-8 h-8 text-foreground" />
              <span className="font-heading text-lg font-bold text-foreground">
                {service.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSlider;
