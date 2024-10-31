import { XIcon } from "@heroicons/react/solid";
import React from "react";

function FlecCard({ product, handleRemove }) {
  let productPrice = product.subService.price;


  if (typeof productPrice !== "number" ){
    if (typeof productPrice === "string" && productPrice.includes("kk")) {
        let cleanedPrice = productPrice.replace("kk", "");
        // Tee jotain cleanedPrice muuttujalla
        productPrice = cleanedPrice + " €/kk"
      } else if (typeof productPrice === "string" && productPrice.includes("tt")) {
        let cleanedPrice = productPrice.replace("tt", "");
        // Tee jotain cleanedPrice muuttujalla
        productPrice = cleanedPrice + " €/tunti"
      } else {
        // Muussa tapauksessa tulosta productPrice
      }  }

  return (
    <div className="relative">
      <div className="flex group  hover:bg-gray-100 border-gray-200 hover:borderk  rounded-l-md pr-1 -mr-1 pl-2 justify-between">
        <span className="text-md">- {product.subService.name}:</span>

        <span className="text-md">
          {" "}
          {typeof productPrice === "number" ? `${productPrice}€` : productPrice}
        </span>

        <div
          onClick={() => handleRemove(product.media, product.subService.name)}
          className="absolute group-hover:block hidden justify-center  "
          style={{ right: "0px", top: "0px" }}
        >
          <div className=" bg-gray-100   hover:bg-gray-900 rounded-r-md justify-center mt-auto mb-auto text-xs w-6  h-6 duration-150 group-hover:text-white">
            <XIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlecCard;
