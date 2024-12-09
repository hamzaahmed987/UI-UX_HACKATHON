import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CustomButton } from "./CustomButton"; // Ensure the path is correct if saved separately.

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "Nike Dri-FIT ADV TechKnit Ultra",
    description: "Men's Short-Sleeve Running Top",
    price: 3895,
    image: "/g1.png",
  },
  {
    id: "2",
    name: "Nike Dri-FIT Challenger",
    description: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
    price: 2495,
    image: "/g2.png",
  },
  {
    id: "3",
    name: "Nike Dri-FIT ADV Run Division",
    description: "Women's Long-Sleeve Running Top",
    price: 5295,
    image: "/g3.png",
  },
  {
    id: "4",
    name: "Nike Fast",
    description: "Women's Mid-Rise 7/8 Running Leggings with Pockets",
    price: 3795,
    image: "/g4.png",
  },
];

export default function Gearupp() {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Section Title */}
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center">Gear Up</h1>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between max-w-sm mx-auto mb-8">
        <CustomButton variant="outline" size="icon" className="rounded-full">
          <ChevronLeft className="h-5 w-5" />
        </CustomButton>
        <CustomButton variant="outline" size="icon" className="rounded-full">
          <ChevronRight className="h-5 w-5" />
        </CustomButton>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col space-y-3 bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
          >
            {/* Product Image */}
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            
            {/* Product Info */}
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-sm md:text-base">{product.name}</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  ₹ {product.price.toLocaleString("en-IN")}
                </p>
              </div>
              <p className="text-gray-500 text-xs md:text-sm">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
