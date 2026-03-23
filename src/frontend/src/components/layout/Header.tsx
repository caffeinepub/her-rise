import {
  JoinClubModal,
  SubscribeModal,
} from "@/components/layout/MembershipModals";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Technology", to: "/technology" },
  { label: "Report Incident", to: "/report" },
  { label: "Emergency Help", to: "/emergency" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [joinOpen, setJoinOpen] = useState(false);
  const [subscribeOpen, setSubscribeOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center flex-shrink-0"
            data-ocid="nav.link"
          >
            <img
              src="/assets/uploads/Her_LOGO-1-4.png"
              alt="HER RISE Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>

          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors rounded-md hover:bg-cream-bg relative group"
                activeProps={{ className: "text-primary font-semibold" }}
                data-ocid="nav.link"
              >
                {link.label}
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <Button
              variant="outline"
              className="rounded-full border-primary text-primary hover:bg-primary/10 font-semibold px-5"
              onClick={() => setSubscribeOpen(true)}
              data-ocid="nav.secondary_button"
            >
              Subscribe
            </Button>
            <Button
              className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 shadow-rose"
              onClick={() => setJoinOpen(true)}
              data-ocid="nav.primary_button"
            >
              Join the Club
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-foreground/70 hover:bg-cream-bg"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border px-4 pb-4 pt-2">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-3 py-2.5 text-sm font-medium text-foreground/70 hover:text-primary transition-colors rounded-md hover:bg-cream-bg"
                onClick={() => setOpen(false)}
                data-ocid="nav.link"
              >
                {link.label}
              </Link>
            ))}
            <Button
              variant="outline"
              className="mt-2 rounded-full border-primary text-primary font-semibold"
              onClick={() => {
                setOpen(false);
                setSubscribeOpen(true);
              }}
              data-ocid="nav.secondary_button"
            >
              Subscribe
            </Button>
            <Button
              className="mt-1 rounded-full bg-primary text-primary-foreground font-semibold"
              onClick={() => {
                setOpen(false);
                setJoinOpen(true);
              }}
              data-ocid="nav.primary_button"
            >
              Join the Club
            </Button>
          </nav>
        </div>
      )}

      <JoinClubModal open={joinOpen} onClose={() => setJoinOpen(false)} />
      <SubscribeModal
        open={subscribeOpen}
        onClose={() => setSubscribeOpen(false)}
      />
    </header>
  );
}
