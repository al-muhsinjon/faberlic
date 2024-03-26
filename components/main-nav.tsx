"use client";
import { Categories } from "@/types";
import Container from "./ui/container";
import Link from "next/link";
import useLanguage from "@/hooks/use-language";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface MainNavProps {
  data: Categories[];
  footer?: boolean;
}

export const revalidate = 0;

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const lang = useLanguage();
  const pathName = usePathname();
  const { language } = lang;
  return (
    <Container className="my-4 ">
      <div className="flex justify-around">
        {data.map((category) => (
          <Link
            key={category.id}
            className={cn(
              `text-xl font-semibold uppercase hover:text-main ${
                pathName === `/category/${category.translations.en.name}`
                  ? "text-main"
                  : "text-neutral-600"
              }`
            )}
            href={`/category/${category.translations.en.name}`}
          >
            {category.translations[language].name}
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default MainNav;
