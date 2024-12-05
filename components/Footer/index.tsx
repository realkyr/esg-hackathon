import React from 'react';
import Section from "@/ui/Section";
import Image from "next/image";

const Footer = () => {

  return (
    <Section className="!min-h-[30dvh] bg-gradient-footer flex-col mt-8">
      <h1 className="text-4xl font-bold text-center">
        PARTNER
      </h1>

      <div className="grid grid-cols-4 gap-2 mt-2">
        {[...Array(4)].map((_, index) => (
          <div className="p-1 rounded-ful bg-transparent  md:bg-white w-[90px] h-[90px]">
            <Image src={`/assets/images/partner-${index + 1}.png`} alt={`Partner ${index+1}`} width={90} height={90} />
          </div>
        ))}
      </div>
    </Section>
  )
};

export default Footer;