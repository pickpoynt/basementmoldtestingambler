import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import SumpPumpInfo from "@/components/landing/SumpPumpInfo";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";

import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Sump pump replacement Peoria IL | Peoria Pump Pros: Emergency Flooding Solutions</title>
        <meta name="description" content="Sump pump replacement Peoria IL. Professional basement waterproofing, battery backup installation, and primary pump replacement. 24/7 emergency flood prevention in Peoria. Call (877) 792-1410 today!" />
        <meta name="keywords" content="Sump pump replacement Peoria IL, basement flood protection Peoria, battery backup sump pump Peoria, Peoria IL plumbing emergency, submersible pump repair Peoria" />
        <link rel="canonical" href="https://peoria-sump-pump.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Peoria Pump Pros",
            "image": "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80",
            "telephone": "+1-877-792-1410",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Peoria",
              "addressRegion": "IL",
              "postalCode": "61602",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "40.6936",
              "longitude": "-89.5890"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Peoria, Illinois"
            },
            "priceRange": "$$$",
            "description": "Professional sump pump replacement and basement waterproofing services in Peoria, IL. We specialize in high-capacity submersible pumps and reliable battery backup systems."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Sump Pump Replacement",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Peoria Pump Pros",
              "telephone": "+1-877-792-1410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Peoria, Illinois"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Sump Pump Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Primary Sump Pump Replacement"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Battery Backup Installation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Basement Flood Protection"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Emergency Water Removal"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="Sump pump replacement Peoria IL | Peoria Pump Pros" />
        <meta property="og:description" content="Professional sump pump replacement in Peoria, IL. 24/7 emergency flood prevention and battery backup solutions. Call (877) 792-1410 for a free estimate." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://peoria-sump-pump.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1542013919164-94427b3fa437?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Sump pump replacement Peoria IL
              <span className="block text-blue-400 mt-2">Peoria Pump Pros: Your Flood Defense Team</span>
            </>
          }
          subtitle="Don't wait for the next Illinois storm to find out your pump is failing. Our industrial-strength sump pump systems provide relentless protection for your Peoria basement—combining high-torque primary pumps with fail-safe battery backups that keep running even when the power goes out."
          image="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80"
        />
        <Services />
        <WhyUs />
        <SumpPumpInfo />
        <FAQ />
        <Contact />
        <RandomLinks />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;



