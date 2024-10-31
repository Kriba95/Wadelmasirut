import React, { useRef } from "react";
import ExtraServicesComponent from "../aa/Asa.js/ExtraServicesComponent";

const SlicerComponent = ({
  slicer,
  category,
  id,
  handleCategorySelect,
  setSlicer,
  selectedCategories,
  handleMediaItemClick,
  shownMedia,
  addToCart,
  selectedProducts,
  handleExtraServiceClick,
  handleMediaClick,
  handleNoThanksClick,
  handleScroll
}) => {
 
  return (
    <div className="">

      <div >
        {selectedCategories.includes(category) && (
          <div
            className={`${
              slicer.kolmas !== false
                ? "mt-4 grid grid-cols-1 gap-x-3"
                : "mt-4 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-x-3"
            } `}
          >
            {category.mediadata
              .slice(slicer.toka[0], slicer.toka[1])
              .map((media, mediaId) => (
                <div
                  key={media.name}
                  className={` group border border-gray-300  cursor-pointer rounded px-2 py-2  sm:px-4 sm:py-4 mb-4 duration-300
                    ${slicer.kolmas === false ? (
                      selectedProducts.some(
                        (product) =>
                          product.media === media.name 
                      )
                        ? "bg-gray-900 text-white "
                        : "bg-white"
                     ): ""}
                    ${slicer.kolmas !== false ? "" : "hover:bg-gray-900 "} `}
                  onClick={(e) => {
                    e.stopPropagation();
                    slicer.kolmas !== false
                      ? false
                      : handleMediaItemClick(mediaId);
                  }}
                >
                  <h3
                    className={`${
                      slicer.kolmas !== false ? "" : "group-hover:text-gray-200"
                    } text-xs sm:text-lg  font-bold`}
                  >
                    {media.name}
                  </h3>
                  <p
                    className={`${
                      slicer.kolmas !== false ? "" : "group-hover:text-gray-200"
                    }  mb-2 text-xs sm:text-sm`}
                  >
                    {media.description}
                  </p>{media.price && 
                  <p
                    className={`${
                      slicer.kolmas !== false ? "" : "group-hover:text-gray-200"
                    } mb-2 text-xs sm:text-sm`}
                  >
                    Hinta: {media.price}€
                  </p>}

                  {media.extra && shownMedia[category.name]?.includes(media) && (
                    <div>
                      <ExtraServicesComponent
                        extraServices={media.extra}
                        slicer={slicer}
                        addToCart={addToCart}
                        selectedProducts={selectedProducts}
                        handleExtraServiceClick={handleExtraServiceClick}
                        media={media}
                      />
                    </div>
                  )}

                  <div className="border-t border-gray-300 pt-2 mt-2">
                    <p
                      className={`${
                        slicer.kolmas !== false ? "" : "group-hover:text-gray-200"
                      } text-xs sm:text-sm font-medium  `}
                    >
                      Lisäpalvelut
                    </p>
                    <p
                      className={`${
                        slicer.kolmas !== false ? "" : "group-hover:text-gray-200"
                      } text-xs sm:text-sm font-medium `}
                    >
                      Valitse lisäpalveluja painamalla tähän.
                    </p>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
      {slicer.kolmas === false ? null : (
        <button
          className="bg-blue-500 text-white mr-2 px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => {
            handleScroll(); // Kutsu funktiota oikein
            setSlicer({
              eka: [0, 2],
              toka: [0, 19],
              kolmas: false,
            });
          }}
        >
          Takaisin
        </button>
      )}  
    </div>
  );
};

export default SlicerComponent;
