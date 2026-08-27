"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, MessageCircle } from "lucide-react";

export default function RegisterPage() {
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "91XXXXXXXXXX";

    const message = [
      "Hello Global Book Publishing,",
      "",
      "I would like to register / enquire about the handwriting work.",
      "",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `City: ${data.get("city")}`,
      `Preferred contact: ${data.get("contact")}`,
      `Message: ${data.get("message") || "No additional message."}`,
    ].join("\n");

    setSent(true);
    window.open(
      `https://wa.me/${number}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Registration</span>
          <h1>Start with your basic details.</h1>
          <p>Submit an enquiry and continue the conversation through the company's designated WhatsApp channel.</p>
        </div>
      </section>

      <section className="section" style={{paddingTop:20}}>
        <div className="container form-shell">
          <div className="contact-card">
            <h2>Before you submit</h2>
            <p>Please make sure the information you provide is accurate.</p>
            <ul className="check-list" style={{color:"#455149"}}>
              <li><CheckCircle2 size={17}/> Read the complete work details.</li>
              <li><CheckCircle2 size={17}/> Confirm current eligibility and terms.</li>
              <li><CheckCircle2 size={17}/> Use a phone number you can access.</li>
              <li><CheckCircle2 size={17}/> Confirm delivery and collection details.</li>
            </ul>
            <div className="notice">
              Registration does not by itself guarantee assignment allocation,
              income, delivery, or acceptance. Confirm the current terms
              directly with the company.
            </div>
          </div>

          <div className="form-card">
            <h2>Registration enquiry</h2>
            <p>We'll prepare your enquiry for WhatsApp.</p>
            <form className="form-grid" onSubmit={submit}>
              <div className="form-row">
                <div className="field"><label htmlFor="name">Full name *</label><input id="name" name="name" required /></div>
                <div className="field"><label htmlFor="phone">Phone number *</label><input id="phone" name="phone" required /></div>
              </div>
              <div className="form-row">
                <div className="field"><label htmlFor="city">City *</label><input id="city" name="city" required /></div>
                <div className="field">
                  <label htmlFor="contact">Preferred contact</label>
                  <select id="contact" name="contact" defaultValue="WhatsApp">
                    <option>WhatsApp</option>
                    <option>Phone</option>
                  </select>
                </div>
              </div>
              <div className="field"><label htmlFor="message">Message</label><textarea id="message" name="message" placeholder="Any question or requirement?"/></div>
              <button className="btn btn-primary" type="submit">Continue on WhatsApp <MessageCircle size={17}/></button>
              {sent && <div className="form-status">Your WhatsApp enquiry has been prepared.</div>}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}