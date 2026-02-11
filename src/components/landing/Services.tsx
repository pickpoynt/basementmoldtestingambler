import { Wind, Shield, Sparkles, AlertTriangle, Zap, Activity, Filter, Thermometer, ShieldCheck, Droplets, Waves, Home, Microscope, GlassWater, Hammer } from "lucide-react";

const services = [
  {
    icon: Microscope,
    title: "Eco-Remediation",
    description: "Surgical removal of kitchen mold using food-safe, non-toxic antimicrobials safe for your family and cabinetry.",
    link: "#kitchen-mold-info"
  },
  {
    icon: Droplets,
    title: "Leaking Sink Detection",
    description: "Precision infrared mapping to find hidden moisture behind cabinets and under sink enclosures.",
    link: "#kitchen-mold-info"
  },
  {
    icon: ShieldCheck,
    title: "HEPA Air Scrubbing",
    description: "Industrial-grade air filtration to capture 99.97% of mold spores, preventing contamination of your home.",
    link: "#kitchen-mold-info"
  },
  {
    icon: GlassWater,
    title: "Moisture Mitigation",
    description: "Digital analysis of humidity levels in your kitchen to prevent future fog-moisture accumulation.",
    link: "#kitchen-mold-info"
  },
  {
    icon: Sparkles,
    title: "Cabinet Restoration",
    description: "Specialized cleaning and structural drying to save your high-end Sausalito cabinetry from rot.",
    link: "#kitchen-mold-info"
  },
  {
    icon: Shield,
    title: "Non-Toxic Sealants",
    description: "Applying EPA-registered coatings that prevent mold roots from penetrating porous wood surfaces.",
    link: "#kitchen-mold-info"
  },
  {
    icon: Activity,
    title: "Post-Removal Testing",
    description: "Independent air quality testing to certify your kitchen is professionally dry and safe for food prep.",
    link: "#kitchen-mold-info"
  },
  {
    icon: Zap,
    title: "1-Hour Sausalito ETA",
    description: "Marin County's fastest kitchen mold diagnostic crew. Available 24/7 for emergency water damage calls.",
    link: "#kitchen-mold-info"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Sausalito's Premier Kitchen Mold Restoration
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Protect your home's value and your health. Our Sausalito team uses specialized kitchen equipment and Marin County moisture protocols.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-slate-50 border border-slate-100 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <a href={service.link}>
                  <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-colors">
                    <Icon className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;


