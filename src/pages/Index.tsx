import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import KitchenCabinetMoldInfo from "@/components/landing/KitchenCabinetMoldInfo";
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
        <title>Kitchen cabinet mold removal Sausalito | Sausalito Kitchen Mold Experts</title>
        <meta name="description" content="Kitchen cabinet mold removal Sausalito. Specialized mold remediation for kitchen cabinetry, leak detection, and food-safe cleaning in Marin County. Call (380) 266-0944!" />
        <meta name="keywords" content="kitchen cabinet mold removal Sausalito, kitchen mold remediation Sausalito CA, Sausalito cabinet leak repair, Marin County kitchen mold inspector" />
        <link rel="canonical" href="https://sausalito-kitchen-mold.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Sausalito Kitchen Mold Experts",
            "image": "https://images.unsplash.com/photo-1620626011761-9963d7521576?auto=format&fit=crop&q=80",
            "telephone": "+1-380-266-0944",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Sausalito",
              "addressRegion": "CA",
              "postalCode": "94965",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "37.8591",
              "longitude": "-122.4853"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Sausalito, California"
            },
            "priceRange": "$$$",
            "description": "Premium kitchen cabinet mold removal and leak detection in Sausalito, CA. We specialize in non-toxic, food-safe remediation for luxury kitchens."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Kitchen Cabinet Mold Removal",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Sausalito Kitchen Mold Experts",
              "telephone": "+1-380-266-0944"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Sausalito, California"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Kitchen Restoration Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Cabinet Mold Remediation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Infrared Leak Detection"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "HEPA Air Filtration"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Food-Safe Antimicrobial Treatment"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="Kitchen cabinet mold removal Sausalito | Kitchen Mold Experts" />
        <meta property="og:description" content="Professional kitchen cabinet mold removal in Sausalito, CA. 24/7 leak detection and food-safe remediation. Call (380) 266-0944 for an inspection." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sausalito-kitchen-mold.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1620626011761-9963d7521576?auto=format&fit=crop&q=80" />
      </Helmet>


      <Header />
      <main>
        <Hero
          title={
            <>
              Kitchen cabinet mold removal Sausalito
              <span className="block text-indigo-400 mt-2">Sausalito Kitchen Mold Experts: Cabinet Restoration Pros</span>
            </>
          }
          subtitle="Protect your luxury kitchen from hidden moisture. Our specialized cabinet remediation and Marin-grade leak detection systems target spores trapped behind your woodwork—ensuring food safety with Sausalito precision."
          image="https://images.unsplash.com/photo-1556912177-c54030639a9c?auto=format&fit=crop&q=80"
        />
        <Services />
        <WhyUs />
        <KitchenCabinetMoldInfo />
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




