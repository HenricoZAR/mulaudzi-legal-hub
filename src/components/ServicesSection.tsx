import { ArrowRight, Scale, Building2, Briefcase, FileText, Plane, Gavel, DollarSign, AlertTriangle, BookOpen, Cpu } from "lucide-react";

const services = [
  {
    icon: Scale,
    title: "Public Law",
    description: "We advise and represent clients in matters involving government institutions, administrative law, constitutional rights, and public sector regulations.",
  },
  {
    icon: Building2,
    title: "Commercial & Corporate Law",
    description: "Our team provides comprehensive legal support for business transactions, mergers, acquisitions, corporate governance, and commercial agreements.",
  },
  {
    icon: Briefcase,
    title: "Employment Law",
    description: "We assist employers and employees with labour disputes, unfair dismissals, workplace policies, CCMA matters, and employment contracts.",
  },
  {
    icon: FileText,
    title: "Company Secretarial Law",
    description: "We provide company secretarial services including CIPC filings, compliance management, board resolutions, and corporate record keeping.",
  },
  {
    icon: Plane,
    title: "Aviation & Insurance Law",
    description: "Specialised legal services covering aviation regulations, insurance claims, liability disputes, and industry-specific compliance matters.",
  },
  {
    icon: Gavel,
    title: "General Litigation",
    description: "Our litigation team represents clients in civil and commercial disputes, High Court and Magistrate Court proceedings, and alternative dispute resolution.",
  },
  {
    icon: DollarSign,
    title: "Debt Collection",
    description: "We offer efficient and professional debt recovery services including demand letters, summons, default judgments, and execution proceedings.",
  },
  {
    icon: AlertTriangle,
    title: "Liquidations & Insolvency",
    description: "Expert assistance with business rescue applications, liquidation proceedings, insolvency matters, and creditor negotiations.",
  },
  {
    icon: BookOpen,
    title: "Deceased Estates & Wills",
    description: "We handle the administration of deceased estates, drafting of wills, trusts, and estate planning to protect your family's future.",
  },
  {
    icon: Cpu,
    title: "ICT & Regulation",
    description: "Legal advice on information technology law, data protection compliance, POPIA, electronic communications, and regulatory frameworks.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-gold font-heading text-lg mb-2">What We Do</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Overview Of Our Services
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-secondary rounded-xl p-7 border-b-4 border-gold transition-all duration-300 hover:bg-foreground cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center mb-5 transition-colors group-hover:bg-gold">
                  <Icon className="w-6 h-6 text-gold transition-colors group-hover:text-background" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3 transition-colors group-hover:text-gold">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5 transition-colors group-hover:text-background/70">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 font-body text-sm font-semibold text-foreground transition-colors group-hover:text-gold"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
