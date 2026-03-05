"use client";

import Link from "next/link";
import { CheckCircle, Clock } from "lucide-react";

const products = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  name: `Produk ${i + 1}`,
  description: "Deskripsi produk singkat",
  // composition: "Komposisi bahan utama",
  status: i % 2 === 0 ? "approved" : "pending",
}));

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/produk/${product.id}`}
          className="bg-white rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 p-5 flex gap-5 border border-gray-100"
        >
          {/* Image Placeholder */}
          <div className="w-32 h-42 bg-gray-300 rounded-2xl shrink-0" />

          {/* Content */}
          <div className="flex flex-col justify-between w-full">
            <div className="space-y-1">
              <div>
                <p className="text-xs font-semibold text-gray-500">Name</p>
                <p className="text-sm font-semibold text-gray-800">
                  {product.name}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold text-gray-500">
                  Description
                </p>
                <p className="text-sm text-gray-700">
                  {product.description}
                </p>
              </div>

              {/* <div>
                <p className="text-xs font-semibold text-gray-500">
                  Composition
                </p>
                <p className="text-sm text-gray-700">
                  {product.composition}
                </p>
              </div> */}
            </div>

            {/* Status */}
            <div>
              <p className="text-xs font-semibold text-gray-500 mb-1">
                Status
              </p>

              {product.status === "approved" ? (
                <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium text-white bg-green-500 rounded-full">
                  <CheckCircle size={14} />
                  Approve
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium text-white bg-yellow-500 rounded-full">
                  <Clock size={14} />
                  Pending
                </span>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}