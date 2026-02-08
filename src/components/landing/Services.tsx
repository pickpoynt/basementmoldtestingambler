import { Search, Droplets, Shield, Hammer, AlertTriangle, Waves, Activity, Zap, ClipboardList } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Primary Pump Replacement",
    description: "High-capacity submersible pumps designed for the heavy silt levels found in Peoria soil. Reliable, industrial-grade motor protection.",
    link: "#sump-pump-info"
  },
  {
    icon: Shield,
    title: "Battery Backup Systems",
    description: "Protection when the Peoria power grid fails. Our redundant systems pump thousands of gallons on a single charge during storms.",
    link: "#sump-pump-info"
  },
  {
    icon: AlertTriangle,
    title: "Emergency Pump Repair",
    description: "24/7 rapid response for failing sump pumps in the Peoria area. We eliminate rising water before it reaches your finished basement.",
    link: "#sump-pump-info"
  },
  {
    icon: Waves,
    title: "Sump Pit Maintenance",
    description: "Comprehensive cleaning and descaling of your drainage pit to ensure zero mechanical interference with your pump's operation.",
    link: "#sump-pump-info"
  },
  {
    icon: Activity,
    title: "Sewage Ejector Service",
    description: "Specialized pumps for basement bathrooms and laundry rooms. We install heavy-duty grinders and high-torque ejector units.",
    link: "#sump-pump-info"
  },
  {
    icon: Droplets,
    title: "Waterproofing Inspections",
    description: "Full diagnostic of your Peoria home's drain tile system and foundation to identify potential flooding risks before they occur.",
    link: "#sump-pump-info"
  },
  {
    icon: Search,
    title: "Alarm & Wi-Fi Monitoring",
    description: "Stay informed from anywhere. We install smart sensors that alert your phone if pump levels rise or if power is lost at your Peoria property.",
    link: "#sump-pump-info"
  },
  {
    icon: ClipboardList,
    title: "New Home Pump Scans",
    description: "Peace of mind for Peoria buyers. We certify the status of the basement drainage system before you close on your new Illinois home.",
    link: "#sump-pump-info"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Peoria's Specialized Flood Protection
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Don't trust a generic plumber with your basement's safety. Our Peoria team specializes specifically in the engineering of high-capacity sump pump systems.
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
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                    <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
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

