import { Products } from "@/types";

const URL = `${process.env.API}/product/product-filterGet`;
const getProduct = async (id: string): Promise<Products> => {
  const res = await fetch(`${URL}/${id}`);
  return res.json();
};

export default getProduct;
