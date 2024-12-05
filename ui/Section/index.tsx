import React from 'react';
import {ContainerProps} from "@/ui/types";

const Section = ({children, className = ''}: ContainerProps) => {
  return (
    <section className={`h-100dvh bg-gray-100 flex items-center justify-center ${className}`}>
      {children}
    </section>
  );
}

export default Section;