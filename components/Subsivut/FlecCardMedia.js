import { XIcon } from "@heroicons/react/solid";
import React from "react";

function FlecCardMedia({ product, handleRemove }) {
  let productPrice = product.mediaPrice;

  if (typeof productPrice !== "number") {
    if (typeof productPrice === "string" && productPrice.includes("kk")) {
      let cleanedPrice = productPrice.replace("kk", "");
      // Tee jotain cleanedPrice muuttujalla
      productPrice = cleanedPrice + " €/kk";
    } else if (
      typeof productPrice === "string" &&
      productPrice.includes("tt")
    ) {
      let cleanedPrice = productPrice.replace("tt", "");
      // Tee jotain cleanedPrice muuttujalla
      productPrice = cleanedPrice + " €/tunti";
    } else {
      productPrice + "€";
      // Muussa tapauksessa tulosta productPrice
    }
  } else {
    productPrice + "€sadsad";
    // Muussa tapauksessa tulosta productPrice
  }

  return (
    <div className="relative border-t  border-gray-300">
      <div className="flex group hover:bg-gray-100 hover:borderk  rounded-l-md pr-1 -mr-1 pl-2 justify-between">
        <span className="text-md font-medium">{product.media}:</span>

        <span className="text-md">
          {typeof productPrice === "number" ? `${productPrice}€` : productPrice}
        </span>

        <div
          onClick={() => handleRemove(product.media)}
          className="absolute group-hover:block hidden justify-center  "
          style={{ right: "-0", top: "0px" }}
        >
          <div className=" bg-gray-100   hover:bg-gray-900 rounded-r-md justify-center mt-auto mb-auto text-xs w-6  h-6 duration-150 group-hover:text-white">
            <XIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlecCardMedia;
