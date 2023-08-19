"use client";

import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";

import useCart from "@/hooks/use-cart";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cart = useCart();

  if (!isMounted) {
    return null;
  }
  return (
    <div className="ml-auto flex items-center gap-x-4">
      <a
        href="/cart"
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </a>
    </div>
  );
};

export default NavbarActions;
