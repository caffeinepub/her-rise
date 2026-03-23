import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Bell, FileText, Lock, MapPin, Smartphone, Users } from "lucide-react";
import PhoneMockup from "../components/illustrations/PhoneMockup";

const features = [
  {
    icon: Bell,
    title: "GPS Emergency Alerts",
    desc: "One tap sends your exact GPS location to pre-selected trusted contacts and our crisis response team — even when cellular is weak.",
    color: "bg-rose-light text-accent-foreground",
  },
  {
    icon: Smartphone,
    title: "HER Safety App",
    desc: "Available on iOS and Android, our app includes SOS triggers, safe-walk tracking, and a directory of local resources — all in one intuitive interface.",
    color: "bg-cream-bg text-primary",
  },
  {
    icon: FileText,
    title: "Digital Reporting System",
    desc: "Securely and anonymously report incidents through our platform. All reports are encrypted, reviewed by trained staff, and can initiate formal proceedings.",
    color: "bg-rose-light text-accent-foreground",
  },
  {
    icon: Users,
    title: "Community Safety Network",
    desc: "A peer-to-peer alert network where community members can flag unsafe zones, share real-time safety updates, and coordinate with Shakti Suraksha Squad volunteers.",
    color: "bg-cream-bg text-primary",
  },
  {
    icon: MapPin,
    title: "Safe Route Mapping",
    desc: "AI-assisted safe route recommendations based on community-reported incident data, time of day, and local patrol coverage.",
    color: "bg-cream-bg text-primary",
  },
  {
    icon: Lock,
    title: "End-to-End Encryption",
    desc: "Every communication, report, and location share on our platform is fully encrypted. We will never share your data without explicit consent.",
    color: "bg-rose-light text-accent-foreground",
  },
];

export default function Technology() {
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
            Innovation for Safety
          </span>
          <h1 className="font-playfair text-4xl sm:text-5xl font-extrabold text-charcoal-deep mt-2 mb-4">
            Technology for Women's Safety
          </h1>
          <p className="text-lg text-foreground/65 leading-relaxed">
            We harness the power of technology to close the gap between women in
            danger and the help they need — faster, safer, and more reliably
            than ever before.
          </p>
        </div>
      </section>

      {/* App showcase */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-float">
            <PhoneMockup />
          </div>
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              HER App
            </span>
            <h2 className="font-playfair text-3xl font-bold text-charcoal-deep mt-2 mb-4">
              Your Safety Companion, Always Ready
            </h2>
            <p className="text-foreground/65 leading-relaxed mb-6">
              Designed with trauma-informed UX principles, the HER App makes
              accessing help as frictionless as possible. In an emergency, every
              second matters — our app is built around that truth.
            </p>
            <div className="space-y-4">
              {[
                {
                  step: "01",
                  title: "Download & Set Up",
                  desc: "Add trusted contacts and your home safe zone in under 2 minutes.",
                },
                {
                  step: "02",
                  title: "One Tap SOS",
                  desc: "Press the SOS button. Contacts receive your GPS location instantly.",
                },
                {
                  step: "03",
                  title: "Help on the Way",
                  desc: "Nearest Shakti Suraksha volunteer is notified and dispatched if needed.",
                },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-primary">
                      {step}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal-deep text-sm">
                      {title}
                    </div>
                    <div className="text-xs text-muted-foreground">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex gap-3 flex-wrap">
              <Button
                className="rounded-full bg-primary hover:bg-primary/90 text-white px-6 shadow-rose"
                data-ocid="tech.primary_button"
              >
                Download HER App
              </Button>
              <Link to="/report">
                <Button
                  variant="outline"
                  className="rounded-full border-primary text-primary hover:bg-primary hover:text-white px-6"
                  data-ocid="tech.secondary_button"
                >
                  Report Incident
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section
        className="py-16 px-4"
        style={{ background: "oklch(0.95 0.02 70)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold text-charcoal-deep">
              Platform Features
            </h2>
            <p className="text-muted-foreground mt-2">
              Built for safety. Designed for real-world use.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, desc, color }, idx) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow"
                data-ocid={`tech.item.${idx + 1}`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${color}`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-playfair font-bold text-charcoal-deep mb-2">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
