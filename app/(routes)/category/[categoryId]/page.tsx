import getCategories from "@/actions/get-categories";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import EntriesProduct from "@/components/entries";
import PaginationControls from "@/components/pagination";
import ProductCard from "@/components/product-card";
import Container from "@/components/ui/container";
import useFilter from "@/hooks/use-filter";

interface CategoryProps {
  params: {
    categoryId: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}
export const revalidate = 0;

const Category: React.FC<CategoryProps> = async ({ params, searchParams }) => {
  const products = await getProducts();
  const categories = await getCategories();

  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["number_page"] ?? "10";
  const start = (Number(page) - 1) * Number(per_page); // 0, 5, 10 ...
  const end = start + Number(per_page); // 5, 10, 15 ...

  const data = categories.filter(
    (category) => category.translations.en.name === params.categoryId
  );
  const filterData = products.filter(
    (product) => product.category.translations.en.name === params.categoryId
  );
  console.log(filterData);
  
  return (
    <Container>
      <div className="my-6">
        <Billboard data={data} />
      </div>
      <EntriesProduct end={end} start={start} filterData={filterData}  />
      
      <div>
        <PaginationControls
          hasNextPage={end < data.length}
          hasPrevPage={start > 0}
          length={products.length}
        />
      </div>
    </Container>
  );
};

export default Category;
