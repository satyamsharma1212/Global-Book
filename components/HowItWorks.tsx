const steps = [
  ["01", "Register", "Submit your basic details through the registration form."],
  ["02", "Receive Material", "The required material is dispatched to your registered address."],
  ["03", "Complete Work", "Copy the provided material neatly in your own handwriting."],
  ["04", "Submit Work", "Follow the supplied instructions for collection or submission."],
];

export default function HowItWorks() {
  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">The process</span>
          <h2>Four simple steps.</h2>
          <p>Everything starts with clear instructions and a straightforward workflow.</p>
        </div>

        <div className="steps">
          {steps.map(([number, title, text]) => (
            <article className="step" key={number}>
              <span className="step-number">{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}