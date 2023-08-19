import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProducts = async (): Promise<Product[]> => {
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

export default getProducts;
