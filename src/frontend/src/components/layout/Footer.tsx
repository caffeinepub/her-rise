import { Link } from "@tanstack/react-router";
import { Heart, Mail, MapPin, Phone } from "lucide-react";
import { SiFacebook, SiInstagram, SiLinkedin, SiX } from "react-icons/si";

const socialLinks = [
  { Icon: SiFacebook, label: "Facebook", href: "https://facebook.com" },
  { Icon: SiX, label: "X/Twitter", href: "https://x.com" },
  { Icon: SiInstagram, label: "Instagram", href: "https://instagram.com" },
  { Icon: SiLinkedin, label: "LinkedIn", href: "https://linkedin.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const utm = encodeURIComponent(window.location.hostname);

  return (
    <footer className="bg-lavender-bg border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
                <Heart className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="font-bold text-xl text-purple-deep">
                <span className="text-primary">HER</span> RISE
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Empowering women through community, leadership, and shared growth.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
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
                    className="hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Student Union Building, Room 204</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>+1 (555) 000-0000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span>herrise@club.edu</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Get the latest club news and event updates.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-2"
            >
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 text-sm rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/30"
                data-ocid="footer.input"
              />
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium bg-primary text-white rounded-lg hover:bg-purple-deep transition-colors"
                data-ocid="footer.submit_button"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-muted-foreground">
          <span>© {year} HER RISE. All rights reserved.</span>
          <span>
            Built with{" "}
            <Heart className="inline w-3 h-3 text-primary fill-primary" /> using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${utm}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
