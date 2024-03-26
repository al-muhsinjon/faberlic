import { Categories } from "@/types";
const URL = `${process.env.API}/product/category`;

const getCategories = async (): Promise<Categories[]> => {
  const res = await fetch(URL);
  return res.json();
};

export default getCategories;
