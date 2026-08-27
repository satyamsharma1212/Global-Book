import { BookOpen, FileText, PackageCheck, Truck } from "lucide-react";

const items = [
  { icon: FileText, title: "Simple Process", text: "Follow straightforward instructions for the assigned work." },
  { icon: BookOpen, title: "A4 Pages", text: "Assignments are completed on A4-size pages as specified." },
  { icon: PackageCheck, title: "Material Provided", text: "Required assignment material is supplied according to the process." },
  { icon: Truck, title: "Courier Process", text: "Delivery and collection follow the designated courier procedure." },
];

export default function InfoCards() {
  return (
    <section className="section alt">
      <div className="container">
        <div className="info-grid">
          {items.map(({ icon: Icon, title, text }) => (
            <article className="info-card" key={title}>
              <div className="icon-box"><Icon size={21} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}