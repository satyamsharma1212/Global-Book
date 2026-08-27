import Link from "next/link";
import { BookOpen, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="brand">
              <span className="brand-mark"><BookOpen size={19} /></span>
              <span className="brand-name">
                <strong>Global Book</strong>
                <span>Publishing</span>
              </span>
            </Link>
            <p className="footer-copy">
              Information and registration for handwriting assignments and
              related work processes.
            </p>
          </div>

          <div>
            <h4>Explore</h4>
            <div className="footer-links">
              <Link href="/work-details">Work Details</Link>
              <Link href="/how-it-works">How It Works</Link>
              <Link href="/about">About Us</Link>
              <Link href="/register">Registration</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <h4>Business Information</h4>
            <div className="footer-links">
              <span>Global Books & Edumall Private Limited</span>
              <span><MapPin size={13} style={{verticalAlign:"-2px"}} /> Muvattupuzha, Kerala — 686661</span>
              <span>GSTIN: 32AAECG9371P1Z2</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Global Book Publishing. All rights reserved.</span>
          <span>Terms and eligibility may apply.</span>
        </div>
      </div>
    </footer>
  );
}