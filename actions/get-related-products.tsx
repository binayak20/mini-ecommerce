import { Product } from "@/types";

interface Query {
  category?: string;
}

const getRelatedProducts = async (query: Query): Promise<Product[]> => {
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/products/category/${query.category}`;

  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = response.json();
    return data;
  } catch (error) {
    throw new Error("An error occurred while fetching products");
  }
};

export default getRelatedProducts;
