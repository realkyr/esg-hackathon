import React from 'react'
import { ContainerProps } from '@/ui/types'

const Section = ({ children, className = '' }: ContainerProps) => {
  return (
    <section
      className={`min-h-100dvh flex items-center justify-center ${className}`}
    >
      {children}
    </section>
  )
}

export default Section
