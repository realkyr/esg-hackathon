import React from 'react'
import { ContainerProps } from '@/ui/types'

const Container = ({ children, className = '' }: ContainerProps) => {
  return <div className={`px-[2%] md:px-[8.33%] ${className}`}>{children}</div>
}

export default Container
