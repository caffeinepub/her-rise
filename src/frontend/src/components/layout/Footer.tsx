import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { SiInstagram, SiLinkedin } from "react-icons/si";

const socialLinks = [
  {
    Icon: SiInstagram,
    label: "Instagram",
    href: "https://instagram.com/herrise.hyd",
  },
  { Icon: SiLinkedin, label: "LinkedIn", href: "https://linkedin.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-deep text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <img
                src="/assets/uploads/Her_LOGO-1-4.png"
                alt="HER RISE Logo"
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-white/55 leading-relaxed mb-5">
              Empowering women through awareness, technology, and community
              support.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "About Us", to: "/about" },
                { label: "Our Programs", to: "/programs" },
                { label: "Technology", to: "/technology" },
                { label: "Emergency Help", to: "/emergency" },
                { label: "Report Incident", to: "/report" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-white/55 hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:herrise.hyd@gmail.com"
                  className="text-white/55 hover:text-primary transition-colors"
                >
                  herrise.hyd@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <SiInstagram className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="https://instagram.com/herrise.hyd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/55 hover:text-primary transition-colors"
                >
                  @herrise.hyd
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Stay Updated
            </h4>
            <p className="text-sm text-white/55 mb-4">
              Get the latest club news and event updates.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-2"
            >
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 text-sm rounded-lg border border-white/15 bg-white/8 text-white placeholder-white/35 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                data-ocid="footer.input"
              />
              <button
                type="submit"
                className="px-4 py-2 text-sm font-semibold bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
                data-ocid="footer.submit_button"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/35">
          <span>
            © {year} HER RISE — Empowering Women Through Awareness, Technology,
            and Community Support.
          </span>
        </div>
      </div>
    </footer>
  );
}
