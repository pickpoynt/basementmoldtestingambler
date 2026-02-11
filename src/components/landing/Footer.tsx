import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ShieldCheck, Home, Waves, Utensils } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center">
                <Utensils className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-heading font-bold text-xl block leading-none">Sausalito</span>
                <span className="text-sm font-medium text-indigo-400">Kitchen Mold Experts</span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed font-medium">
              Sausalito's premier certified kitchen restoration specialists. We provide non-toxic, food-safe mold remediation for luxury hillside homes and waterfront properties.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors group">
                <Facebook className="w-5 h-5 text-slate-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors group">
                <Instagram className="w-5 h-5 text-slate-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors group">
                <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 font-heading text-white">Our Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2 font-medium"> Cabinet Remediation</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2 font-medium"> Infrared Leak Mapping</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2 font-medium"> HEPA Air Purification</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2 font-medium"> Post-Removal Air Testing</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2 font-medium"> Dishwasher Leak Repair</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 font-heading text-white">Company</h4>
            <ul className="space-y-4">
              <li><a href="#why-us" className="text-slate-400 hover:text-indigo-400 transition-colors font-medium">Why Us</a></li>
              <li><a href="#kitchen-mold-info" className="text-slate-400 hover:text-indigo-400 transition-colors font-medium">Kitchen Health</a></li>
              <li><a href="#faq" className="text-slate-400 hover:text-indigo-400 transition-colors font-medium">Restoration FAQ</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-indigo-400 transition-colors font-medium">Emergency Contact</a></li>
              <li><p className="text-slate-400 font-medium">Privacy Policy</p></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-lg font-bold mb-8 font-heading text-white">Contact Info</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-1">Call Anytime</p>
                  <a href="tel:3802660944" className="text-lg font-bold text-white hover:text-indigo-400 transition-colors">
                    (380) 266-0944
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-1">Service Region</p>
                  <p className="text-white font-bold">
                    Sausalito & Marin County, CA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-900 flex flex-col md:row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} Sausalito Kitchen Mold Experts. Professional Kitchen Restoration.
          </p>
          <div className="flex items-center gap-2 text-slate-600 text-xs">
            <ShieldCheck className="w-4 h-4" />
            <span>Certified IICRC & EPA Partner</span>
          </div>
        </div>
      </div>

      {/* Structured Data for LocalBusiness */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Sausalito Attic Mold Pros",
          "telephone": "+1-380-266-0944",
          "url": "https://sausalito-attic-mold.com/",
          "logo": "https://sausalito-attic-mold.com/logo.png",
          "image": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80",
          "description": "Professional attic mold remediation and ventilation services in Sausalito, CA. We specialize in hillside moisture control and non-toxic removal.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Serving Sausalito and the Hillside Districts",
            "addressLocality": "Sausalito",
            "addressRegion": "CA",
            "postalCode": "94965",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 37.8591,
            "longitude": -122.4853
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          }
        })}
      </script>
    </footer>
  );
};

export default Footer;

