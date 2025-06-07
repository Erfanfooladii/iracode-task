import { NextResponse } from "next/server";
import { faker } from "@faker-js/faker";
import { products } from "../products/route";

interface Category {
  name: string;
  image: string;
}

export async function GET() {
  const categoriesMap: Record<string, Category> = {};

  products.forEach((product) => {
    if (!categoriesMap[product.category]) {
      categoriesMap[product.category] = {
        name: product.category,
        image: faker.image.urlLoremFlickr({
          category: product.category.toLowerCase(),
        }),
      };
    }
  });

  const categories = Object.values(categoriesMap);

  return NextResponse.json(categories);
}
