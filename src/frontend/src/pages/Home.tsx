import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  MapPin,
  Megaphone,
  Scale,
  Shield,
  Smartphone,
  Users,
  Zap,
} from "lucide-react";
import PhoneMockup from "../components/illustrations/PhoneMockup";
import WomenIllustration from "../components/illustrations/WomenIllustration";

const programs = [
  {
    icon: Shield,
    title: "Women Safety Support",
    desc: "24/7 crisis support, safe shelter referrals, and personal safety counseling for women in need.",
    color: "bg-cream-bg text-primary",
  },
  {
    icon: Scale,
    title: "Legal Assistance",
    desc: "Free legal aid, court guidance, and advocacy services for survivors of abuse and discrimination.",
    color: "bg-rose-light text-accent-foreground",
  },
  {
    icon: Megaphone,
    title: "Awareness Campaigns",
    desc: "Community workshops, school programs, and public campaigns to shift culture and prevent violence.",
    color: "bg-cream-bg text-primary",
  },
];

// ✏️ Update team members here — add photo URL or leave empty for initials avatar
const teamMembers = [
  {
    name: "Bhavagna Reddy",
    role: "Founder & Director",
    study: "Second-year Fashion Design student, Hyderabad",
    photo: "/assets/uploads/BHAVAGNA-REDDY-2.jpeg",
    desc: "Founder of HER RISE, dedicated to empowering women through safety awareness, community initiatives, and technology-driven support.",
  },
  {
    name: "Pradhiksha Reddy",
    role: "Administrative Manager",
    study: "Second-year Undergraduate, MGIT Hyderabad",
    photo: "/assets/uploads/PRADHIKSHA-REDDY-1.jpeg",
    desc: "Oversees administrative coordination and supports the planning and organization of HER RISE initiatives and activities.",
  },
  {
    name: "Meghana Reddy",
    role: "Human Resources Manager",
    study: "Second-year Fashion Design student, Hyderabad",
    photo: "/assets/uploads/MEGHANA-REDDY-5.jpeg",
    desc: "Manages team coordination and supports internal communication to ensure smooth collaboration within HER RISE.",
  },
  {
    name: "Srivalli Oduri",
    role: "IT Support",
    study: "Second-year Undergraduate, MGIT Hyderabad",
    photo: "/assets/uploads/SRIVALLI-ODURI-3.jpeg",
    desc: "Responsible for the technical development and maintenance of the HER RISE website and digital platforms.",
  },
  {
    name: "Samiksha Reddy",
    role: "Digital Media Head",
    study: "Second-year Engineering student, Hyderabad",
    photo: "/assets/uploads/SAMIKSHA-REDDY-6.jpeg",
    desc: "Leads the digital presence of HER RISE by managing social media platforms, online campaigns, and technical coordination of digital content for awareness initiatives.",
  },
];

