import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import Container from "@/components/ui/container";
import React from "react";

interface ProductPagePprops {
  params: {
    productId: string;
  };
}

const ProductPage: React.FC<ProductPagePprops> = async ({ params }) => {
  const product = await getProduct(params.productId);
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* GALLERY */}
            <div>
            <Gallery image={product.images[0].image} />
            </div>
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0 ">
              <Info info={product} />
              {/* INFO */}
            </div>
          </div>
          <hr className="my-10" />
          {/* <ProductList title="Related Items" items={suggestProducts} /> */}
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
