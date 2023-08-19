import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
  try {
    const response = await fetch(`${URL}/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }
    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error("An error occurred while fetching categories");
  }
};

export default getProduct;
