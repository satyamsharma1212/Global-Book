"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, MessageCircle } from "lucide-react";

export default function RegisterPage() {
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const name = data.get("name")?.toString().trim();
    const phone = data.get("phone")?.toString().trim();
    const city = data.get("city")?.toString().trim();
    const address = data.get("address")?.toString().trim();
    const a4Setup = data.get("a4Setup")?.toString();
    const ready = data.get("ready")?.toString();
    const contact = data.get("contact")?.toString();
    const message = data.get("message")?.toString().trim();

    const number =
      process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "91XXXXXXXXXX";

    const whatsappMessage = [
      "📚 GLOBAL BOOK PUBLISHING",
      "",
      "📝 REGISTRATION ENQUIRY",
      "",
      "👤 APPLICANT DETAILS",
      `Name: ${name}`,
      `WhatsApp / Phone: ${phone}`,
      `City: ${city}`,
      `Full Address: ${address}`,
      "",
      "✍️ WORK DETAILS",
      `A4 Writing Setup: ${a4Setup}`,
      `Ready to Complete Assignment: ${ready}`,
      "",
      "📞 PREFERRED CONTACT",
      contact,
      "",
      "💬 ADDITIONAL MESSAGE",
      message || "No additional message.",
      "",
      "I would like to know more about the handwriting work and registration process.",
    ].join("\n");

    setSent(true);

    const whatsappUrl = `https://wa.me/${number}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <>
      {/* =========================================================
          PAGE HERO
      ========================================================= */}

      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Registration</span>

          <h1>Start with your basic details.</h1>

          <p>
            Complete the registration enquiry below. Your answers will be
            prepared and sent directly to the company's WhatsApp channel.
          </p>
        </div>
      </section>

      {/* =========================================================
          REGISTRATION SECTION
      ========================================================= */}

      <section
        className="section"
        style={{ paddingTop: 20 }}
      >
        <div className="container form-shell">

          {/* =====================================================
              REGISTRATION INFORMATION
          ===================================================== */}

          <div className="registration-info-card">

            {/* HEADER */}

            <div className="registration-info-top">
              <div className="registration-info-icon">
                <CheckCircle2 size={22} />
              </div>

              <div>
                <span className="registration-kicker">
                  Registration Guide
                </span>

                <h2>Before you continue</h2>

                <p>
                  A few important things to keep in mind before
                  submitting your work enquiry.
                </p>
              </div>
            </div>

            {/* POINTS */}

            <div className="registration-points">

              <div className="registration-point">
                <span className="point-number">01</span>

                <div>
                  <strong>Read the work details</strong>

                  <p>
                    Understand the handwriting assignment and the
                    instructions provided for completing the work.
                  </p>
                </div>
              </div>

              <div className="registration-point">
                <span className="point-number">02</span>

                <div>
                  <strong>Provide correct information</strong>

                  <p>
                    Enter an active phone number and your complete
                    address so the company can contact you.
                  </p>
                </div>
              </div>

              <div className="registration-point">
                <span className="point-number">03</span>

                <div>
                  <strong>Check the page requirements</strong>

                  <p>
                    The assignment is completed on A4-size pages
                    according to the supplied instructions.
                  </p>
                </div>
              </div>

              <div className="registration-point">
                <span className="point-number">04</span>

                <div>
                  <strong>Understand the process</strong>

                  <p>
                    Review the material delivery, work completion,
                    and collection procedure before proceeding.
                  </p>
                </div>
              </div>

            </div>

            {/* IMPORTANT NOTE */}

            <div className="registration-note">

              <div className="registration-note-icon">
                <CheckCircle2 size={17} />
              </div>

              <div>
                <strong>Important information</strong>

                <p>
                  Registration is an enquiry and does not by itself
                  guarantee assignment allocation, income, delivery,
                  or acceptance. Please confirm the current terms
                  directly with the company.
                </p>
              </div>

            </div>
          </div>

          {/* =====================================================
              REGISTRATION FORM
          ===================================================== */}

          <div className="form-card">

            <h2>Registration Enquiry</h2>

            <p>
              Answer the questions below. Required fields must be
              completed before continuing to WhatsApp.
            </p>

            <form
              className="form-grid"
              onSubmit={submit}
            >

              {/* =================================================
                  NAME + PHONE
              ================================================= */}

              <div className="form-row">

                <div className="field">
                  <label htmlFor="name">
                    Full Name *
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="field">
                  <label htmlFor="phone">
                    WhatsApp / Phone Number *
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

              </div>

              {/* =================================================
                  CITY
              ================================================= */}

              <div className="field">

                <label htmlFor="city">
                  City *
                </label>

                <input
                  id="city"
                  name="city"
                  type="text"
                  placeholder="Enter your city"
                  required
                />

              </div>

              {/* =================================================
                  ADDRESS
              ================================================= */}

              <div className="field">

                <label htmlFor="address">
                  Full Address *
                </label>

                <textarea
                  id="address"
                  name="address"
                  placeholder="Enter your complete address"
                  required
                />

              </div>

              {/* =================================================
                  A4 QUESTION
              ================================================= */}

              <div className="field">

                <label htmlFor="a4Setup">
                  Do you have access to A4-size writing pages? *
                </label>

                <select
                  id="a4Setup"
                  name="a4Setup"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select an option
                  </option>

                  <option value="Yes">
                    Yes
                  </option>

                  <option value="No">
                    No
                  </option>
                </select>

              </div>

              {/* =================================================
                  WORK QUESTION
              ================================================= */}

              <div className="field">

                <label htmlFor="ready">
                  Are you ready to complete the assigned
                  handwriting work according to the instructions? *
                </label>

                <select
                  id="ready"
                  name="ready"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select an option
                  </option>

                  <option value="Yes, I am ready">
                    Yes, I am ready
                  </option>

                  <option value="I need more information">
                    I need more information
                  </option>
                </select>

              </div>

              {/* =================================================
                  CONTACT METHOD
              ================================================= */}

              <div className="field">

                <label htmlFor="contact">
                  Preferred Contact Method *
                </label>

                <select
                  id="contact"
                  name="contact"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select contact method
                  </option>

                  <option value="WhatsApp">
                    WhatsApp
                  </option>

                  <option value="Phone Call">
                    Phone Call
                  </option>
                </select>

              </div>

              {/* =================================================
                  MESSAGE
              ================================================= */}

              <div className="field">

                <label htmlFor="message">
                  Any Question or Requirement
                </label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your question here..."
                />

              </div>

              {/* =================================================
                  SUBMIT
              ================================================= */}

              <button
                className="btn btn-primary"
                type="submit"
              >
                Continue on WhatsApp

                <MessageCircle size={17} />
              </button>

              {/* SUCCESS MESSAGE */}

              {sent && (
                <div className="form-status">
                  Your enquiry has been prepared for WhatsApp.
                </div>
              )}

            </form>
          </div>

        </div>
      </section>
    </>
  );
}