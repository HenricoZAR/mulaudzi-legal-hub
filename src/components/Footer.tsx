import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import logoImg from "@/assets/MJLogoMain.png";
import justiceImg from "@/assets/justice.jpg";

const Footer = () => {
  return (
    <footer>
      {/* Newsletter */}
      <div className="flex flex-col md:flex-row">
        {/* Left: Gold */}
        <div className="flex-1 bg-gold px-8 md:px-14 py-14 flex flex-col justify-center">
          <p className="font-heading text-background text-sm mb-2">Newsletter</p>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground leading-tight">
            Sign Up To Get The Latest News
          </h2>
        </div>

        {/* Right: Justice bg */}
        <div
          className="flex-1 relative px-8 md:px-14 py-14 flex items-center"
          style={{ backgroundImage: `url(${justiceImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-foreground/50" />
          <div className="relative z-10 w-full flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full bg-background/20 border border-background/30 rounded-full px-6 py-3.5 font-body text-sm text-background placeholder:text-background/70 outline-none backdrop-blur-sm"
              />
            </div>
            <button className="bg-gold text-background font-body font-semibold px-8 py-3.5 rounded-full hover:bg-background hover:text-foreground transition-colors duration-300 whitespace-nowrap">
              Subscribe <ArrowRight className="inline w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Menu */}
      <div className="bg-background py-14 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Menu 1 */}
          <div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-5">Menu</h3>
            <ul className="space-y-2.5">
              {["About Us", "Contact Us", "Public Law", "Commercial", "Employment Law", "Secretarial"].map((item) => (
                <li key={item}>
                  <a href="#" className="font-body text-sm text-foreground hover:text-gold transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu 2 */}
          <div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-5">Menu</h3>
            <ul className="space-y-2.5">
              {["Aviation / Insurance", "Litigation", "Debt Collection", "Liquidations", "Estate / Wills", "ICT Regulation"].map((item) => (
                <li key={item}>
                  <a href="#" className="font-body text-sm text-foreground hover:text-gold transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Center: Logo + Description + Social */}
          <div className="flex flex-col items-center text-center">
            <img src={logoImg} alt="Mulaudzi John Attorneys" className="h-16 mb-4" />
            <p className="font-body text-sm text-foreground leading-relaxed mb-6 max-w-xs">
              Over the years, Mulaudzi John Attorneys has grown significantly, expanding our team of attorneys and support staff to better serve our clients' needs.
            </p>
            <div className="flex gap-3">
              {[
                { label: "Facebook", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                { label: "LinkedIn", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" },
                { label: "Instagram", path: "M7.5 2h9A5.5 5.5 0 0122 7.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zm4.5 5a5 5 0 100 10 5 5 0 000-10zm5.5-.5a1 1 0 100 2 1 1 0 000-2z" },
                { label: "X", path: "M4 4l6.5 8L4 20h2l5.5-6.5L16 20h4l-7-8.5L20 4h-2l-5 6L9 4H4z" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-foreground hover:bg-gold flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4 text-background" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            {[
              {
                icon: MapPin,
                title: "Location",
                lines: ["21 Woodlands Drive, Woodmead, 2191"],
                hoverable: false,
              },
              {
                icon: Phone,
                title: "Phone",
                lines: ["(011) 258 8846"],
                hoverable: true,
              },
              {
                icon: Mail,
                title: "Email",
                lines: ["info@mulaudziattorneys.co.za"],
                hoverable: true,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-4">
                  <div className="group w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0 cursor-pointer">
                    <Icon className="w-5 h-5 text-gold transition-transform duration-300 group-hover:rotate-[360deg]" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-foreground">{item.title}</p>
                    {item.lines.map((line) => (
                      <p
                        key={line}
                        className={`font-body text-sm text-muted-foreground ${item.hoverable ? "hover:text-gold transition-colors cursor-pointer" : ""}`}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gold px-4 py-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="font-body text-sm text-background">
            Copyright © 2026 <span className="text-foreground font-semibold">Mulaudzi John Attorneys Incorporated</span> All Rights Reserved.
          </p>
          <div className="flex gap-2 font-body text-sm text-background mt-2 sm:mt-0">
            {["Disclaimer", "Privacy", "Terms"].map((item, i) => (
              <span key={item}>
                <a href="#" className="hover:text-foreground transition-colors">{item}</a>
                {i < 2 && <span className="mx-1">|</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
