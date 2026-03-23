import {
  CalendarDays,
  Clock,
  Eye,
  Heart,
  MapPin,
  Target,
  Users,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    desc: "We lead with empathy, meeting every woman where she is without judgment.",
  },
  {
    icon: Target,
    title: "Impact",
    desc: "Every program is designed for measurable, lasting change in women's lives.",
  },
  {
    icon: Eye,
    title: "Transparency",
    desc: "We operate openly, sharing our progress and results with our community.",
  },
  {
    icon: Users,
    title: "Community",
    desc: "Together we are stronger — our network of support amplifies every individual effort.",
  },
];

// ✏️ Update upcoming events here — add, edit, or remove events as needed
const events = [
  {
    title: "Women in Tech Workshop",
    date: "April 15, 2026",
    time: "10:00 AM – 1:00 PM",
    location: "Main Hall, Block A",
    description:
      "A hands-on workshop on building tech solutions for women's safety. Open to all students — no prior coding experience needed.",
    tag: "Workshop",
  },
  {
    title: "Leadership & Confidence Bootcamp",
    date: "May 3, 2026",
    time: "2:00 PM – 5:00 PM",
    location: "Student Union Building, Room 204",
    description:
      "An interactive bootcamp covering public speaking, negotiation skills, and building your personal brand as a woman in your field.",
    tag: "Bootcamp",
  },
];

export default function About() {
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
        <div className="max-w-3xl mx-auto">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Who We Are
          </span>
          <h1 className="font-playfair text-4xl sm:text-5xl font-extrabold text-charcoal-deep mt-2 mb-4">
            About HER RISE
          </h1>
          <p className="text-lg text-foreground/65 leading-relaxed">
            We exist to create a campus where every woman can learn, lead, and
            thrive with confidence. Through community, technology, and advocacy,
            we make that vision a reality — one member at a time.
          </p>
        </div>
      </section>

      {/* Mission / Vision / Purpose */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              emoji: "🎯",
              title: "Our Mission",
              desc: "To empower women on campus through education, mentorship, and community — providing tools for personal growth, safety awareness, and leadership development.",
              bg: "bg-cream-bg",
            },
            {
              emoji: "🌟",
              title: "Our Vision",
              desc: "A campus culture where women lead with confidence, where gender barriers are dismantled, and where every woman has access to the support she needs to thrive.",
              bg: "bg-rose-light",
            },
            {
              emoji: "💡",
              title: "Our Purpose",
              desc: "To bridge the gap between ambition and opportunity — closing that gap through peer support, skill-building workshops, and meaningful community connection.",
              bg: "bg-cream-bg",
            },
          ].map(({ emoji, title, desc, bg }) => (
            <div key={title} className={`${bg} rounded-2xl p-8`}>
              <div className="text-4xl mb-4">{emoji}</div>
              <h3 className="font-playfair text-xl font-bold text-charcoal-deep mb-3">
                {title}
              </h3>
              <p className="text-foreground/65 leading-relaxed text-sm">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section
        className="py-16 px-4"
        style={{ background: "oklch(0.95 0.02 70)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold text-charcoal-deep">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 shadow-card text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-playfair font-bold text-charcoal-deep mb-2">
                  {title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section
        className="py-16 px-4"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.95 0.03 70) 0%, oklch(0.96 0.02 15) 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              Mark Your Calendar
            </span>
            <h2 className="font-playfair text-3xl font-bold text-charcoal-deep mt-2">
              Upcoming Events
            </h2>
            <p className="text-muted-foreground mt-2">
              Workshops, bootcamps, and community gatherings — stay connected.
            </p>
          </div>

          {events.length === 0 ? (
            <div
              className="bg-white rounded-2xl p-12 text-center shadow-card"
              data-ocid="events.empty_state"
            >
              <div className="text-5xl mb-4">📅</div>
              <h3 className="font-playfair text-lg font-bold text-charcoal-deep mb-2">
                No upcoming events
              </h3>
              <p className="text-muted-foreground text-sm">
                Check back soon — exciting workshops and events are being
                planned!
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {events.map((event, i) => (
                <div
                  key={event.title}
                  className="bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-shadow"
                  data-ocid={`events.item.${i + 1}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                    <div className="flex-shrink-0">
                      <div
                        className="w-16 h-16 rounded-2xl flex flex-col items-center justify-center text-center"
                        style={{ background: "oklch(0.91 0.04 15)" }}
                      >
                        <CalendarDays className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="font-playfair font-bold text-charcoal-deep text-lg">
                          {event.title}
                        </h3>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                          {event.tag}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                        {event.description}
                      </p>
                      <div className="flex flex-wrap gap-4 text-xs text-foreground/60 font-medium">
                        <span className="flex items-center gap-1.5">
                          <CalendarDays className="w-3.5 h-3.5 text-primary" />
                          {event.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-primary" />
                          {event.time}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-primary" />
                          {event.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
