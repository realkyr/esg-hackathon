import React from 'react'
import { ContainerProps } from '@/ui/types'

interface SectionProps extends ContainerProps {
  id?: string
}

const Section = ({ children, id, className = '' }: SectionProps) => {
  return (
    <section
      id={id}
      className={`min-h-100dvh flex items-center justify-center ${className}`}
    >
      {children}
    </section>
  )
}

export default Section
