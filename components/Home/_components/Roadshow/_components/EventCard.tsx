import React from "react";
import PinIcon from "@/components/Home/_components/Roadshow/_components/PinIcon";
import {EventCardProps} from "@/components/Home/_components/Roadshow/_components/type";

const EventCard: React.FC<EventCardProps> = ({ location, date, title, place, time }) => {
  return (
    <div className="py-4 w-full">
      <div className="flex items-center justify-between mb-4 border-b border-[#707070]">
        <div className="flex items-center">
          <span className="text-green-600 text-lg mr-2"><PinIcon /></span>
          <span className="font-semibold text-lg">{location}</span>
        </div>

        <div className="text-sm">{date}</div>
      </div>

      <div className="text-xl font-bold mb-3">{title}</div>
      <div className="text-sm mb-2">
        <strong className="font-medium">สถานที่:</strong> {place}
      </div>
      <div className="text-sm">
        <strong className="font-medium">เวลา:</strong> {time}
      </div>
    </div>
  );
};

export default EventCard;