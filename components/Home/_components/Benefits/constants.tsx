import {BenefitCardProps} from "./_components/types";
import React from "react";

import MedalIcon from "./_components/MedalIcon";
import MathIcon from "./_components/MathIcon";
import PitchIcon from "@/components/Home/_components/Benefits/_components/PitchIcon";
import GroupIcon from "@/components/Home/_components/Benefits/_components/GroupIcon";

export const benefits: BenefitCardProps[] = [{
  title: "สิทธิประโยชน์ข้อที่ 1",
  icon: <MathIcon />,
  children: (
    <p>
      ทุกธุรกิจที่ส่งแผนงานเข้าร่วมประกวดจะได้เป็นคู่ <br />
      พัฒนาธุรกิจกับ SME D BANK ได้เข้าถึงแหล่งสินเชื่อ <br />
      ธุรกิจในอัตราดอกเบี้ยพิเศษหรืออื่นๆ
    </p>
  ),
}, {
  title: "สิทธิประโยชน์ข้อที่ 2",
  icon: <PitchIcon/>,
  children: (
    <p>
      ธุรกิจ 10 ทีม สุดท้ายที่ผ่านเข้ารอบ PITCHING จะได้<br/>
      รับเกียรติบัตรที่ได้รับการรับรองจากกระทรวง<br/>
      อุตสาหกรรม และได้รับการโปรโมทธุรกิจผ่านสื่อ<br/>
      AMARIN TV, AMARIN ONLINE และ SPOTLIGHT
    </p>
  ),
}, {
  title: "สิทธิประโยชน์ข้อที่ 3",
  icon: <MedalIcon/>,
  children: (
    <p>
      ธุรกิจที่ชนะเลิศ<br/>
      อันดับ ที่ 1 จะได้รับเงินทุน จำนวน 200,000 บาท <br/>
      อันดับ ที่ 2 จะได้รับเงินทุน จำนวน 150,000 บาท <br/>
      อันดับ ที่ 3 จะได้รับเงินทุน จำนวน 100,000 บาท
    </p>
  ),
}, {
  title: "สิทธิประโยชน์ข้อที่ 4",
  icon: <GroupIcon/>,
  children: (
    <p>
      ธุรกิจทั้ง 3 อันดับที่ชนะจะได้รับถ้วยรางวัลและเกียรติ<br/>
      บัตรที่ได้รับการรับรองจากกระทรวงอุตสาหกรรม
    </p>
  ),
}]