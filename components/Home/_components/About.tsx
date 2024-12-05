import React from 'react';
import Section from "@/ui/Section";
import Container from "@/ui/Container";

const About = () => {
  return (
    <Section className="flex-col">
      <Container>
        <h1 className="text-4xl font-bold text-center">
          เฟ้นหา <span className="text-white bg-primary rounded-[2rem] p-2">SMEs</span> ที่เป็นสุดยอดด้าน <span
          className="text-primary">ESG</span>
        </h1>

        <p className="mt-4 text-center">
          การแข่งขันนำเสนอไอเดียและนวัตกรรมที่ช่วยสนับสนุนธุรกิจ SMES ที่มุ่งเน้นการพัฒนาองค์กรอย่างยั่งยืนบนแนวคิด ESG
          ด้วยการให้ความสำคัญกับการลดผลกระ<br />ทบทางสิ่งแวดล้อม การมีส่วนร่วมกับสังคม
          และการเป็นบริษัทที่ดำเนินธุรกิจตามหลักธรรมาภิบาล เพื่อส่งเสริมและพัฒนาธุรกิจให้เติบโตในระยะยาว
          ตอกย้ำบทบาท<br />การเป็นธนาคารเพื่อเอสเอ็มอีไทย ที่อยู่เคียงข้างผู้ประกอบการตลอดเส้นทางธุรกิจ
        </p>
      </Container>
    </Section>
  )
};

export default About;