import { Datas } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface HoverCardProps {
  item: Datas;
}

const HoverCard: React.FC<HoverCardProps> = ({ item }) => {
  return (
    <div className="border relative h-[320px] group overflow-hidden ">
      <Image
        src={item.src}
        alt="image"
        fill
        className="object-cover scale-100 group-hover:scale-110 ease-in duration-300"
      />
      <div className="w-full h-full bg-[#00000030] flex flex-col justify-center items-center absolute top-0 left-0">
        <h2 className="text-3xl italic text-white uppercase">{item.title}</h2>
        <Link className="text-[#ccc] underline hover:text-white" href="//">
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default HoverCard;
