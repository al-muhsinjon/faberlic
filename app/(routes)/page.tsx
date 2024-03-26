"use client";
"use client";

// import { Button, Card, Heading, Hero, HoverCard } from "@/components";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/hero";
import Button from "@/components/button";
import Heading from "@/components/heading";
import { data } from "@/constants";
import HoverCard from "@/components/hover-card";
import Card from "@/components/card";

//Md = planshet  || Xl = Macbook

const HomePage = () => {
  return (
    <div>
      {/*  Hero */}

      <main>
        <Hero />
        <div className="my-6 px-[8%]">
          <div className="h-56 bg-[url(/since.png)] flex justify-around items-center">
            <div className="flex flex-col justify-center items-start">
              <h2 className="text-5xl font-bold uppercase my-4 ">
                up to 80% off.
              </h2>
              <Button fill>SEarch for brand</Button>
            </div>
            <div className="bg-dark-blue w-36 h-36 flex items-center justify-center p-4 rounded-full">
              <h2 className="uppercase text-white italic inline">
                trusted since 1997
              </h2>
            </div>
          </div>
        </div>
      </main>
      <Heading
        btn="Shop All"
        btnOnClick={() => alert("Assa")}
        title="Our delicious, limited-edition collection"
      >
        Shop Our COLLECTION
      </Heading>

      <div className="grid md:grid-cols-3 px-[7%] gap-5 my-6">
        {data.map((item) => (
          <HoverCard item={item} key={item.id} />
        ))}
      </div>
      <div>
        <Card />
      </div>
      {/*  Hero */}
    </div>
  );
};

export default HomePage;
