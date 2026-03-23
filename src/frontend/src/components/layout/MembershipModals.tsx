import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useActor } from "../../hooks/useActor";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

export function JoinClubModal({ open, onClose }: ModalProps) {
  const { actor } = useActor();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = () => {
    const errs: { name?: string; email?: string } = {};
    if (!name.trim()) errs.name = "Full name is required.";
    if (!email.trim()) errs.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Please enter a valid email.";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitError("");
    setLoading(true);
    try {
      if (actor) {
        await actor.joinClub(name, email);
      }
      setSubmitted(true);
    } catch (_err) {
      setSubmitError("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setName("");
    setEmail("");
    setErrors({});
    setSubmitted(false);
    setSubmitError("");
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && handleClose()}>
      <DialogContent
        className="sm:max-w-md bg-[oklch(var(--cream-bg))] border-[oklch(var(--border))]"
        data-ocid="join_club.dialog"
      >
        <DialogHeader>
          <DialogTitle className="font-['Playfair_Display'] text-2xl text-[oklch(var(--foreground))]">
            Join HER RISE
          </DialogTitle>
          <DialogDescription className="text-[oklch(var(--foreground)/0.65)]">
            Become a member and be part of our growing community.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div
            className="flex flex-col items-center gap-4 py-6 text-center"
            data-ocid="join_club.success_state"
          >
            <CheckCircle2 className="w-14 h-14 text-[oklch(var(--primary))]" />
            <p className="font-['Playfair_Display'] text-lg font-semibold text-[oklch(var(--foreground))]">
              Thank you for joining HER RISE!
            </p>
            <p className="text-sm text-[oklch(var(--foreground)/0.65)]">
              We&apos;ll be in touch soon.
            </p>
            <Button
              onClick={handleClose}
              className="rounded-full bg-[oklch(var(--primary))] text-[oklch(var(--primary-foreground))] hover:bg-[oklch(var(--primary)/0.9)] px-8 mt-2"
              data-ocid="join_club.close_button"
            >
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 pt-2">
            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="join-name"
                className="text-sm font-medium text-[oklch(var(--foreground)/0.8)]"
              >
                Full Name{" "}
                <span className="text-[oklch(var(--primary))]">*</span>
              </Label>
              <Input
                id="join-name"
                type="text"
                placeholder="Your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white border-[oklch(var(--border))] focus-visible:ring-[oklch(var(--primary)/0.4)]"
                data-ocid="join_club.input"
              />
              {errors.name && (
                <span
                  className="text-xs text-red-500"
                  data-ocid="join_club.error_state"
                >
                  {errors.name}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="join-email"
                className="text-sm font-medium text-[oklch(var(--foreground)/0.8)]"
              >
                Email Address{" "}
                <span className="text-[oklch(var(--primary))]">*</span>
              </Label>
              <Input
                id="join-email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white border-[oklch(var(--border))] focus-visible:ring-[oklch(var(--primary)/0.4)]"
                data-ocid="join_club.input"
              />
              {errors.email && (
                <span
                  className="text-xs text-red-500"
                  data-ocid="join_club.error_state"
                >
                  {errors.email}
                </span>
              )}
            </div>

            {submitError && (
              <p className="text-xs text-red-500 text-center">{submitError}</p>
            )}

            <div className="flex gap-3 justify-end pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                className="rounded-full border-[oklch(var(--border))]"
                data-ocid="join_club.cancel_button"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={loading}
                className="rounded-full bg-[oklch(var(--primary))] text-[oklch(var(--primary-foreground))] hover:bg-[oklch(var(--primary)/0.9)] px-8"
                data-ocid="join_club.submit_button"
              >
                {loading ? "Sending..." : "Join the Club"}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

export function SubscribeModal({ open, onClose }: ModalProps) {
  const { actor } = useActor();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setError("Email is required.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email.");
      return;
    }
    setError("");
    setSubmitError("");
    setLoading(true);
    try {
      if (actor) {
        await actor.subscribe(email);
      }
      setSubmitted(true);
    } catch (_err) {
      setSubmitError("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setEmail("");
    setError("");
    setSubmitted(false);
    setSubmitError("");
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && handleClose()}>
      <DialogContent
        className="sm:max-w-md bg-[oklch(var(--cream-bg))] border-[oklch(var(--border))]"
        data-ocid="subscribe.dialog"
      >
        <DialogHeader>
          <DialogTitle className="font-['Playfair_Display'] text-2xl text-[oklch(var(--foreground))]">
            Stay in the Loop
          </DialogTitle>
          <DialogDescription className="text-[oklch(var(--foreground)/0.65)]">
            Subscribe for updates on events, programs, and community news.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div
            className="flex flex-col items-center gap-4 py-6 text-center"
            data-ocid="subscribe.success_state"
          >
            <CheckCircle2 className="w-14 h-14 text-[oklch(var(--primary))]" />
            <p className="font-['Playfair_Display'] text-lg font-semibold text-[oklch(var(--foreground))]">
              You&apos;re subscribed!
            </p>
            <p className="text-sm text-[oklch(var(--foreground)/0.65)]">
              Stay tuned for updates.
            </p>
            <Button
              onClick={handleClose}
              className="rounded-full bg-[oklch(var(--primary))] text-[oklch(var(--primary-foreground))] hover:bg-[oklch(var(--primary)/0.9)] px-8 mt-2"
              data-ocid="subscribe.close_button"
            >
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 pt-2">
            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="sub-email"
                className="text-sm font-medium text-[oklch(var(--foreground)/0.8)]"
              >
                Email Address{" "}
                <span className="text-[oklch(var(--primary))]">*</span>
              </Label>
              <Input
                id="sub-email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white border-[oklch(var(--border))] focus-visible:ring-[oklch(var(--primary)/0.4)]"
                data-ocid="subscribe.input"
              />
              {error && (
                <span
                  className="text-xs text-red-500"
                  data-ocid="subscribe.error_state"
                >
                  {error}
                </span>
              )}
            </div>

            {submitError && (
              <p className="text-xs text-red-500 text-center">{submitError}</p>
            )}

            <div className="flex gap-3 justify-end pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                className="rounded-full border-[oklch(var(--border))]"
                data-ocid="subscribe.cancel_button"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={loading}
                className="rounded-full bg-[oklch(var(--primary))] text-[oklch(var(--primary-foreground))] hover:bg-[oklch(var(--primary)/0.9)] px-8"
                data-ocid="subscribe.submit_button"
              >
                {loading ? "Sending..." : "Subscribe"}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default function MembershipModals() {
  return null;
}
