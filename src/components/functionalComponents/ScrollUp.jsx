import { ChevronUp } from "lucide-react";

const ScrollUp = () => {
  return (
    <div
      className="fixed bottom-0 right-0 w-14 h-14 rounded-full bg-neutral-900 text-white
     place-items-center place-content-center  m-5"
    >
      <ChevronUp />
    </div>
  );
};

export default ScrollUp;
