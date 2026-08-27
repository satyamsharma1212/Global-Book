"use client";

import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className={`container nav ${open ? "mobile-open" : ""}`}>
        <Link href="/" className="brand" onClick={close}>
          <span className="brand-mark">GB</span>
          <span className="brand-name">
            <strong>Global Book</strong>
            <span>Publishing</span>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          <Link href="/" onClick={close}>Home</Link>
          <Link href="/work-details" onClick={close}>Work Details</Link>
          <Link href="/how-it-works" onClick={close}>How It Works</Link>
          <Link href="/about" onClick={close}>About</Link>
          <Link href="/contact" onClick={close}>Contact</Link>
        </nav>

        <div className="nav-actions">
          <Link className="btn btn-primary" href="/register" onClick={close}>
            Register <ArrowUpRight size={16} />
          </Link>
        </div>

        <button
          className="mobile-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}