import React from 'react'
import Section from '@/ui/Section'
import Container from '@/ui/Container'
import Image from 'next/image'
import BlueLeaveIcon from '@/components/Home/_components/BlueLeaveIcon'

const About = () => {
  return (
    <Section className='flex-col'>
      <Container>
        <h1 className='text-2xl text-nowrap md:text-4xl md:leading-[3.5rem] font-bold text-center'>
          เฟ้นหา{' '}
          <span className='text-white bg-primary rounded-[2rem] px-2'>
            SMEs
          </span>{' '}
          ที่เป็นสุดยอดด้าน <span className='text-primary'>ESG</span>
        </h1>

        <p className='text-lg mt-6 text-center'>
          การแข่งขันนำเสนอไอเดียและนวัตกรรมที่ช่วยสนับสนุนธุรกิจ SMES
          ที่มุ่งเน้นการพัฒนาองค์กรอย่างยั่งยืนบนแนวคิด ESG
          ด้วยการให้ความสำคัญกับการลดผลกระทบทางสิ่งแวดล้อม การมีส่วนร่วมกับสังคม
          และการเป็นบริษัทที่ดำเนินธุรกิจตามหลักธรรมาภิบาล
          เพื่อส่งเสริมและพัฒนาธุรกิจให้เติบโตในระยะยาว
          ตอกย้ำบทบาทการเป็นธนาคารเพื่อเอสเอ็มอีไทย
          ที่อยู่เคียงข้างผู้ประกอบการตลอดเส้นทางธุรกิจ
        </p>

        <div className='mt-6 flex justify-center'>
          <div className='relative'>
            <Image
              src='/assets/images/about-1.png'
              alt='About 1'
              width={1200}
              height={800}
              className='w-full md:h-[20dvw] md:w-auto inline-block'
            />

            <Image
              src='/assets/images/about-2.png'
              alt='About 2'
              width={600}
              height={800}
              className='w-full mt-2 md:mt-0 md:ml-4 md:h-[20dvw] md:w-auto inline-block'
            />

            <div
              style={{
                transform: 'translate(-50%, 50%)'
              }}
              className='absolute bottom-0 left-0 hidden md:block'
            >
              <BlueLeaveIcon width='14dvw' height='14dvw' />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default About
