import type { Metadata } from "next";
import { Mail, MessageCircle, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Global Book Publishing.",
};

export default function ContactPage() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "91XXXXXXXXXX";
  const whatsapp = `https://wa.me/${number}`;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1>Have a question about the work?</h1>
          <p>Use the official contact channel provided by the company for registration, eligibility, delivery, and assignment questions.</p>
        </div>
      </section>

      <section className="section" style={{paddingTop:20}}>
        <div className="container form-shell">
          <div className="contact-card">
            <h2>Contact information</h2>
            <p>Replace the placeholder contact details below with the company's verified contact information before launch.</p>
            <div className="contact-list">
              <div className="contact-row">
                <div className="icon-box"><MessageCircle size={19}/></div>
                <div><strong>WhatsApp</strong><span>Configure NEXT_PUBLIC_WHATSAPP_NUMBER</span></div>
              </div>
              <div className="contact-row">
                <div className="icon-box"><Mail size={19}/></div>
                <div><strong>Email</strong><span>Add the verified official email address</span></div>
              </div>
              <div className="contact-row">
                <div className="icon-box"><MapPin size={19}/></div>
                <div><strong>Address</strong><span>Nirmala Centre XVIII/365 B, College Road, Muvattupuzha, Kerala — 686661</span></div>
              </div>
            </div>
            <div style={{marginTop:28}}>
              <a className="btn btn-primary" href={whatsapp} target="_blank" rel="noopener noreferrer">
                Open WhatsApp <MessageCircle size={17}/>
              </a>
            </div>
          </div>

          <div className="form-card">
            <h2>Send an enquiry</h2>
            <p>For now this form opens WhatsApp with your enquiry. No details are stored by this website.</p>
            <form className="form-grid" action={whatsapp} method="get">
              <div className="form-row">
                <div className="field"><label htmlFor="name">Name</label><input id="name" name="name" required placeholder="Your name"/></div>
                <div className="field"><label htmlFor="phone">Phone</label><input id="phone" name="phone" required placeholder="Your phone number"/></div>
              </div>
              <div className="field"><label htmlFor="message">Message</label><textarea id="message" name="message" required placeholder="How can we help?"/></div>
              <button className="btn btn-primary" type="submit">Send Enquiry <MessageCircle size={17}/></button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}