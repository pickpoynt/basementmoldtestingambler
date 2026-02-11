import { Shield, Droplets, AlertTriangle, CheckCircle2, Home, Sparkles } from "lucide-react";

const KitchenCabinetMoldInfo = () => {
    return (
        <section id="kitchen-mold-info" className="py-20 bg-gradient-to-br from-slate-50 via-indigo-50 to-slate-100">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-heading">
                            Kitchen Cabinet Mold Removal Sausalito: Specialized Care
                        </h2>
                        <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                            Sausalito's coastal humidity and the steam from gourmet cooking can trap moisture behind your custom cabinetry. We provide precision mold remediation designed to preserve beautiful woodwork while ensuring a healthy, spore-free kitchen environment.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                        <div className="relative group overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                            <img
                                src="https://images.unsplash.com/photo-1620626011761-9963d7521576?auto=format&fit=crop&q=80"
                                alt="Kitchen cabinet mold removal Sausalito"
                                className="w-full h-full object-cover aspect-video brightness-90 group-hover:brightness-100 transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent" />
                        </div>
                        <div className="space-y-8">
                            <h3 className="text-3xl font-bold text-slate-900 leading-tight">
                                Coastal Moisture & Hidden Decay
                            </h3>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Leaky sink drains or refrigerator lines often go unnoticed until mold has colonized the dark spaces behind your cabinets. In Sausalito's unique climate, this growth can accelerate, impacting indoor air quality and structural integrity.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 bg-indigo-100 p-2 rounded-lg">
                                        <AlertTriangle className="w-5 h-5 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Early Detection</h4>
                                        <p className="text-slate-500 text-sm">Identifying leaks before rot sets in.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 bg-indigo-100 p-2 rounded-lg">
                                        <Sparkles className="w-5 h-5 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Wood Preservation</h4>
                                        <p className="text-slate-500 text-sm">Saving your custom cabinetry.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-10 rounded-[2.5rem] bg-white border border-indigo-100 shadow-xl shadow-indigo-900/5 hover:-translate-y-2 transition-all duration-300">
                            <CheckCircle2 className="w-12 h-12 text-indigo-500 mb-6" />
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Non-Toxic Solutions</h3>
                            <p className="text-slate-600 leading-relaxed italic">
                                "Food-safe antimicrobial treatments that kill mold spores without leaving harmful chemical residues in your kitchen."
                            </p>
                        </div>
                        <div className="p-10 rounded-[2.5rem] bg-indigo-600 text-white shadow-xl shadow-indigo-900/20 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
                            <Home className="absolute -right-4 -bottom-4 w-32 h-32 text-white/10 group-hover:rotate-12 transition-transform duration-500" />
                            <Shield className="w-12 h-12 text-indigo-200 mb-6" />
                            <h3 className="text-2xl font-bold mb-4 tracking-tight">Cabinet Integrity</h3>
                            <p className="text-indigo-50/90 leading-relaxed italic">
                                "Structural reinforcement and specialized drying techniques to prevent warping and maintain your kitchen's aesthetic."
                            </p>
                        </div>
                        <div className="p-10 rounded-[2.5rem] bg-white border border-indigo-100 shadow-xl shadow-indigo-900/5 hover:-translate-y-2 transition-all duration-300">
                            <Droplets className="w-12 h-12 text-indigo-500 mb-6" />
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Leak Mapping</h3>
                            <p className="text-slate-600 leading-relaxed italic">
                                "Infrared moisture detection to find the exact source of water intrusion behind walls and under cabinetry."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KitchenCabinetMoldInfo;
