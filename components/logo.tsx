import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Logo = ({
  className,
  spanDesign,
}: {
  className?: string;
  spanDesign?: string;
}) => {
  return (
    <div>
      <Link href={"/"}>
        <h2
          className={cn(
            "text-2xl text-shop_dark_green font-black tracking-wider uppercase hover:text-shop_light-green hoverEffect group font-sans",
            className
          )}
        >
          Shopcar
          <span
            className={cn(
              "text-shop_light-green group-hover:text-shop_dark_green hoverEffect",
              spanDesign
            )}
          >
            t
          </span>
        </h2>
      </Link>
    </div>
  );
};

export default Logo;
