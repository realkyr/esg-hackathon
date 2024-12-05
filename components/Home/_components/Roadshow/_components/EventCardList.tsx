import React from 'react';
import {EventCardProps} from "@/components/Home/_components/Roadshow/_components/type";
import EventCard from "@/components/Home/_components/Roadshow/_components/EventCard";

interface EventCardListProps {
  events: EventCardProps[];
}

const EventCardList = ({ events }: EventCardListProps) => (
  events.map((event) => (<EventCard {...event} />))
);

export default EventCardList;