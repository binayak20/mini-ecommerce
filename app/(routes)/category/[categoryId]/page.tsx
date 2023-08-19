import Container from "@/components/ui/container";
import Billboard from "@/components/ui/billboard";
// import ProductCard from '@/components/ui/product-card';
// import NoResults from '@/components/ui/no-results';

import getProducts from "@/actions/get-products";
import getRelatedProducts from "@/actions/get-related-products";
import getBillboard from "@/actions/get-bill-board";
import NoResults from "@/components/ui/no-result";
import ProductCard from "@/components/ui/product.card";
// import getCategory from '@/actions/get-category';
// import getSizes from '@/actions/get-sizes';
// import getColors from '@/actions/get-colors';

// import Filter from './components/filter';
// import MobileFilters from './components/mobile-filters';

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({ params }) => {
  const products = await getRelatedProducts({
    category: params.categoryId,
  });
  //   const sizes = await getSizes();
  //   const colors = await getColors();
  //const category = await getCategory(params.categoryId);
  const billboard = await getBillboard("1");

  return (
    <div className="bg-white">
      <Container>
        <Billboard data={billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="mt-6 lg:col-span-4 lg:mt-0">
            <h3 className="font-bold text-3xl mb-5">
              {decodeURIComponent(params.categoryId)}
            </h3>
            {products.length === 0 && <NoResults />}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map((item) => (
                <ProductCard key={item.id} data={item} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
