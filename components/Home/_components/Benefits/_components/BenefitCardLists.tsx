import React from 'react'
import { BenefitCardProps } from '@/components/Home/_components/Benefits/_components/types'
import BenefitCard from '@/components/Home/_components/Benefits/_components/BenefitCard'

interface BenefitCardListsProps {
  benefits: BenefitCardProps[]
}

const BenefitCardLists = ({ benefits }: BenefitCardListsProps) =>
  benefits.map((benefit) => (
    <BenefitCard title={benefit.title} icon={benefit.icon}>
      {benefit.children}
    </BenefitCard>
  ))

export default BenefitCardLists
