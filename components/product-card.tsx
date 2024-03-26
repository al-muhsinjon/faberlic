"use client";
import useLanguage from "@/hooks/use-language";
import { Products } from "@/types";
import { Eye, Heart, HeartCrack, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import IconButton from "./ui/icon-button";
import Link from "next/link";

interface ProductCardProps {
  data: Products;
}

export const revalidate = 0;

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const lang = useLanguage();
  const { translations, images, price, average_rating } = data;

  const formattedPrice = new Intl.NumberFormat("en-US").format(price);
  return (
    <div className="w-full max-w-sm bg-white border h-auto border-gray-200 rounded-lg shadow ">
      <Link href={`/product/${data.id}`}>
        <div className="relative">
          <span className="px-2 py-1 bg-main text-white left-4 z-10 uppercase absolute top-4">
            {translations[lang.language].tag}
          </span>
        </div>
        <div className="aspect-square rounded-xl bg-gray-100 relative">
          <Image
            src={images[0].image}
            fill
            alt="Image"
            className="aspect-square object-cover rounded-md p-6"
          />
        </div>
      </Link>
      <div className="px-5 pb-5">
        <Link href={`/product/${data.id}`}>
          <div>
            <h5 className="text-lg h-12 font-bold tracking-tight text-slate-800 ">
              {translations[lang.language].name}
            </h5>
            <p className="font-semibold tracking-tight text-neutral-500">
              {translations[lang.language].short_description}
            </p>
          </div>
        </Link>

        <div className="flex items-center mt-2.5 mb-5">
          <Star className="text-yellow-500" />
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {average_rating}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900 ">
            {formattedPrice} so&apos;m
          </span>
          <IconButton
            onClick={() => alert("assa")}
            icon={<ShoppingCart />}
            className="border"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
