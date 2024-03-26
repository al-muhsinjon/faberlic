"use client";
import useLanguage from "@/hooks/use-language";
import { Products } from "@/types";
import { FC } from "react";
import Button from "./button";

interface InfoProps {
  info: Products;
}
const Info: FC<InfoProps> = ({ info }) => {
  const lang = useLanguage();
  const formattedPrice = new Intl.NumberFormat("en-US").format(info.price);

  console.log(info);
  return (
    <div>
      <h1 className="text-3xl font-bold">
        {info.translations[lang.language].name}
      </h1>
      <p className="text-2xl font-semibold text-slate-600">
        {info.translations[lang.language].short_description}
      </p>

      <div
        className="text-xl my-6"
        dangerouslySetInnerHTML={{
          __html: info.translations[lang.language].description,
        }}
      />
      <span className="mt-3 font-bold block">{formattedPrice} so&apos;m</span>

      <Button className="mt-12">Sotib olish</Button>
    </div>
  );
};

export default Info;
