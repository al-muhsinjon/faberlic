"use client";
import useFilter from "@/hooks/use-filter";
import { Search } from "lucide-react";

const Filter = () => {
  const filter = useFilter();


  return (
    <div className="xl:w-[27%] bg-white  border relative h-12 flex rounded-xl">
      <input
        onChange={(e) => filter.onChange(e.target.value)}
        type="text"
        className="bg-transparent outline-none border-none w-full indent-3"
        placeholder="Hey, what are you looking for?"
      />
      <div className="h-full  flex justify-center items-center w-12">
        <Search size={26} />
      </div>
    </div>
  );
};

export default Filter;
