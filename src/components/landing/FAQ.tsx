const faqs = [
  {
    question: "Is the mold removal process safe for food preparation areas?",
    answer: "Absolutely. We use EPA-registered, food-safe antimicrobials that are specifically designed for kitchens. Our HEPA air scrubbing also ensures that no mold spores are left circulating in your cooking environment."
  },
  {
    question: "Can you remove mold without destroying my custom cabinets?",
    answer: "Yes, that is our specialty. We use precision moisture mapping to find the exact source of the leak and often perform 'behind-cabinet' remediation or specialized drying techniques that preserve the structural integrity and finish of high-end woodwork."
  },
  {
    question: "How long does the kitchen remediation process take?",
    answer: "For most Sausalito kitchens, the initial diagnostic and containment take just a few hours. Complete remediation and structural drying typically take 2-4 days, depending on the extent of the moisture intrusion behind the cabinets."
  },
  {
    question: "Does insurance cover kitchen cabinet mold removal?",
    answer: "In many cases, yes, if the mold is a result of a sudden and accidental water leak (like a burst pipe under the sink). We provide detailed documentation and moisture mapping to assist with your insurance claim process."
  },
  {
    question: "Why is mold growing in my kitchen if I don't see a leak?",
    answer: "Sausalito's high coastal humidity, combined with steam from cooking, can lead to condensation in the dark, unventilated spaces behind cabinets. Small, slow pinhole leaks in water lines can also cause significant mold growth before any water is visible on the floor."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
              Kitchen Restoration FAQ
            </h2>
            <p className="text-lg text-slate-600">
              Common questions about our Sausalito kitchen mold remediation services.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-colors"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
