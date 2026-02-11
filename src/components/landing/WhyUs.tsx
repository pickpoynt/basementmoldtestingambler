import { ShieldCheck, Clock, Award, Utensils } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Food-Safe Protocols",
    description: "We use only EPA-registered, non-toxic antimicrobials that are safe for kitchen surfaces and food prep areas."
  },
  {
    icon: Utensils,
    title: "Cabinet Specialists",
    description: "Detailed remediation techniques designed to save luxury custom cabinetry and restore wood finish."
  },
  {
    icon: Clock,
    title: "Rapid Response",
    description: "Our Sausalito-based crews are on-site within 60 minutes for emergency leak and mold diagnostics."
  },
  {
    icon: Award,
    title: "Certified Experts",
    description: "IICRC certified technicians with specific training in high-end kitchen restoration and moisture control."
  }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Sausalito's Trusted Kitchen Restoration Team
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            We understand the unique architectural needs of Marin County kitchens and provide precision care for your home.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:bg-slate-800 transition-colors group"
              >
                <div className="w-14 h-14 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-6 group-hover:bg-indigo-500/30 transition-colors">
                  <Icon className="w-7 h-7 text-indigo-400" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">
                  {reason.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
