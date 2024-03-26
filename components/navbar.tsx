import React from "react";
import Languages from "@/components/languages";
import Link from "next/link";
import Container from "@/components/ui/container";
import { ShoppingBag, User } from "lucide-react";
import getCategories from "@/actions/get-categories";
import MainNav from "@/components/main-nav";
import Filter from "@/components/filter";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <header className="">
      <div className="bg-main text-white">
        <Container>
          <div className="flex items-center justify-between">
            <Languages />
            <div className="md:flex xl:flex flex md:gap-12 gap-2">
              <Link href="/"> Help & Information</Link>
              <Link href="/"> Connect with us</Link>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="md:flex  xl:h-16 py-4 items-center justify-between  ">
          <Filter />
          <div className="flex xl:w-[50%] justify-between">
            <Link href="/" className="text-3xl font-medium text-dark-blue">
              Faberlic
            </Link>
            <div className="flex gap-4">
              <h2 className="flex gap-2 cursor-pointer items-center">
                <User className="text-2xl" />{" "}
                <span className=" md:sr-only">My Account</span>
              </h2>
              {/* <h2 className="flex gap-2 cursor-pointer items-center">
                <Heart className="text-2xl" />{" "}
                <span className="sr-only">Wishlist</span>
              </h2> */}
              <h2 className="flex gap-2 cursor-pointer items-center">
                <ShoppingBag className="text-2xl" />
                <span className="underline">
                  {2} <span className="sr-only">items</span>
                </span>
              </h2>
            </div>
          </div>
        </div>
      </Container>
      <div>
        <MainNav data={categories} />
      </div>
    </header>
  );
};

export default Navbar;
