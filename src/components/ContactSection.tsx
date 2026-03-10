import { ArrowRight, User, Mail, Phone, Pen } from "lucide-react";
import contactBg from "@/assets/contact_1.jpg";
import johnContact from "@/assets/John-contact.png";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="bg-secondary rounded-3xl p-6 md:p-10 lg:p-14">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left: Contact Form */}
            <div className="flex-1 bg-gold rounded-2xl p-8 md:p-10">
              <div className="text-center mb-8">
                <p className="font-heading text-foreground text-sm mb-2">Have Any Questions?</p>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-background">
                  Get In Touch With Us
                </h2>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-background rounded-full px-6 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground outline-none"
                  />
                  <User className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground" />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full bg-background rounded-full px-6 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground outline-none"
                    />
                    <Mail className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground" />
                  </div>
                  <div className="relative flex-1">
                    <input
                      type="tel"
                      placeholder="Number"
                      className="w-full bg-background rounded-full px-6 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground outline-none"
                    />
                    <Phone className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground" />
                  </div>
                </div>

                <div className="relative">
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    className="w-full bg-background rounded-2xl px-6 py-4 font-body text-sm text-foreground placeholder:text-muted-foreground outline-none resize-none"
                  />
                  <Pen className="absolute right-5 top-5 w-5 h-5 text-foreground" />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto mx-auto block bg-foreground text-background font-body font-semibold px-12 py-3.5 rounded-full hover:bg-background hover:text-foreground transition-colors duration-300 group"
                >
                  Send Now <ArrowRight className="inline w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Right: Images */}
            <div className="flex-1 flex flex-col items-center justify-end">
              <div className="relative w-full max-w-md">
                {/* Background image */}
                <img
                  src={contactBg}
                  alt="Law library"
                  className="w-full h-[250px] object-cover rounded-2xl"
                />
                {/* Foreground image (John) - flipped to face right */}
                <img
                  src={johnContact}
                  alt="Mr. John Mulaudzi"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 object-contain"
                  style={{ transform: "translateX(-50%) scaleX(-1)", width: "71%", height: "140%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
