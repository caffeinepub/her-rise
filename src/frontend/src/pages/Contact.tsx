import { Mail, Phone } from "lucide-react";
import { SiInstagram, SiLinkedin } from "react-icons/si";

// ✏️ Update contact details here
const CONTACT_INFO = {
  email: "herrise.hyd@gmail.com",
  instagram: "https://instagram.com/herrise.hyd",
  instagramHandle: "@herrise.hyd",
  linkedin: "https://www.linkedin.com/in/herrise-hyd", // ✏️ Update LinkedIn URL if needed
  linkedinHandle: "HER RISE",
};

// ✏️ Update team member contacts here — order: Bhavagna, Pradhiksha, Meghana, Srivalli, Samiksha
const TEAM_CONTACTS = [
  { name: "Bhavagna Reddy", role: "Founder & Director", phone: "8309301075" },
  {
    name: "Pradhiksha Reddy",
    role: "Administrative Manager",
    phone: "8341693369",
  },
  {
    name: "Meghana Reddy",
    role: "Human Resources Manager",
    phone: "+91 99596 01124",
  },
  { name: "Srivalli Oduri", role: "IT Support", phone: "8143846341" },
  { name: "Samiksha Reddy", role: "Digital Media Head", phone: "9866969332" },
];

const avatarColors = [
  "bg-rose-100 text-rose-700",
  "bg-amber-100 text-amber-700",
  "bg-rose-200 text-rose-800",
  "bg-orange-100 text-orange-700",
  "bg-pink-100 text-pink-700",
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Contact() {
  const socialLinks = [
    {
      platform: "Instagram",
      handle: CONTACT_INFO.instagramHandle,
      href: CONTACT_INFO.instagram,
      Icon: SiInstagram,
      color: "text-pink-600",
    },
    {
      platform: "LinkedIn",
      handle: CONTACT_INFO.linkedinHandle,
      href: CONTACT_INFO.linkedin,
      Icon: SiLinkedin,
      color: "text-blue-600",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section
        className="py-20 px-4 text-center"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.95 0.03 70) 0%, oklch(0.96 0.02 15) 100%)",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Get in Touch
          </span>
          <h1 className="font-playfair text-4xl sm:text-5xl font-extrabold text-charcoal-deep mt-2 mb-4">
            Contact HER RISE
          </h1>
          <p className="text-lg text-foreground/65 leading-relaxed">
            Have a question, want to collaborate, or need support? Reach out to
            our team — we'd love to connect with you.
          </p>
        </div>
      </section>

      {/* Reach Our Team */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              Direct Contact
            </span>
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-charcoal-deep mt-2">
              Reach Our Team
            </h2>
            <p className="text-muted-foreground mt-2 text-sm">
              Feel free to reach out to any of our team members directly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {TEAM_CONTACTS.map(({ name, role, phone }, i) => (
              <a
                key={name}
                href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                className="rounded-2xl p-5 shadow-card border border-border hover:shadow-card-hover transition-all group bg-white flex items-center gap-4"
                data-ocid={`contact.item.${i + 1}`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-base font-bold flex-shrink-0 ${avatarColors[i % avatarColors.length]}`}
                >
                  {getInitials(name)}
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-charcoal-deep text-sm truncate">
                    {name}
                  </div>
                  <div className="text-primary text-xs font-medium mb-1 truncate">
                    {role}
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
                    <Phone className="w-3.5 h-3.5 flex-shrink-0 text-primary" />
                    <span>{phone}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Email Card */}
          <div className="mb-8">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="rounded-2xl p-6 shadow-card border border-border hover:shadow-card-hover transition-all group bg-white flex items-center gap-5 max-w-md mx-auto"
              data-ocid="contact.card"
            >
              <div className="w-12 h-12 rounded-xl bg-cream-bg flex items-center justify-center group-hover:bg-primary transition-colors flex-shrink-0">
                <Mail className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wide mb-0.5">
                  Club Email
                </div>
                <div className="font-semibold text-charcoal-deep text-sm">
                  {CONTACT_INFO.email}
                </div>
              </div>
            </a>
          </div>

          {/* Social Media */}
          <div
            className="rounded-2xl p-8 shadow-card"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.95 0.03 70) 0%, oklch(0.96 0.02 15) 100%)",
            }}
          >
            <h2 className="font-playfair text-xl font-bold text-charcoal-deep mb-2 text-center">
              Follow HER RISE
            </h2>
            <p className="text-muted-foreground text-sm text-center mb-8">
              Stay updated with our events, announcements, and community
              highlights.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map(({ platform, handle, href, Icon, color }) => (
                <a
                  key={platform}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={platform}
                  className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white shadow-card hover:shadow-card-hover text-charcoal-deep font-medium text-sm hover:text-primary transition-all group"
                  data-ocid="contact.link"
                >
                  <Icon className={`w-5 h-5 ${color}`} />
                  <div>
                    <div className="font-semibold text-sm">{platform}</div>
                    <div className="text-xs text-muted-foreground">
                      {handle}
                    </div>
                  </div>
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
