import type { Metadata } from "next";
import { BookOpen, Building2, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "About Global Book Publishing and business information.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">About us</span>
          <h1>Publishing, pages, and a process built around clarity.</h1>
          <p>
            Global Book Publishing presents information about its handwriting
            assignment workflow, registration process, and related support.
          </p>
        </div>
      </section>

      <section className="section" style={{paddingTop:20}}>
        <div className="container work-grid">
          <div className="work-panel">
            <BookOpen size={34} />
            <h2>Global Book Publishing</h2>
            <p>
              Our website is designed to make the work process easier to
              understand before an applicant decides to register.
            </p>
          </div>

          <div className="details">
            <article className="detail">
              <div className="icon-box"><Building2 size={20}/></div>
              <div>
                <h3>Legal business name</h3>
                <p>Global Books & Edumall Private Limited</p>
              </div>
            </article>
            <article className="detail">
              <div className="icon-box"><MapPin size={20}/></div>
              <div>
                <h3>Registered business address</h3>
                <p>Nirmala Centre XVIII/365 B, College Road, Muvattupuzha, Kerala — 686661</p>
              </div>
            </article>
            <article className="detail">
              <div className="icon-box"><BookOpen size={20}/></div>
              <div>
                <h3>GSTIN</h3>
                <p>32AAECG9371P1Z2</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}