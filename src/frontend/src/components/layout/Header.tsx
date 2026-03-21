import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Heart, Menu, X } from "lucide-react";
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

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center gap-2 flex-shrink-0"
            data-ocid="nav.link"
          >
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
              <Heart className="w-5 h-5 text-white fill-white" />
            </div>
            <span className="font-bold text-xl text-purple-deep">
              <span className="text-primary">HER</span> RISE
            </span>
          </Link>

          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors rounded-md hover:bg-lavender-bg"
                activeProps={{ className: "text-primary font-semibold" }}
                data-ocid="nav.link"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button
              className="rounded-full bg-primary hover:bg-purple-deep text-white font-semibold px-6 shadow-purple"
              data-ocid="nav.primary_button"
            >
              Join the Club
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-foreground/70 hover:bg-lavender-bg"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-border px-4 pb-4 pt-2">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-3 py-2.5 text-sm font-medium text-foreground/70 hover:text-primary transition-colors rounded-md hover:bg-lavender-bg"
                onClick={() => setOpen(false)}
                data-ocid="nav.link"
              >
                {link.label}
              </Link>
            ))}
            <Button
              className="mt-2 rounded-full bg-primary text-white font-semibold"
              data-ocid="nav.primary_button"
            >
              Join the Club
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
