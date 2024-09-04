import React from "react";

import Section from "@/components/funcionalidades";
import Hero from "@/components/hero";
import Stats from "@/components/stats";
import AdvantagesSection from "@/components/free";
import Contact from "@/components/contact";
import ProcessSection from "@/components/more";
import FloatingWhatsAppButton from "@/components/whatsappTrigger";
import FAQSection from "@/components/faq";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <FloatingWhatsAppButton
        phoneNumber="+5531991837450"
        message={"Quero saber mais sobre a Hidrica!"}
        position="bottom-right"
        bgColor="#25D366"
        iconSize={50}
      />
      <Section />
      <AdvantagesSection />
      <ProcessSection />
      <FAQSection />
      <Contact />
    </main>
  );
}
