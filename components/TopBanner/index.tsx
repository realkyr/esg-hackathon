import React from 'react';
import Container from "@/ui/Container";

const TopBanner = () => {
  return (
    <Container className="flex flex-col items-center md:flex-row justify-between text-white bg-gradient-to-r from-secondary to-primary">
      <span className="text-center md:text-left">ESG HACKATHON PROJECT BY SME D BANK</span>

      <span className="text-center md:text-right">เปิดรับสมัครเข้าร่วมโครงการ ตั้งแต่วันที่ 1 ตุลาคม 2567 - 16 ตุลาคม 2567</span>
    </Container>
  )
}

export default TopBanner;