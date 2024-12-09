import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Nike Air Max Pulse",
    category: "Women's Shoes",
    price: 13995,
    imageUrl: "/p2.png", // Replace with your image path
  },
  {
    id: 2,
    name: "Nike Air Max Pulse",
    category: "Men's Shoes",
    price: 13995,
    imageUrl: "/p1.png", // Replace with your image path
  },
  {
    id: 3,
    name: "Nike Air Max 97 SE",
    category: "Men's Shoes",
    price: 16995,
    imageUrl: "/shoe.png", // Replace with your image path
  },
  {
    id: 4,
    name: "Nike Air Max 97 SE",
    category: "Men's Shoes",
    price: 16995,
    imageUrl: "/shoe.png", // Replace with your image path
  }
];

export default function ProductListing() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-[1440px] h-604 mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
        <h1 className="text-lg sm:text-xl font-medium">Best of Air Max</h1>
        <div className="flex items-center gap-4">
          <button className="text-sm font-medium hover:underline">Shop</button>
          <div className="flex gap-2">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group cursor-pointer flex flex-col items-start"
          >
            {/* Product Image */}
            <div className="relative w-full aspect-square bg-[#f5f5f5] mb-4 rounded-lg overflow-hidden">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-contain p-4 transform group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-1 text-center sm:text-left">
              <h2 className="font-medium text-sm sm:text-base">
                {product.name}
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm">
                {product.category}
              </p>
              <p className="font-medium text-sm sm:text-base">
                ₹ {product.price.toLocaleString("en-IN")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
