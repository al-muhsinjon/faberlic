"use client";
import useLanguage from "@/hooks/use-language";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Languages = () => {
  const language = useLanguage();
  const langs = [
    {
      id: 0,
      lang: "en",
      name: "English",
    },
    {
      id: 1,
      lang: "ru",
      name: "Russian",
    },
    {
      id: 2,
      lang: "uz",
      name: "O'zbekcha",
    },
  ];

  return (
    <div className="relative text-white z-10">
      <button
        className=" p-2  flex justify-between items-center"
        onClick={language.onOpen}
      >
        {(language.language == "en" && "English") ||
          (language.language == "uz" && "O'zbekcha") ||
          (language.language == "ru" && "Russian")}
        <ChevronDown size={18} />
      </button>
      <ul
        className={`w-full bg-black bg-opacity-50  flex-col justify-around items-center absolute ${
          language.isOpen ? "flex" : "hidden"
        } h-24`}
      >
        {langs.map((lang) => (
          <li
            key={lang.id}
            className="cursor-pointer"
            onClick={() => language.changeLanguage(lang.lang)}
          >
            {lang.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Languages;
