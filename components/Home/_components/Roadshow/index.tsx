import React from 'react';
import Section from "@/ui/Section";

import EventCardList from "@/components/Home/_components/Roadshow/_components/EventCardList";
import {events} from "@/components/Home/_components/Roadshow/constants";
import Container from "@/ui/Container";

const Roadshow = () => {

  return (
    <Section className="flex-col !h-[80dvh]">
      <Container className="w-full grid grids-cols-1 md:grids-cols-2 gap-4">
        <div className="col-span-1 md:col-span-2">
          <h1 className="text-4xl font-bold">
            ROADSHOW
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <EventCardList events={events} />
        </div>
      </Container>
    </Section>
  )
};

export default Roadshow;