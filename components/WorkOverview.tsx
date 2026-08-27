import { CheckCircle2, PenLine, FileText, Package, ClipboardCheck } from "lucide-react";
import Link from "next/link";

const details = [
  { icon: PenLine, title: "Handwriting Assignment", text: "Look at the provided material and reproduce it neatly in your own clear handwriting." },
  { icon: FileText, title: "A4-Size Pages", text: "Use A4-size pages and follow the page, writing, and formatting instructions supplied with the assignment." },
  { icon: Package, title: "Material Delivery", text: "The required assignment material is prepared and dispatched according to the applicable work process." },
  { icon: ClipboardCheck, title: "Completion & Collection", text: "After completion, follow the company's instructions for collection or submission of the work." },
];

export default function WorkOverview() {
  return (
    <section className="section">
      <div className="container work-grid">
        <div className="work-panel">
          <span className="eyebrow" style={{color:"#d8c6a0"}}>Work details</span>
          <h2>Your work, clearly explained.</h2>
          <p>
            The assignment is focused on careful, readable handwriting. The
            supplied material and instructions should be followed exactly.
          </p>
          <ul className="check-list">
            <li><CheckCircle2 size={17} /> Company-provided assignment material</li>
            <li><CheckCircle2 size={17} /> A4-size page requirement</li>
            <li><CheckCircle2 size={17} /> Clear handwriting instructions</li>
            <li><CheckCircle2 size={17} /> Defined parcel process</li>
          </ul>
          <div style={{marginTop:28}}>
            <Link href="/work-details" className="btn btn-light">Read Full Details</Link>
          </div>
        </div>

        <div className="details">
          {details.map(({icon: Icon, title, text}) => (
            <article className="detail" key={title}>
              <div className="icon-box"><Icon size={20} /></div>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}