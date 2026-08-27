const faqs = [
  ["What do I have to write?", "You will be provided with the material and instructions for the assigned work. The material should be copied neatly in your own handwriting."],
  ["Which paper size is required?", "The work is designed around A4-size pages unless the specific assignment instructions state otherwise."],
  ["Is the material provided by the company?", "Required assignment material is provided according to the applicable work process."],
  ["How is the parcel delivered?", "The parcel is dispatched to the registered address through the designated courier process."],
  ["How is completed work collected?", "Collection or submission is arranged according to the instructions supplied with the assignment."],
  ["How long does delivery take?", "Any delivery timeline should be confirmed through the company's current registration and courier instructions. Do not rely on an estimated timeline until it has been confirmed."],
];

export default function FAQ() {
  return (
    <section className="section alt">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Questions</span>
          <h2>Frequently asked.</h2>
        </div>

        <div className="faq-grid">
          {faqs.map(([question, answer]) => (
            <details className="faq-item" key={question}>
              <summary>{question}<span>+</span></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}