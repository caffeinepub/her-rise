import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { AlertTriangle, ArrowRight, CheckCircle2, Phone } from "lucide-react";

const helplines = [
  {
    name: "National Women Helpline",
    number: "181",
    available: "24/7",
    color: "bg-emergency/10 text-emergency",
  },
  {
    name: "Police Emergency",
    number: "100",
    available: "24/7",
    color: "bg-cream-bg text-primary",
  },
  {
    name: "HER Foundation Helpline",
    number: "1800-XXX-XXXX",
    available: "24/7 Free",
    color: "bg-rose-light text-accent-foreground",
  },
  {
    name: "Domestic Violence Helpline",
    number: "7827-170-170",
    available: "24/7",
    color: "bg-cream-bg text-primary",
  },
  {
    name: "Women in Distress",
    number: "1091",
    available: "24/7",
    color: "bg-emergency/10 text-emergency",
  },
  {
    name: "Child Helpline",
    number: "1098",
    available: "24/7",
    color: "bg-rose-light text-accent-foreground",
  },
];

const steps = [
  {
    step: "1",
    title: "Get to Safety First",
    desc: "If you are in immediate danger, move to a safe location — a public place, neighbor's home, or police station.",
  },
  {
    step: "2",
    title: "Call for Help",
    desc: "Use our helpline numbers above or press SOS in the HER App. Help will be dispatched immediately.",
  },
  {
    step: "3",
    title: "Preserve Evidence",
    desc: "If safe to do so, document injuries, messages, and relevant details. Do not delete anything.",
  },
  {
    step: "4",
    title: "Contact HER Foundation",
    desc: "Our trained advocates will guide you through next steps, legal options, and available shelter.",
  },
  {
    step: "5",
    title: "Know Your Rights",
    desc: "You have the right to file a complaint. Our legal team will assist you free of charge.",
  },
];

export default function Emergency() {
  return (
    <div>
      {/* Hero */}
      <section
        className="py-16 px-4 text-center"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.55 0.18 22) 0%, oklch(0.45 0.18 22) 100%)",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-8 h-8 text-white" />
          </div>
          <h1 className="font-playfair text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Emergency Help
          </h1>
          <p className="text-white/85 text-lg mb-8">
            You are not alone. Help is available right now. If you are in
            immediate danger, call 100 (Police) or our helpline immediately.
          </p>
          <a href="tel:181" className="inline-block">
            <Button
              className="rounded-full bg-white text-emergency hover:bg-gray-100 font-bold text-lg px-10 py-6 shadow-xl"
              data-ocid="emergency.primary_button"
            >
              <Phone className="w-5 h-5 mr-2" /> Call 181 — Women Helpline
            </Button>
          </a>
        </div>
      </section>

      {/* Helplines Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair text-2xl font-bold text-charcoal-deep mb-2 text-center">
            Emergency Helpline Numbers
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            All numbers are free to call, 24 hours a day, 7 days a week.
          </p>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            data-ocid="emergency.list"
          >
            {helplines.map(({ name, number, available, color }, idx) => (
              <a
                key={name}
                href={`tel:${number.replace(/[^0-9]/g, "")}`}
                className="block rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-all border border-border hover:border-primary/30"
                data-ocid={`emergency.item.${idx + 1}`}
              >
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3 ${color}`}
                >
                  <Phone className="w-3 h-3" /> {available}
                </div>
                <div className="font-bold text-charcoal-deep mb-1">{name}</div>
                <div className="text-2xl font-extrabold text-primary">
                  {number}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section
        className="py-16 px-4"
        style={{ background: "oklch(0.95 0.02 70)" }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair text-2xl font-bold text-charcoal-deep mb-2 text-center">
            What to Do in an Emergency
          </h2>
          <p className="text-center text-muted-foreground mb-10">
            Step-by-step guidance to help you stay safe.
          </p>
          <div className="space-y-5">
            {steps.map(({ step, title, desc }) => (
              <div
                key={step}
                className="flex gap-4 items-start bg-white rounded-2xl p-5 shadow-card"
              >
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                  {step}
                </div>
                <div>
                  <div className="font-bold text-charcoal-deep mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> {title}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 bg-white text-center">
        <h2 className="font-playfair text-2xl font-bold text-charcoal-deep mb-3">
          Want to Report an Incident?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          If you've experienced or witnessed an incident, report it anonymously
          and securely. Your report helps us protect others.
        </p>
        <Link to="/report">
          <Button
            className="rounded-full bg-primary hover:bg-primary/90 text-white px-10 shadow-rose"
            data-ocid="emergency.secondary_button"
          >
            Report an Incident <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </section>
    </div>
  );
}
