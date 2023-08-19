import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products/categories`;

const getCategories = async (): Promise<Category[]> => {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }
    const data = await response.json();
    return data.map((category: string, index: number) => ({
      id: index + 1,
      name: category,
    }));
  } catch (error) {
    throw new Error("An error occurred while fetching categories");
  }
};

export default getCategories;
