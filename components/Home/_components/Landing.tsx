import React from 'react';
import Section from "@/ui/Section";
import Image from "next/image";

const Landing = () => {
  return (
    <Section className="min-h-[80dvh] flex-col bg-[#F7FCFF] rounded-landing-section">
      <Image src="/assets/images/project-logo.png" alt="Hackathon Logo" width={383} height={275} />

      <h1 className="text-[5rem] font-bold text-center text-primary">
        ESG HACKATHON PROJECT
      </h1>

      <h2 className="text-3xl font-bold text-center">
        BY SME D BANK
      </h2>
    </Section>
  )
};

export default Landing;