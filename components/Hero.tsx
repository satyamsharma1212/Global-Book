import Link from "next/link";
import { ArrowRight, PenLine } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow">Global Book Publishing</span>
          <h1>
            Write with care.
            <br />
            <em>Create with purpose.</em>
          </h1>
          <p className="hero-copy">
            A simple handwriting assignment process with clear instructions,
            company-provided material, A4-size pages, and a defined parcel
            delivery and collection process.
          </p>

          <div className="hero-actions">
            <Link href="/register" className="btn btn-primary">
              Register for Work <ArrowRight size={17} />
            </Link>
            <Link href="/work-details" className="btn btn-outline">
              View Work Details
            </Link>
          </div>

          <div className="hero-note">
            <PenLine size={15} />
            Read the complete work details before registering.
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="paper">
            <div className="paper-content" />
          </div>
          <div className="book-card">
            <span className="mini-label">The assignment</span>
            <h3>One page at a time.</h3>
            <p>
              Follow the supplied instructions and keep every page neat,
              clear, and consistent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}