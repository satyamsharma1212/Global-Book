import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works",
  description: "Understand the Global Book Publishing handwriting work process.",
};

const steps = [
  ["01", "Registration", "Complete the registration enquiry with accurate contact details."],
  ["02", "Material", "The required assignment material and instructions are provided through the applicable process."],
  ["03", "Handwriting", "Copy the supplied material neatly in your own handwriting on A4-size pages."],
  ["04", "Completion", "Review your pages for clarity, completeness, and consistency."],
  ["05", "Collection", "Follow the supplied instructions for collection or submission of the completed work."],
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">How it works</span>
          <h1>A clear process from registration to completion.</h1>
          <p>Follow each step carefully and keep your assignment material organised throughout the process.</p>
        </div>
      </section>

      <section className="section" style={{paddingTop:20}}>
        <div className="container">
          <div className="steps" style={{gridTemplateColumns:"1fr"}}>
            {steps.map(([n, title, text]) => (
              <article className="step" key={n} style={{display:"grid", gridTemplateColumns:"80px 1fr", gap:20}}>
                <span className="step-number">{n}</span>
                <div>
                  <h3 style={{marginTop:0}}>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Good practice</span>
            <h2>Make every page count.</h2>
            <p>Small details make handwritten work easier to review.</p>
          </div>
          <div className="info-grid">
            {[
              "Keep handwriting consistent.",
              "Follow the supplied page instructions.",
              "Check spelling and completeness.",
              "Keep pages clean and undamaged.",
            ].map((item) => (
              <article className="info-card" key={item}>
                <div className="icon-box"><CheckCircle2 size={21}/></div>
                <h3>{item}</h3>
              </article>
            ))}
          </div>
          <div style={{marginTop:32}}>
            <Link href="/register" className="btn btn-primary">Register <ArrowRight size={17}/></Link>
          </div>
        </div>
      </section>
    </>
  );
}