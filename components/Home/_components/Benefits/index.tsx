import React from 'react'
import Section from '@/ui/Section'

import BenefitCardLists from './_components/BenefitCardLists'
import { benefits } from './constants'
import Container from '@/ui/Container'

const Benefits = () => {
  return (
    <Section className='flex-col'>
      <h1 className='text-2xl md:text-4xl font-bold text-center'>
        สิทธิประโยชน์
        <br /> สำหรับธุรกิจที่เข้าร่วมโครงการ
      </h1>

      <h3 className='text-lg md:text-xl font-bold text-center mt-4 text-primary'>
        ESG HACKATHON PROJECT BY SME D BANK
      </h3>

      <Container className='px-[16.66%]'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8'>
          <BenefitCardLists benefits={benefits} />
        </div>
      </Container>
    </Section>
  )
}

export default Benefits
