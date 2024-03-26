import Image from "next/image";
import React from "react";
import { Heart } from "lucide-react";
import Button from "@/components/button";

const Card = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 px-[7%] my-5 gap-5">
        <div className="border">
          <div className=" flex justify-between w-full items-center">
            <span className="bg-blue-300 py-2 px-3">Woman</span>
            <Heart className="mx-4 " />
          </div>
          <Image src="/armaf.png" alt="birnima" width={300} height={300} />
          <div className="text-center leading-loose px-4 py-2">
            <h2 className="text-xl font-bold">Jo Malone Vetiver & Go...</h2>
            <p className="text-dark-gray">Luminizing Clay</p>
            <p className="mb-4">
              from <b>$51.74</b>
            </p>
            <Button>Add to bag</Button>
          </div>
        </div>
        <div className="border">
          <div className=" flex justify-between w-full items-center">
            <span className="bg-blue-300 py-2 px-3">Woman</span>
            <Heart className="mx-4 " />
          </div>
          <Image src="/armaf.png" alt="birnima" width={300} height={300} />
          <div className="text-center leading-loose px-4 py-2">
            <h2 className="text-xl font-bold">Jo Malone Vetiver & Go...</h2>
            <p className="text-dark-gray">Luminizing Clay</p>
            <p className="mb-4">
              from <b>$51.74</b>
            </p>
            <Button>Add to bag</Button>
          </div>
        </div>
        <div className="border">
          <div className=" flex justify-between w-full items-center">
            <span className="bg-blue-300 py-2 px-3">Woman</span>
            <Heart className="mx-4 " />
          </div>
          <Image src="/armaf.png" alt="birnima" width={300} height={300} />
          <div className="text-center leading-loose px-4 py-2">
            <h2 className="text-xl font-bold">Jo Malone Vetiver & Go...</h2>
            <p className="text-dark-gray">Luminizing Clay</p>
            <p className="mb-4">
              from <b>$51.74</b>
            </p>
            <Button>Add to bag</Button>
          </div>
        </div>
        <div className="border">
          <div className=" flex justify-between w-full items-center">
            <span className="bg-blue-300 py-2 px-3">Woman</span>
            <Heart className="mx-4 " />
          </div>
          <Image src="/armaf.png" alt="birnima" width={300} height={300} />
          <div className="text-center leading-loose px-4 py-2">
            <h2 className="text-xl font-bold">Jo Malone Vetiver & Go...</h2>
            <p className="text-dark-gray">Luminizing Clay</p>
            <p className="mb-4">
              from <b>$51.74</b>
            </p>
            <Button>Add to bag</Button>
          </div>
        </div>
        <div className="border">
          <div className=" flex justify-between w-full items-center">
            <span className="bg-blue-300 py-2 px-3">Woman</span>
            <Heart className="mx-4 " />
          </div>
          <Image src="/armaf.png" alt="birnima" width={300} height={300} />
          <div className="text-center leading-loose px-4 py-2">
            <h2 className="text-xl font-bold">Jo Malone Vetiver & Go...</h2>
            <p className="text-dark-gray">Luminizing Clay</p>
            <p className="mb-4">
              from <b>$51.74</b>
            </p>
            <Button>Add to bag</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
