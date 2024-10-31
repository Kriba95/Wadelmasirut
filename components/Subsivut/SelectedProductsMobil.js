import React from "react";
import { XIcon } from "@heroicons/react/solid";
import FlecCard from "./FlecCard";
import FlecCardMedia from "./FlecCardMedia";

const SelectedProductsMobil = ({ selectedProducts, handleRemove }) => {
  const calculateTotalPrice = (products) => {
    return products.reduce((acc, product, index, array) => {
      if (index === 0 || product.media !== array[index - 1].media) {
        acc += product.mediaPrice ? product.mediaPrice : 0;
      }
      return acc;
    }, 0);
  };

  const calculateSubTotalPrice = (products) => {
    return products.reduce(
      (acc, product) => {
        if (
          typeof product.subService.price === "string" &&
          product.subService.price.includes("tt")
        ) {
          let cleanedPrice = parseFloat(
            product.subService.price.replace("tt", "")
          );
          acc.hourly += cleanedPrice;
        } else if (
          typeof product.subService.price === "string" &&
          product.subService.price.includes("kk")
        ) {
          let cleanedPrice = parseFloat(
            product.subService.price.replace("kk", "")
          );
          acc.monthly += cleanedPrice;
        } else {
          acc.standard += product.subService.price;
        }
        return acc;
      },
      { standard: 0, hourly: 0, monthly: 0 }
    );
  };

  const subTotalPrices = calculateSubTotalPrice(selectedProducts);

  return (
   selectedProducts.length > 0 && (
      <div
        className=" xl:hidden block bg-white max-h-96 py-2  w-full sm:w-auto rounded px-4  sm:border-gray-300 border  border-gray-300 "
        style={{
          position: "sticky",
          left: "0px",
          bottom: "0px",
          zIndex: 999,
        }}
      >
        <p className=" border-gray-300">Valitut tuotteet:</p>

        {selectedProducts.reduce((acc, product, index, array) => {
            if (index > 0 && product.media === array[index - 1].media) {
              acc.push(
                <FlecCard
                  key={`card-${index}`}
                  handleRemove={handleRemove}
                  product={product}
                />
              );
            } else {
              acc.push(
                <div key={`media-${index}`}>
                  <FlecCardMedia
                    handleRemove={handleRemove}
                    product={product}
                  />
                  <FlecCard handleRemove={handleRemove} product={product} />
                </div>
              );
            }
            return acc;
          }, [])}

          <p className="pt-8 border-b ">
            Yhteensä:{" "}
            {subTotalPrices.standard + calculateTotalPrice(selectedProducts) === 0 ? subTotalPrices.hourly === 0 ? subTotalPrices.monthly : subTotalPrices.hourly + " €/tunti "  : subTotalPrices.standard + calculateTotalPrice(selectedProducts)} 
          €</p>
        
          {subTotalPrices.monthly ? (
            <p className=" ">
              + Kuukausimaksu: {subTotalPrices.monthly} €/kk
            </p>
          ) : null}
          {subTotalPrices.hourly ? (
            <p className=" ">
              + Tuntimaksu: {subTotalPrices.hourly} €/kk
            </p>
          ) : null}
  
      </div>
    )
  );
};

export default SelectedProductsMobil;
