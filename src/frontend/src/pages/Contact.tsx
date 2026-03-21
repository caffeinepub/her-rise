import { Mail, MapPin, Phone } from "lucide-react";
import { SiFacebook, SiInstagram, SiLinkedin, SiX } from "react-icons/si";

// ✏️ Update contact details here
const CONTACT_INFO = {
  email: "herrise@club.edu",
  phone: "+1 (555) 000-0000",
  address: "Student Union Building, Room 204",
};

// ✏️ Update social media links here
const SOCIAL_LINKS = [
  {
    platform: "Instagram",
    href: "https://instagram.com/herrise",
    Icon: SiInstagram,
  },
  {
    platform: "LinkedIn",
    href: "https://linkedin.com/company/herrise",
    Icon: SiLinkedin,
  },
  {
    platform: "Facebook",
    href: "https://facebook.com/herrise",
    Icon: SiFacebook,
  },
  { platform: "X/Twitter", href: "https://x.com/herrise", Icon: SiX },
];

const contactItems = [
  {
    icon: Mail,
    label: "Club Email",
    value: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: CONTACT_INFO.phone,
    href: `tel:${CONTACT_INFO.phone.replace(/[^+\d]/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Club Room",
    value: CONTACT_INFO.address,
    href: "#",
  },
];

export default function Contact() {
  return (
    <div>
      {/* Hero */}
      <section
        className="py-20 px-4 text-center"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.96 0.03 293) 0%, oklch(0.97 0.02 350) 100%)",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-purple-deep mt-2 mb-4">
            Contact HER RISE
          </h1>
          <p className="text-lg text-foreground/65 leading-relaxed">
            Have a question, want to collaborate, or interested in joining the
            club? Reach out — we'd love to connect with you.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
            {contactItems.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="rounded-2xl p-6 shadow-card border border-border hover:shadow-card-hover transition-shadow flex flex-col items-center text-center gap-3 group"
                data-ocid="contact.card"
              >
                <div className="w-12 h-12 rounded-xl bg-lavender-bg flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wide mb-0.5">
                    {label}
                  </div>
                  <div className="font-semibold text-purple-deep text-sm">
                    {value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Social Media */}
          <div
            className="rounded-2xl p-8 shadow-card"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.96 0.03 293) 0%, oklch(0.97 0.02 350) 100%)",
            }}
          >
            <h2 className="text-xl font-bold text-purple-deep mb-2 text-center">
              Follow Us on Social Media
            </h2>
            <p className="text-muted-foreground text-sm text-center mb-8">
              Stay updated with club events, announcements, and community
              highlights.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {SOCIAL_LINKS.map(({ platform, href, Icon }) => (
                <a
                  key={platform}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={platform}
                  className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white shadow-card hover:shadow-card-hover text-purple-deep font-medium text-sm hover:text-primary transition-all group"
                  data-ocid="contact.link"
                >
                  <Icon className="w-5 h-5 text-primary" />
                  {platform}
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <p className="text-muted-foreground text-sm">
              Want to join HER RISE?{" "}
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-primary font-semibold hover:underline"
              >
                Drop us an email
              </a>{" "}
              and we'll get back to you with membership details.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
