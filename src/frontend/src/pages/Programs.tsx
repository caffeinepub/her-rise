import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Megaphone,
  Scale,
  Shield,
  Smartphone,
  Zap,
} from "lucide-react";

const programs = [
  {
    icon: Shield,
    title: "Women Safety Support",
    color: "bg-cream-bg text-primary",
    tag: "Core Service",
    tagColor: "bg-primary/10 text-primary",
    desc: "Our frontline crisis support service provides 24/7 helpline access, emergency shelter referrals, trauma-informed counseling, and personal safety planning for women in immediate or ongoing danger.",
    features: [
      "24/7 Crisis Hotline",
      "Emergency Shelter Network",
      "Personal Safety Planning",
      "Trauma Counseling",
    ],
  },
  {
    icon: Scale,
    title: "Legal Assistance for Victims",
    color: "bg-rose-light text-accent-foreground",
    tag: "Legal Aid",
    tagColor: "bg-accent text-accent-foreground",
    desc: "We connect survivors with certified lawyers for free consultations, help file FIRs, support restraining order processes, guide through court proceedings, and advocate for policy change.",
    features: [
      "Free Legal Consultations",
      "FIR Filing Support",
      "Court Accompaniment",
      "Policy Advocacy",
    ],
  },
  {
    icon: Megaphone,
    title: "Awareness Campaigns & Workshops",
    color: "bg-cream-bg text-primary",
    tag: "Education",
    tagColor: "bg-primary/10 text-primary",
    desc: "Prevention through awareness: school programs, workplace sensitization, bystander intervention training, and large-scale public campaigns that shift cultural attitudes toward gender-based violence.",
    features: [
      "School & College Programs",
      "Corporate Workshops",
      "Bystander Training",
      "Social Media Campaigns",
    ],
  },
  {
    icon: Zap,
    title: "Shakti Suraksha Squad",
    color: "bg-rose-light text-accent-foreground",
    tag: "Rapid Response",
    tagColor: "bg-accent text-accent-foreground",
    desc: "A trained network of community volunteers and professionals who respond quickly to crisis alerts, escort women to safety, provide first-responder support, and coordinate with local authorities.",
    features: [
      "Trained Volunteer Network",
      "Rapid Crisis Response",
      "Safe Escort Services",
      "Authority Coordination",
    ],
  },
  {
    icon: Smartphone,
    title: "Technology-based Safety Solutions",
    color: "bg-cream-bg text-primary",
    tag: "Tech",
    tagColor: "bg-primary/10 text-primary",
    desc: "The HER App offers GPS-enabled SOS alerts, real-time location sharing with trusted contacts, anonymous incident reporting, safety check-ins, and AI-guided safety resource discovery.",
    features: [
      "HER App (iOS & Android)",
      "GPS SOS Alerts",
      "Anonymous Reporting",
      "Safety Check-ins",
    ],
  },
];

export default function Programs() {
  return (
    <div>
      <section
        className="py-20 px-4 text-center"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.95 0.03 70) 0%, oklch(0.96 0.02 15) 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            What We Offer
          </span>
          <h1 className="font-playfair text-4xl sm:text-5xl font-extrabold text-charcoal-deep mt-2 mb-4">
            Our Programs & Services
          </h1>
          <p className="text-lg text-foreground/65 leading-relaxed">
            Five comprehensive programs spanning safety, law, education,
            community mobilization, and technology.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto space-y-8" data-ocid="programs.list">
          {programs.map(
            (
              { icon: Icon, title, color, tag, tagColor, desc, features },
              idx,
            ) => (
              <div
                key={title}
                className="rounded-2xl shadow-card hover:shadow-card-hover transition-shadow p-8 border border-border"
                data-ocid={`programs.item.${idx + 1}`}
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center ${color}`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-playfair text-xl font-bold text-charcoal-deep">
                        {title}
                      </h3>
                      <span
                        className={`text-xs px-3 py-1 rounded-full font-semibold ${tagColor}`}
                      >
                        {tag}
                      </span>
                    </div>
                    <p className="text-foreground/65 leading-relaxed mb-4 text-sm">
                      {desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {features.map((f) => (
                        <span
                          key={f}
                          className="text-xs px-3 py-1 rounded-full bg-cream-bg text-foreground/70 font-medium"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1 text-primary text-sm font-semibold hover:gap-2 transition-all"
                      data-ocid="programs.link"
                    >
                      Get Involved <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </section>

      <section className="py-14 px-4 text-center bg-cream-bg">
        <h2 className="font-playfair text-2xl font-bold text-charcoal-deep mb-3">
          Ready to Make a Difference?
        </h2>
        <p className="text-muted-foreground mb-6">
          Volunteer, donate, or partner with us to expand our reach.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link to="/contact">
            <Button
              className="rounded-full bg-primary hover:bg-primary/90 text-white px-8 shadow-rose"
              data-ocid="programs.primary_button"
            >
              Partner With Us
            </Button>
          </Link>
          <Link to="/report">
            <Button
              variant="outline"
              className="rounded-full border-primary text-primary hover:bg-primary hover:text-white px-8"
              data-ocid="programs.secondary_button"
            >
              Report an Incident
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
