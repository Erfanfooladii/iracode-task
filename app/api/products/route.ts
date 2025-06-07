import { faker } from "@faker-js/faker";
import { NextResponse } from "next/server";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  categoryImage: string;
  image: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  isPopular: boolean;
  isHotDeal: boolean;
  discount: number;
  createdAt: Date;
}

const generateFakeProducts = (count: number): Product[] => {
  const products: Product[] = [];
  const categoriesWithImages: Record<string, string> = {};

  for (let i = 0; i < count; i++) {
    const category = faker.commerce.department();

    if (!categoriesWithImages[category]) {
      categoriesWithImages[category] = faker.image.urlLoremFlickr({
        category: category.toLowerCase(),
      });
    }

    const isPopular = faker.datatype.boolean({ probability: 0.3 });
    const isHotDeal = faker.datatype.boolean({ probability: 0.2 });

    products.push({
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: parseFloat(faker.commerce.price({ min: 10, max: 1000 })),
      category: category,
      categoryImage: categoriesWithImages[category],
      image: faker.image.urlLoremFlickr({ category: "shopping" }),
      rating: faker.number.float({ min: 1, max: 5, fractionDigits: 1 }),
      reviews: faker.number.int({ min: 0, max: 500 }),
      inStock: faker.datatype.boolean({ probability: 0.8 }),
      isPopular,
      isHotDeal,
      discount: isHotDeal ? faker.number.int({ min: 5, max: 50 }) : 0,
      createdAt: faker.date.past({ years: 1 }),
    });
  }

  return products;
};

export const products: Product[] = generateFakeProducts(50);

interface ApiResponse {
  success: boolean;
  total?: number;
  page?: number;
  limit?: number;
  data?: Product[];
  message?: string;
}

export async function GET(
  request: Request
): Promise<NextResponse<ApiResponse>> {
  try {
    const { searchParams } = new URL(request.url);
    let result: Product[] = [...products];

    const category = searchParams.get("category");
    if (category) {
      result = result.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (searchParams.get("popular") === "true") {
      result = result.filter((product) => product.isPopular);
    }

    if (searchParams.get("hotDeals") === "true") {
      result = result.filter((product) => product.isHotDeal);
    }

    const sort = searchParams.get("sort");
    if (sort) {
      const [field, order] = sort.split("-") as [keyof Product, "asc" | "desc"];

      result.sort((a, b) => {
        if (typeof a[field] === "number" && typeof b[field] === "number") {
          return order === "asc"
            ? (a[field] as number) - (b[field] as number)
            : (b[field] as number) - (a[field] as number);
        }

        if (typeof a[field] === "string" && typeof b[field] === "string") {
          return order === "asc"
            ? (a[field] as string).localeCompare(b[field] as string)
            : (b[field] as string).localeCompare(a[field] as string);
        }

        return 0;
      });
    }

    const search = searchParams.get("search");
    if (search) {
      const searchTerm = search.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm)
      );
    }

    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedResult = result.slice(startIndex, endIndex);

    return NextResponse.json(
      {
        success: true,
        total: result.length,
        page,
        limit,
        data: paginatedResult,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      {
        success: false,
        message,
      },
      { status: 500 }
    );
  }
}

export async function POST(): Promise<NextResponse<ApiResponse>> {
  return NextResponse.json(
    { success: false, message: "Method not allowed" },
    { status: 405 }
  );
}

export async function PUT(): Promise<NextResponse<ApiResponse>> {
  return NextResponse.json(
    { success: false, message: "Method not allowed" },
    { status: 405 }
  );
}

export async function DELETE(): Promise<NextResponse<ApiResponse>> {
  return NextResponse.json(
    { success: false, message: "Method not allowed" },
    { status: 405 }
  );
}
