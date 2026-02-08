import { Phone, Mail, MapPin, Activity, Shield, Hammer } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="font-heading font-bold text-xl text-white">
                Peoria Pump Pros
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Peoria's leading specialists in high-capacity sump pump replacement and basement flood prevention. We protect Peoria homes with industrial-grade technology.
            </p>
            <div className="flex items-center gap-4">
              <a href="tel:8777921410" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Phone className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">Pumping Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="hover:text-blue-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-600" /> Sump Pump Replacement</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-600" /> Battery Backup Systems</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-600" /> Emergency Flood Repair</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-600" /> Basement Waterproofing</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-600" /> Ejector Pump Service</a></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">Peoria Service Area</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-600" /> East Peoria & Morton</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-600" /> Washington & Metamora</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-600" /> Pekin & Bartonville</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-600" /> West Bluff & Heights</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-600" /> Dunlap & Edelstein</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">Peoria Flood Line</h4>
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl">
              <div className="text-blue-400 font-bold text-sm uppercase mb-2">IL Licensed Plumber</div>
              <a href="tel:8777921410" className="text-2xl font-heading font-bold text-white hover:text-blue-400 transition-colors">
                (877) 792-1410
              </a>
              <div className="flex items-center gap-2 mt-4 text-slate-400 text-sm">
                <Shield className="w-4 h-4 text-blue-600" />
                Licensed & Insured #PEOPUMP99
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-800 text-center md:text-left flex flex-col md:row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm">
            © {currentYear} Peoria Pump Pros. All rights reserved.
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </p>
          <div className="flex items-center gap-3">
            <div className="text-xs text-slate-600 italic">Sump pump replacement Peoria IL</div>
            <div className="w-2 h-2 rounded-full bg-blue-600/30" />
            <div className="text-xs text-slate-600 italic">Basement waterproofing Peoria</div>
          </div>
        </div>
      </div>

      {/* Structured Data for LocalBusiness */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Plumber",
          "name": "Peoria Pump Pros",
          "telephone": "+1-877-792-1410",
          "url": "https://peoria-sump-pump.com/",
          "logo": "https://peoria-sump-pump.com/logo.png",
          "image": "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80",
          "description": "Professional sump pump replacement and basement waterproofing services in Peoria, IL. We specialize in high-capacity submersible pumps and reliable battery backup systems.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Serving the Greater Peoria Area",
            "addressLocality": "Peoria",
            "addressRegion": "IL",
            "postalCode": "61602",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 40.6936,
            "longitude": -89.5890
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

