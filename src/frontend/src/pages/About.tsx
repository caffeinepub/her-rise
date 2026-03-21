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

const timeline = [
  {
    year: "2018",
    title: "Club Founded",
    desc: "HER RISE was established on campus with a founding team of 12 passionate students, driven to create a community for women's empowerment.",
  },
  {
    year: "2019",
    title: "First Workshop Series",
    desc: "Launched our flagship workshop series on leadership and career development, attracting over 200 students in the first semester.",
  },
  {
    year: "2020",
    title: "Digital Community",
    desc: "Moved events online during the pandemic, growing our reach to students across multiple campuses.",
  },
  {
    year: "2021",
    title: "Mentorship Program",
    desc: "Launched peer mentorship pairings connecting first-year students with senior members and industry professionals.",
  },
  {
    year: "2023",
    title: "Campus Recognition",
    desc: "Awarded Best Student Club of the Year and partnered with the university's Women in STEM initiative.",
  },
  {
    year: "2024",
    title: "Tech & Safety Initiative",
    desc: "Launched our women's safety tech initiative, collaborating with the CS department to build community-focused safety tools.",
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
            "linear-gradient(135deg, oklch(0.96 0.03 293) 0%, oklch(0.97 0.02 350) 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Who We Are
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-purple-deep mt-2 mb-4">
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
              bg: "bg-lavender-bg",
            },
            {
              emoji: "🌟",
              title: "Our Vision",
              desc: "A campus culture where women lead with confidence, where gender barriers are dismantled, and where every woman has access to the support she needs to thrive.",
              bg: "bg-pink-light",
            },
            {
              emoji: "💡",
              title: "Our Purpose",
              desc: "To bridge the gap between ambition and opportunity — closing that gap through peer support, skill-building workshops, and meaningful community connection.",
              bg: "bg-lavender-bg",
            },
          ].map(({ emoji, title, desc, bg }) => (
            <div key={title} className={`${bg} rounded-2xl p-8`}>
              <div className="text-4xl mb-4">{emoji}</div>
              <h3 className="text-xl font-bold text-purple-deep mb-3">
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
        style={{ background: "oklch(0.96 0.02 293)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-deep">
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
                <h4 className="font-bold text-purple-deep mb-2">{title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-deep">Our Journey</h2>
            <p className="text-muted-foreground mt-2">
              How HER RISE has grown over the years
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
            <div className="space-y-8">
              {timeline.map(({ year, title, desc }) => (
                <div key={year} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs flex-shrink-0 relative z-10">
                    {year.slice(2)}
                  </div>
                  <div className="pb-2">
                    <div className="text-xs text-primary font-semibold mb-0.5">
                      {year}
                    </div>
                    <h4 className="font-bold text-purple-deep mb-1">{title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section
        className="py-16 px-4"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.96 0.03 293) 0%, oklch(0.97 0.02 350) 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              Mark Your Calendar
            </span>
            <h2 className="text-3xl font-bold text-purple-deep mt-2">
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
              <h3 className="text-lg font-bold text-purple-deep mb-2">
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
                        style={{ background: "oklch(0.91 0.06 293)" }}
                      >
                        <CalendarDays className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="font-bold text-purple-deep text-lg">
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
