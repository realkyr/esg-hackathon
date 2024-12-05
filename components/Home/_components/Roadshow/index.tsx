import React from 'react';
import Section from "@/ui/Section";

import EventCardList from "@/components/Home/_components/Roadshow/_components/EventCardList";
import {events} from "@/components/Home/_components/Roadshow/constants";
import Container from "@/ui/Container";
import GreenLeaves from "@/components/Home/_components/Roadshow/_components/GreenLeaves";

const Roadshow = () => {

  return (
    <Section className="flex-col !min-h-[80dvh] mt-8">
      <Container className="w-full grid grids-cols-1 md:grids-cols-4 gap-4">
        <div className="col-span-1 md:col-span-4">
          <h1 className="text-4xl font-bold">
            ROADSHOW
          </h1>
        </div>

        <div className="col-span-1 md:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <EventCardList events={events}/>
          </div>
        </div>

        <div className="col-span-1 flex justify-center">
          <div className="relative h-[350px] w-[350px]">
            <img src="/assets/images/roadshow-1.png" alt="Roadshow 1" className="h-[350px] w-[350px] inline-block"/>

            <div style={{
              transform: "translate(50%, 50%)",
            }}  className="absolute bottom-0 right-0 hidden md:block">
              <GreenLeaves width="100" height="100" />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
};

export default Roadshow;