import { Shield, Microscope, MapPin, Building2, ClipboardCheck, Zap, Award, CheckCircle2 } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Peoria's Pumping Authority",
    description: "We are the leading specialists for high-capacity flood prevention in Peoria, serving the Illinois River valley with precision and speed for over 20 years."
  },
  {
    icon: Microscope,
    title: "Diagnostic Site Assessment",
    description: "Every Peoria project begins with a full assessment of your basement's drainage capacity, ensuring we install the exact horsepower your property requires."
  },
  {
    icon: Building2,
    title: "Industrial Grade Equipment",
    description: "We use professional-grade cast iron pumps that far outlast the plastic consumer models found in big-box stores. Built for Peoria's toughest storms."
  },
  {
    icon: ClipboardCheck,
    title: "Licensed & Locally Insured",
    description: "Our Peoria team is fully licensed and insured in Illinois, ensuring your home is protected and all work exceeds local building and safety codes."
  },
  {
    icon: Shield,
    title: "Zero-Flood Guarantee",
    description: "We don't just replace pumps; we design systems. Our redundant backup configurations ensure your basement stays bone-dry, guaranteed."
  },
  {
    icon: MapPin,
    title: "Peoria's Local Team",
    description: "We live and work in Peoria. From Grandview Drive to North Peoria, we understand the specific water-table challenges facing our local neighborhoods."
  }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Peoria's Highest Rated Flood Specialists
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose the team that Peoria homeowners trust. We specialize in turning a basement flooding risk into a permanent, maintenance-free peace of mind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <reason.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;



