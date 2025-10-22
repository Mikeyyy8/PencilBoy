import { ChevronLeft, ChevronRight } from "lucide-react";

const IndexControls = () => {
  const Index = 1;
  return (
    <div className="flex items-center gap-2">
      <div
        className="h-10 w-10 bg-neutral-300 rounded-full place-items-center
         place-content-center hover:bg-neutral-200 transition-all duration-100 ease-linear
         dark:bg-neutral-700 dark:hover:bg-neutral-600"
      >
        <ChevronLeft />
      </div>
      {Index}
      <div
        className="h-10 w-10 bg-neutral-300 rounded-full place-items-center
         place-content-center hover:bg-neutral-200 transition-all duration-100 ease-linear
         dark:bg-neutral-700 dark:hover:bg-neutral-600"
      >
        <ChevronRight />
      </div>
    </div>
  );
};

export default IndexControls;
