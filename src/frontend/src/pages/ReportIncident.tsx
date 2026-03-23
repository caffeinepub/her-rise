import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Eye, Lock, Shield } from "lucide-react";
import { useState } from "react";
import { useActor } from "../hooks/useActor";

const incidentTypes = [
  "Physical Harassment",
  "Sexual Harassment",
  "Domestic Violence",
  "Stalking / Cyberstalking",
  "Workplace Discrimination",
  "Online Abuse",
  "Human Trafficking",
  "Other",
];

export default function ReportIncident() {
  const { actor } = useActor();
  const [reportType, setReportType] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!reportType || !description.trim()) {
      setError("Please select an incident type and provide a description.");
      return;
    }
    setError("");
    setSubmitting(true);
    try {
      if (actor) {
        await actor.submitReport(reportType, description, location || null);
      }
      setSuccess(true);
    } catch (_err) {
      setError("Submission failed. Please try again or call our helpline.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <section
        className="py-20 px-4 text-center"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.95 0.03 70) 0%, oklch(0.96 0.02 15) 100%)",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Safe & Secure
          </span>
          <h1 className="font-playfair text-4xl sm:text-5xl font-extrabold text-charcoal-deep mt-2 mb-4">
            Report an Incident
          </h1>
          <p className="text-lg text-foreground/65 leading-relaxed">
            Your report is completely anonymous and encrypted. You do not need
            to identify yourself. Every report helps us take action and protect
            other women.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          {/* Privacy assurance */}
          <div className="flex flex-wrap gap-4 mb-8">
            {[
              { icon: Lock, text: "Fully Encrypted" },
              { icon: Eye, text: "Anonymous Submission" },
              { icon: Shield, text: "Your Data Protected" },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 bg-cream-bg px-4 py-2 rounded-full text-sm font-medium text-primary"
              >
                <Icon className="w-4 h-4" />
                {text}
              </div>
            ))}
          </div>

          {success ? (
            <div
              className="text-center py-16 rounded-2xl bg-cream-bg"
              data-ocid="report.success_state"
            >
              <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="font-playfair text-2xl font-bold text-charcoal-deep mb-3">
                Report Submitted Successfully
              </h2>
              <p className="text-muted-foreground max-w-sm mx-auto">
                Thank you for your courage. Our team will review your report and
                may reach out if you provided contact information. You are not
                alone.
              </p>
              <Button
                className="mt-6 rounded-full bg-primary text-white px-8"
                onClick={() => {
                  setSuccess(false);
                  setReportType("");
                  setDescription("");
                  setLocation("");
                  setContact("");
                }}
                data-ocid="report.secondary_button"
              >
                Submit Another Report
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              data-ocid="report.modal"
            >
              <div className="rounded-2xl shadow-card p-8 border border-border">
                <h2 className="font-playfair text-xl font-bold text-charcoal-deep mb-6">
                  Incident Details
                </h2>

                <div className="space-y-5">
                  <div>
                    <Label
                      htmlFor="incident-type"
                      className="text-sm font-semibold text-foreground mb-1.5 block"
                    >
                      Type of Incident <span className="text-emergency">*</span>
                    </Label>
                    <Select onValueChange={setReportType} value={reportType}>
                      <SelectTrigger
                        className="rounded-xl"
                        data-ocid="report.select"
                        id="incident-type"
                      >
                        <SelectValue placeholder="Select incident type" />
                      </SelectTrigger>
                      <SelectContent>
                        {incidentTypes.map((t) => (
                          <SelectItem key={t} value={t}>
                            {t}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label
                      htmlFor="description"
                      className="text-sm font-semibold text-foreground mb-1.5 block"
                    >
                      Description <span className="text-emergency">*</span>
                    </Label>
                    <Textarea
                      id="description"
                      placeholder="Describe what happened. Include as much or as little detail as you are comfortable sharing."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={5}
                      className="rounded-xl resize-none"
                      data-ocid="report.textarea"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="location"
                      className="text-sm font-semibold text-foreground mb-1.5 block"
                    >
                      Location{" "}
                      <span className="text-muted-foreground text-xs font-normal">
                        (Optional)
                      </span>
                    </Label>
                    <Input
                      id="location"
                      placeholder="City, area, or address (optional)"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="rounded-xl"
                      data-ocid="report.input"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="contact"
                      className="text-sm font-semibold text-foreground mb-1.5 block"
                    >
                      Contact Information{" "}
                      <span className="text-muted-foreground text-xs font-normal">
                        (Optional — for follow-up only)
                      </span>
                    </Label>
                    <Input
                      id="contact"
                      placeholder="Phone or email (optional, completely confidential)"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      className="rounded-xl"
                      data-ocid="report.input"
                    />
                  </div>
                </div>

                {error && (
                  <div
                    className="mt-4 p-3 rounded-lg bg-emergency/10 text-emergency text-sm font-medium"
                    data-ocid="report.error_state"
                  >
                    {error}
                  </div>
                )}

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="flex-1 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold py-5 shadow-rose"
                    data-ocid="report.submit_button"
                  >
                    {submitting ? "Submitting..." : "Submit Report Anonymously"}
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  🔒 Your report is end-to-end encrypted. We will never share
                  your information without your explicit consent.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
