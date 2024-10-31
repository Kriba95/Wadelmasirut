import React from "react";

const ExtraServicesComponent = ({
  extraServices,
  slicer,
  addToCart,
  selectedProducts,
  handleExtraServiceClick,
  media,
}) => {
  return (
    <>
      {extraServices
        .slice(
          slicer.kolmas === false ? 100 : slicer.kolmas[0],
          slicer.kolmas[1]
        )
        .map((extraService) => (
          <div
            key={extraService.name}
            className=""
            onClick={(e) => handleExtraServiceClick(e)}
          >
            <p className="text-sm font-medium mt-4">{extraService.name}</p>
            <p className="text-xs">{extraService.description}</p>
            <fieldset className="space-y-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-5">
              <legend className="sr-only">Services</legend>
              {extraService.sub.map((subService) => (
                <div
                  key={subService.name}
                  onClick={() =>
                    addToCart({
                      media: media.name,
                      mediaPrice: media.price,
                      extraService: extraService.name,
                      subService: subService,
                      price: subService.price,
                      select: extraService.select,
                    })
                  }
                  className={`relative flex items-start p-4 border rounded-md cursor-pointer ${
                    selectedProducts.some(
                      (product) =>
                        product.media === media.name &&
                        product.extraService === extraService.name &&
                        product.subService.name === subService.name
                    )
                      ? "bg-gray-600  border-gray-600"
                      : "bg-white border-gray-300"
                  }`}
                >
                  <div className="flex items-center h-5">
                    <input
                      id={subService.name}
                      name={subService.name}
                      type="checkbox"
                      checked={selectedProducts.some(
                        (product) =>
                          product.media === media.name &&
                          product.extraService === extraService.name &&
                          product.subService.name === subService.name
                      )}
                      readOnly
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm ">
                    <label
                      htmlFor={subService.name}
                      className={`text-gray-700 font-medium ${
                        selectedProducts.some(
                          (product) =>
                            product.media === media.name &&
                            product.extraService === extraService.name &&
                            product.subService.name === subService.name
                        )
                          ? "text-white"
                          : ""
                      }`}
                    >
                      {subService.name}
                    </label>
                    <p
                      className={`text-gray-500 text-xs ${
                        selectedProducts.some(
                          (product) =>
                            product.media === media.name &&
                            product.extraService === extraService.name &&
                            product.subService.name === subService.name
                        )
                          ? "text-white"
                          : ""
                      }`}
                    >
                      {subService.description}
                    </p>

                    <div className=" h-full">
                      {subService.price ? (
                        <p
                          className={`text-gray-500 pt-2 ${
                            selectedProducts.some(
                              (product) =>
                                product.media === media.name &&
                                product.extraService === extraService.name &&
                                product.subService.name === subService.name
                            )
                              ? "text-white"
                              : ""
                          }`}
                        >
                          Hinta: {typeof subService.price === "string" &&
                          subService.price.includes("kk")
                            ? subService.price.replace("kk", "") + " €/kk"
                            : typeof subService.price === "string" &&
                            subService.price.includes("tt")
                            ? subService.price.replace("tt", "") + " €/tunti"
                            : subService.price + " €"}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
            </fieldset>
          </div>
        ))}
    </>
  );
};

export default ExtraServicesComponent;
