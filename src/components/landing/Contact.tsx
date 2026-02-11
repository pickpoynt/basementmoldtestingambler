import { Phone, Mail, MapPin, Clock, ShieldCheck, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 mb-6 font-bold uppercase tracking-wider text-sm">
                <Utensils className="w-4 h-4" />
                Sausalito Kitchen Response Team
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 leading-tight">
                Emergency Kitchen Cabinet Mold Solutions in Sausalito
              </h2>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                Don't let hidden mold compromise your family's health or your home's value. Our Marin County specialists are ready 24/7 for immediate kitchen diagnostics.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-1">Call 24/7</p>
                    <a href="tel:3802660944" className="text-2xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                      (380) 266-0944
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-indigo-600">
                    <Clock className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-1">Response Time</p>
                    <p className="text-xl font-bold text-slate-900">Under 60 Minutes in Sausalito</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-indigo-600">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-1">Service Area</p>
                    <p className="text-xl font-bold text-slate-900">Marin County & Sausalito Hillside</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-indigo-900/10 border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Schedule a Free Kitchen Moisture Diagnostic</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Full Name</label>
                    <input
                      type="text"
                      className="w-full bg-slate-50 border-slate-200 rounded-xl h-14 px-6 focus:ring-2 focus:ring-indigo-500 transition-all"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full bg-slate-50 border-slate-200 rounded-xl h-14 px-6 focus:ring-2 focus:ring-indigo-500 transition-all"
                      placeholder="Your Phone"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Service Type</label>
                  <select className="w-full bg-slate-50 border-slate-200 rounded-xl h-14 px-6 focus:ring-2 focus:ring-indigo-500 transition-all">
                    <option>Kitchen Cabinet Mold Removal</option>
                    <option>Under-Sink Leak Detection</option>
                    <option>Dishwasher Leak Remediation</option>
                    <option>Emergency Water Damage</option>
                    <option>Food-Safe Antimicrobial Treatment</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-slate-50 border-slate-200 rounded-xl p-6 focus:ring-2 focus:ring-indigo-500 transition-all"
                    placeholder="Briefly describe your kitchen moisture issue..."
                  ></textarea>
                </div>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white h-16 rounded-xl text-lg font-bold shadow-lg shadow-indigo-900/20">
                  Request Immediate Inspection
                </Button>
                <p className="text-center text-slate-500 text-sm italic">
                  *Our Sausalito technicians are available 24/7/365
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