const avatarColors = [
  "bg-rose-200 text-rose-800",
  "bg-amber-100 text-amber-800",
  "bg-rose-100 text-rose-700",
  "bg-orange-100 text-orange-700",
  "bg-pink-100 text-pink-700",
  "bg-red-100 text-red-700",
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-4 py-24 overflow-hidden"
        style={{
          background:
            "linear-gradient(150deg, oklch(0.96 0.025 70) 0%, oklch(0.97 0.018 30) 40%, oklch(0.95 0.030 15) 100%)",
        }}
      >
        {/* Editorial watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          aria-hidden="true"
        >
          <span
            className="font-playfair font-bold italic text-[clamp(5rem,20vw,18rem)] leading-none whitespace-nowrap"
            style={{ color: "oklch(0.58 0.12 15 / 0.045)" }}
          >
            HER RISE
          </span>
        </div>

        {/* Decorative blobs */}
        <div
          className="absolute top-10 left-10 w-56 h-56 rounded-full opacity-25"
          style={{ background: "oklch(0.85 0.08 15)", filter: "blur(40px)" }}
        />
        <div
          className="absolute bottom-20 right-10 w-72 h-72 rounded-full opacity-20"
          style={{ background: "oklch(0.88 0.05 60)", filter: "blur(50px)" }}
        />

        {/* Thin decorative rule */}
        <div className="relative z-10 flex items-center gap-4 mb-8">
          <div className="w-16 h-px bg-primary/40" />
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary tracking-widest uppercase">
            A Student-Led Initiative, Est. 2026
          </span>
          <div className="w-16 h-px bg-primary/40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold text-charcoal-deep leading-[1.1] tracking-tight mb-6">
            Safety, Support, and{" "}
            <span className="italic" style={{ color: "oklch(0.58 0.12 15)" }}>
              Strength
            </span>
            <br className="hidden sm:block" /> for Every Woman.
          </h1>
          <p className="text-lg sm:text-xl text-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            HER RISE empowers women through technology, legal support, community
            awareness, and rapid-response initiatives — building a world where
            every woman lives without fear.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/emergency">
              <Button
                className="rounded-full px-8 py-6 text-base font-semibold bg-emergency hover:bg-red-700 text-white shadow-lg"
                data-ocid="hero.primary_button"
              >
                🚨 Emergency Help
              </Button>
            </Link>
            <Link to="/about">
              <Button
                variant="outline"
                className="rounded-full px-8 py-6 text-base font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all"
                data-ocid="hero.secondary_button"
              >
                Our Mission
              </Button>
            </Link>
          </div>
        </div>

        {/* Illustration */}
        <div className="relative z-10 mt-14 w-full max-w-2xl mx-auto animate-fade-in delay-300">
          <WomenIllustration />
        </div>
      </section>

      {/* About the Club */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Who We Are
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-charcoal-deep mt-2 mb-6">
            About HER RISE
          </h2>
          <p className="text-lg text-foreground/65 leading-relaxed max-w-2xl mx-auto mb-6">
            HER RISE is a student-led club dedicated to uplifting women on
            campus through education, mentorship, and community action. We
            create safe spaces for meaningful conversations, skill-building
            workshops, and peer support networks.
          </p>
          <p className="text-foreground/60 leading-relaxed max-w-2xl mx-auto">
            From awareness campaigns to tech initiatives, HER RISE bridges the
            gap between aspiration and opportunity — empowering every member to
            lead boldly, grow confidently, and rise together.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: GraduationCap,
                title: "Mentorship",
                desc: "Peer-to-peer guidance and career mentoring from senior students and professionals.",
              },
              {
                icon: BookOpen,
                title: "Workshops",
                desc: "Regular skill-building sessions on leadership, technology, and personal development.",
              },
              {
                icon: Users,
                title: "Community",
                desc: "A vibrant network of women supporting each other across every field of study.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl p-6 bg-cream-bg border border-border shadow-card"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-playfair font-bold text-charcoal-deep mb-2">
                  {title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 px-4 bg-cream-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              The People Behind HER RISE
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-charcoal-deep mt-2">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Passionate students driving change, one initiative at a time.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, i) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl p-6 shadow-card border border-border text-center hover:shadow-card-hover transition-shadow"
                data-ocid={`team.item.${i + 1}`}
              >
                <div className="flex justify-center mb-4">
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-20 h-20 rounded-full object-cover border-2 border-primary/20"
                    />
                  ) : (
                    <div
                      className={`w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold ${avatarColors[i % avatarColors.length]}`}
                    >
                      {getInitials(member.name)}
                    </div>
                  )}
                </div>
                <h3 className="font-playfair font-bold text-charcoal-deep text-base mb-1">
                  {member.name}
                </h3>
                <p className="text-primary text-xs font-semibold mb-1">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-xs leading-relaxed mb-2">
                  {member.study}
                </p>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 px-4 bg-white" id="programs">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              What We Do
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-charcoal-deep mt-2">
              Our Core Programs
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Comprehensive support spanning safety, law, education, and
              technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programs.map(({ icon: Icon, title, desc, color }) => (
              <div
                key={title}
                className="rounded-2xl p-7 bg-white border border-border shadow-card hover:shadow-card-hover transition-shadow group"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-playfair font-bold text-lg text-charcoal-deep mb-2">
                  {title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {desc}
                </p>
                <Link
                  to="/programs"
                  className="inline-flex items-center gap-1 text-primary text-sm font-semibold hover:gap-2 transition-all"
                  data-ocid="programs.link"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/programs">
              <Button
                variant="outline"
                className="rounded-full border-primary text-primary hover:bg-primary hover:text-white px-8"
                data-ocid="home.programs.secondary_button"
              >
                View All Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Technology Teaser */}
      <section className="py-20 px-4 bg-cream-bg">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-float">
            <PhoneMockup />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              Innovation
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-charcoal-deep mt-2 mb-4">
              Technology Keeping Women Safe
            </h2>
            <p className="text-foreground/65 leading-relaxed mb-6">
              Our HER App provides real-time GPS emergency alerts, one-tap SOS
              to trusted contacts, digital incident reporting, and access to
              24/7 helplines — all in one secure platform.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                { icon: Smartphone, text: "One-tap emergency SOS alert" },
                { icon: MapPin, text: "Real-time GPS location sharing" },
                { icon: Zap, text: "Instant connection to crisis counselors" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground/70 font-medium text-sm">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
            <Link to="/technology">
              <Button
                className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 shadow-rose"
                data-ocid="home.tech.primary_button"
              >
                Explore Technology
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Take Action */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Take Action
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-charcoal-deep mt-2 mb-4">
            We're Here When You Need Us
          </h2>
          <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
            Whether you need immediate help or want to report an incident safely
            and anonymously, we're here.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div
              className="rounded-2xl p-8 shadow-card border border-emergency/20"
              style={{ background: "oklch(0.97 0.02 22)" }}
            >
              <div className="w-14 h-14 rounded-2xl bg-emergency/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚨</span>
              </div>
              <h3 className="font-playfair text-xl font-bold text-charcoal-deep mb-2">
                Emergency Help
              </h3>
              <p className="text-muted-foreground text-sm mb-5">
                Immediate resources, helplines, and step-by-step guidance for
                women in crisis.
              </p>
              <Link to="/emergency">
                <Button
                  className="rounded-full bg-emergency hover:bg-red-700 text-white w-full"
                  data-ocid="action.emergency.primary_button"
                >
                  Get Help Now
                </Button>
              </Link>
            </div>
            <div className="rounded-2xl p-8 shadow-card border border-primary/10 bg-cream-bg">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="font-playfair text-xl font-bold text-charcoal-deep mb-2">
                Report an Incident
              </h3>
              <p className="text-muted-foreground text-sm mb-5">
                Submit a report anonymously and securely. Your safety and
                privacy are our priority.
              </p>
              <Link to="/report">
                <Button
                  variant="outline"
                  className="rounded-full border-primary text-primary hover:bg-primary hover:text-white w-full"
                  data-ocid="action.report.secondary_button"
                >
                  Report Anonymously
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
