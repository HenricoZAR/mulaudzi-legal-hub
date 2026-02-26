import { useState, useEffect } from "react";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/MJLogoMain.png";

const practiceAreas = [
  "Public Law",
  "Commercial & Corporate Law",
  "Employment Law",
  "Company Secretarial Law",
  "Aviation & Insurance Law",
  "General Litigation",
  "Debt Collection",
  "Liquidations & Insolvency",
  "Deceased Estates & Wills",
  "ICT & Regulation",
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-foreground/80 backdrop-blur-md shadow-lg" : "bg-background"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <img src={logo} alt="Mulaudzi John Incorporated Attorneys" className="h-14 w-auto" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 font-body text-sm font-medium">
          <a href="#" className={`transition-colors ${scrolled ? "text-background hover:text-gold" : "text-foreground hover:text-gold"}`}>
            Home
          </a>
          <a href="#about" className={`transition-colors ${scrolled ? "text-background hover:text-gold" : "text-foreground hover:text-gold"}`}>
            About
          </a>
          <div className="relative group">
            <button className={`flex items-center gap-1 transition-colors ${scrolled ? "text-background hover:text-gold" : "text-foreground hover:text-gold"}`}>
              Practice Area <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              {practiceAreas.map((area) => (
                <a
                  key={area}
                  href="#services"
                  className="block px-4 py-2.5 text-sm text-foreground hover:bg-gold hover:text-gold-foreground transition-colors first:rounded-t-lg last:rounded-b-lg"
                >
                  {area}
                </a>
              ))}
            </div>
          </div>
          <a href="#contact" className={`transition-colors ${scrolled ? "text-background hover:text-gold" : "text-foreground hover:text-gold"}`}>
            Contact
          </a>
        </div>

        {/* Search + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
              scrolled ? "bg-background/20 hover:bg-gold" : "bg-secondary hover:bg-gold"
            }`}
            aria-label="Search"
          >
            <Search className={`w-4 h-4 ${scrolled ? "text-background" : "text-foreground"}`} />
          </button>
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className={`w-6 h-6 ${scrolled ? "text-background" : "text-foreground"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? "text-background" : "text-foreground"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border px-4 py-4 space-y-3 font-body">
          <a href="#" className="block py-2 text-foreground hover:text-gold" onClick={() => setMobileOpen(false)}>Home</a>
          <a href="#about" className="block py-2 text-foreground hover:text-gold" onClick={() => setMobileOpen(false)}>About</a>
          <div>
            <button
              className="flex items-center gap-1 py-2 text-foreground hover:text-gold w-full"
              onClick={() => setPracticeOpen(!practiceOpen)}
            >
              Practice Area <ChevronDown className={`w-4 h-4 transition-transform ${practiceOpen ? "rotate-180" : ""}`} />
            </button>
            {practiceOpen && (
              <div className="pl-4 space-y-1">
                {practiceAreas.map((area) => (
                  <a key={area} href="#services" className="block py-1.5 text-sm text-muted-foreground hover:text-gold" onClick={() => setMobileOpen(false)}>
                    {area}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a href="#contact" className="block py-2 text-foreground hover:text-gold" onClick={() => setMobileOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
