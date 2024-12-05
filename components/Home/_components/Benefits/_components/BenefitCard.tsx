import React from 'react'
import { BenefitCardProps } from './types'

const BenefitCard = ({ children, icon, title }: BenefitCardProps) => {
  return (
    <div className='h-56 md:h-80 lg:h-60 w-full rounded-[40px] bg-gradient-to-b from-secondary to-primary p-[3px]'>
      <div className='flex flex-col p-6 md:p-8 rounded-[37px] h-full w-full items-start justify-start bg-white'>
        <div className='flex items-center justify-start'>
          {icon}

          <h1 className='text-xl md:text-2xl font-bold text-center ml-2'>
            {title}
          </h1>
        </div>

        <div className='mt-4 text-sm md:text-md'>{children}</div>
      </div>
    </div>
  )
}

export default BenefitCard
