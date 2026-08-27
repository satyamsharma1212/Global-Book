import type { Metadata } from "next";
import { CheckCircle2, FileText, PenLine, Package, Truck } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work Details",
  description: "Read the handwriting assignment and parcel process details.",
};

export default function WorkDetailsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Work details</span>
          <h1>Everything you need to know before registering.</h1>
          <p>
            Please read the assignment process, page requirements, delivery
            procedure, and registration information carefully.
          </p>
        </div>
      </section>

      <section className="section" style={{paddingTop:20}}>
        <div className="container courier">
          <article className="courier-card">
            <FileText size={30} color="#285943" />
            <h2>The assignment</h2>
            <p>
              The work involves looking at the material supplied for your
              assignment and copying it in your own clear, neat handwriting.
            </p>
            <ul className="check-list" style={{color:"#455149"}}>
              <li><CheckCircle2 size={17} /> Follow the supplied instructions.</li>
              <li><CheckCircle2 size={17} /> Write clearly and consistently.</li>
              <li><CheckCircle2 size={17} /> Use A4-size pages as instructed.</li>
              <li><CheckCircle2 size={17} /> Keep completed pages organised.</li>
            </ul>
          </article>

          <article className="courier-card">
            <Truck size={30} color="#285943" />
            <h2>Parcel process</h2>
            <p>
              The required parcel is dispatched to the registered address
              through the company's designated courier process. After the
              assignment is completed, collection or submission follows the
              instructions provided with the work.
            </p>
            <div className="notice">
              Delivery and collection timelines can vary. Confirm the current
              timeline and eligibility directly with the company before
              registration.
            </div>
          </article>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Important</span>
            <h2>Read before you register.</h2>
          </div>
          <div className="info-grid">
            {[
              [PenLine, "Write in your own handwriting", "The assignment is based on clear and readable handwriting."],
              [FileText, "Use the specified pages", "Follow the A4-size page and formatting requirements supplied with the assignment."],
              [Package, "Keep the parcel safe", "Store supplied and completed material safely until the next step."],
              [CheckCircle2, "Confirm the terms", "Confirm eligibility, timelines, payment terms, and any registration requirements directly with the company."],
            ].map(([Icon, title, text]) => {
              const I = Icon as typeof CheckCircle2;
              return <article className="info-card" key={title as string}>
                <div className="icon-box"><I size={21}/></div>
                <h3>{title as string}</h3>
                <p>{text as string}</p>
              </article>
            })}
          </div>
          <div style={{marginTop:32}}>
            <Link href="/register" className="btn btn-primary">Continue to Registration</Link>
          </div>
        </div>
      </section>
    </>
  );
}