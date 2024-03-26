import { Products } from "@/types";
const URL = `${process.env.API}/product/product-filterGet`;

const getFilterProducts = async (): Promise<Products[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getFilterProducts;
