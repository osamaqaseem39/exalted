import { Suspense } from "react";
import ProductsClient from "./ProductsClient";

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[60vh] items-center justify-center bg-white text-sm text-black">
          Loading products...
        </div>
      }
    >
      <ProductsClient />
    </Suspense>
  );
}
