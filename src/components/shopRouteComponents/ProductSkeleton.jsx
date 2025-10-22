import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="w-full max-w-sm animate-pulse shadow-sm">
      {/* Image placeholder */}
      <div className="bg-neutral-700 h-48 w-full rounded-t mb-4"></div>

      <div className="p-4 space-y-2">
        <div className="bg-neutral-700 h-4 w-3/4 rounded mb-2"></div>
        <div className="bg-neutral-700 h-3 w-1/2 rounded"></div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
