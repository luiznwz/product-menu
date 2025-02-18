import { useState } from "react";
import { ProductItem } from "../libs/types";
import Spinner from "./Spinner";

const PayButton = ({ products }: { products: ProductItem[] }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = () => {
    setIsProcessing(true);
    window.location.href = "/checkout";
  };

  return (
    <div className="mt-4">
      <button
        onClick={handleCheckout}
        className="bg-primary-red font-500 w-full rounded-full py-4 text-white transition-colors duration-300 hover:bg-rose-900"
      >
        {isProcessing ? <Spinner /> : "Confirm Order"}
      </button>
    </div>
  );
};

export default PayButton;
