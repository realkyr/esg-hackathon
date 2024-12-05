import React from 'react';
import Container from "@/ui/Container";

const BottomBanner = () => {
  return (
    <Container className="flex flex-col items-center md:flex-row justify-between text-white bg-gradient-to-r from-secondary to-primary">
      <span className="text-center text-nowrap text-sm md:text-base md:text-left">ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย</span>

      <span className="text-center md:text-right">
        {/* row horizontal list */}
        <ul className="flex flex-row space-x-2 gap-x-10 text-sm md:text-base font-bold">
          <li>ติดต่อเรา</li>
          <li>สมัครเข้าร่วม</li>
        </ul>
      </span>
    </Container>
  )
}

export default BottomBanner;