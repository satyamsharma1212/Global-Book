import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="cta">
      <div className="container cta-inner">
        <div>
          <h2>Ready to get started?</h2>
          <p>Review the work details and submit your registration enquiry.</p>
        </div>
        <Link href="/register" className="btn btn-light">
          Register Now <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  );
}