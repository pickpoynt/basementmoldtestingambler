import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "When should I replace my Peoria sump pump?",
    answer: "Most high-quality sump pumps have a lifespan of 7 to 10 years. In Peoria, where the water table can be high near the river, we recommend a proactive replacement every 7 years to avoid emergency failures during heavy Illinois spring rains."
  },
  {
    question: "Is a battery backup really necessary in Peoria?",
    answer: "Yes. Major storms in Central Illinois often cause power outages. Without a battery backup, your primary pump will stop working exactly when it's needed most. Our backup systems can pump for days on a single charge."
  },
  {
    question: "What size pump does my Peoria home need?",
    answer: "This depends on the depth of your basement and the volume of water entry. Most Peoria residential homes require a 1/3 HP or 1/2 HP pump. We perform a volume calculation to ensure your new pump won't short-cycle or burn out."
  },
  {
    question: "Can I replace the sump pump myself?",
    answer: "While possible, professional installation ensures the discharge lines are correctly pitched, the check valve is functional, and the electrical connections are waterproof. We provide a full warranty on both parts and labor for your Peoria home."
  },
  {
    question: "What is a 'pedestal' pump vs. a 'submersible' pump?",
    answer: "Pedestal pumps have the motor above the water line, while submersibles sit directly in the pit. Submersibles are much quieter, safer for families with children, and generally more powerful—making them our top recommendation for Peoria basements."
  },
  {
    question: "Does Peoria city code require an inspection?",
    answer: "Replacements usually do not require a major inspection, but new installations or significant discharge line changes must meet Peoria plumbing codes. We handle all compliance and ensure your system is up to current standards."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Peoria Sump Pump FAQ
          </h2>
          <p className="text-lg text-slate-600">
            Critical flood protection expertise for Peoria homeowners and property managers.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-slate-200 rounded-xl px-4 bg-white shadow-sm overflow-hidden">
              <AccordionTrigger className="text-left font-heading font-bold text-slate-900 hover:text-blue-600 py-6 transition-colors font-semibold leading-relaxed">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;



