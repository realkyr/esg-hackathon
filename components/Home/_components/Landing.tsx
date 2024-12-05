import React from 'react';
import Section from "@/ui/Section";
import Image from "next/image";

const Landing = () => {
  return (
    <Section className="pb-32 md:pb-0 min-h-[80dvh] flex-col bg-[#F7FCFF] rounded-landing-section">
      <Image
        src="/assets/images/project-logo.png"
        alt="Hackathon Logo"
        width={383}
        height={275}
        className="h-[190px] md:h-[275px] w-auto"
      />

      <h1 className="text-[1.5rem] md:text-[5rem] font-bold text-center text-primary">
        ESG HACKATHON PROJECT
      </h1>

      <h2 className="text-[1.25rem] md:text-3xl font-bold text-center">
        BY SME D BANK
      </h2>

      <div className="flex items-end justify-center">
        <div className="w-[120px] h-[3px] bg-gradient-to-r from-secondary to-primary"/>
        <div className="w-[10px] h-[10px] bg-gradient-to-b from-primary to-secondary rounded-leave "/>
      </div>

    </Section>
  )
};

export default Landing;