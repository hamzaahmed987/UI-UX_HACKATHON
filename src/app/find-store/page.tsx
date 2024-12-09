"use client";

import Image from 'next/image';
import ProductCard from '../components/ProductCard';
import FilterGroup from '../components/FilterGroup';
import { ChevronDown } from 'lucide-react';
import { Product } from '../types/Product';
import RelatedCategories from '../components/Categories';

// Mock data - replace with your actual data fetching logic
const products: Product[] = Array.from({ length: 30 }, (_, i) => ({
  id: `product-${i + 1}`,
  name: `Nike Product ${i + 1}`,
  category: "Men's Shoes",
  price: 10000 + i * 100,
  colors: 1,
  images: Array.from({ length: 1 }, (_, j) => `/shoe.png`), // Example multiple images
  label: i % 3 === 0 ? "Just In" : undefined
}));

const categories = [
  "Shoes", "Sports Bras", "Tops & T-Shirts", "Hoodies & Sweatshirts",
  "Jackets", "Trousers & Tights", "Shorts", "Tracksuits",
  "Jumpsuits & Rompers", "Skirts & Dresses", "Socks", "Accessories & Equipment"
];

export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="w-full lg:w-[260px] max-h-[849px] overflow-y-auto p-4 border-b lg:border-r lg:border-b-0">
        <nav className="mb-6">
          {categories.map((category) => (
            <a
              key={category}
              href="#"
              className="block py-1 text-sm hover:underline"
            >
              {category}
            </a>
          ))}
        </nav>
        <FilterGroup title="Gender" items={["Men", "Women", "Unisex"]} />
        <FilterGroup title="Kids" items={["Boys", "Girls"]} />
        <FilterGroup title="Shop By Price" items={["Under ₹ 2,500.00", "₹ 2,501.00 - ₹ 7,500.00"]} />
      </aside>

      {/* Main content */}
      <div className="flex-1 max-w-full lg:max-w-[1092px] max-h-[18013px] overflow-y-auto p-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h1 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-0">
            New ({products.length})
          </h1>
          <div className="flex items-center space-x-4">
            <button className="text-sm flex items-center">
              Hide Filters <ChevronDown size={16} className="ml-1" />
            </button>
            <button className="text-sm flex items-center">
              Sort By <ChevronDown size={16} className="ml-1" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-8">
          <RelatedCategories />
        </div>
      </div>
    </main>
  );
}
