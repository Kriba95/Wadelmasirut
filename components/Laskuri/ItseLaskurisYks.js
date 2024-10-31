import React, { useRef, useState } from "react";
import { GlobeAltIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import ExtraServicesComponent from "../aa/Asa.js/ExtraServicesComponent";
import SlicerComponentButton from "./SlicerComponentButton";
import SlicerCardsYks from "./SlicerCardsYks";

const MyComponent = ({
  medialinks,
  setValinta,
  addToCart,
  selectedProducts,
  setSelectedProducts,
}) => {
  // const MyComponent = ({ medialinks, addToCart }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  // const [selectedProducts, setSelectedProducts] = useState([]);
  const [shownMedia, setShownMedia] = useState({});
  const [total, setTotal] = useState(0);
  const [totalT, setTotalT] = useState(0);
  const [slicer, setSlicer] = useState({
    eka: [0, 2],
    toka: false,
    kolmas: false,
  });

  const myRef = useRef(null);

  const handleScroll = () => {
    myRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleCategoryClick = (id) => {
    setSlicer({ eka: [id, id + 1], toka: false, kolmas: false });
  };

  const handleCategorySelect = (category, id) => {
    setValinta([
      category.name === "Kotisivut" ? true : false,
      category.name !== "Kotisivut" ? true : false,
    ]);
    setSlicer({ eka: [id, id + 1], toka: [0, 19], kolmas: false });
    setSelectedCategories((prev) => [...prev, category]);
    setShownMedia((prev) => ({ ...prev, [category.name]: category.mediadata }));
  };

  const handleMediaClick = (media) => {
    setShownMedia((prev) => ({ ...prev, [media.name]: media.extra }));
  };

  const handleNoThanksClick = (media) => {
    setShownMedia((prev) => ({ ...prev, [media.name]: [] }));
  };

  const handleMediaItemClick = (mediaId) => {

    setSlicer({
      eka: slicer.eka,
      toka: [mediaId, mediaId + 1],
      kolmas: [0, 19],
    });
  };

  const handleExtraServiceClick = (e) => {
    e.stopPropagation(); // Prevent click event from propagating to parent div
  };

  const calculateTotal = () => {
    let totalNumerical = 0;
    let totalMonthly = 0;
    let totalHourly = 0;

    selectedProducts.forEach((item) => {
      const { price } = item.subService;
      if (typeof price === "string") {
        if (price.includes("€/kk")) {
          totalMonthly += parseFloat(price.replace("€/kk", ""));
        } else if (price.includes("€/tunti")) {
          totalHourly += parseFloat(price.replace("€/tunti", ""));
        }
      } else {
        totalNumerical += price;
      }
    });

    setTotal({
      numerical: totalNumerical,
      monthly: totalMonthly,
      hourly: totalHourly,
    });
  };
  React.useEffect(() => {
    calculateTotal();
  }, [selectedProducts]);

  return (

  <div ref={myRef} className="flex-grow mb-4">
    {medialinks.slice(slicer.eka[0], slicer.eka[1]).map((category, id) => (
      <div
        key={category.name}
        className={`${
          slicer.toka !== false ? "sm:border-gray-300 border" : ""
        } bg-white h-full px-4 shadow sm:rounded-lg mb-0 py-6 mx-0 sm:mb-8 sm:px-6 sm:mx-2 rounded-md flex flex-col justify-between`}
      >
        <h2 className="text-2xl text-gray-900 font-bold mb-2">
          {category.name}
        </h2>
        <p className="text-gray-600 mb-4 relative ">{category.description}</p>
        {slicer.toka === false && (
          <SlicerComponentButton
            slicer={slicer}
            category={category}
            id={id}
            handleCategorySelect={handleCategorySelect}
            setSlicer={setSlicer}
          />
        )}
        {slicer.kolmas !== false && (
          <SlicerComponentButton
            slicer={slicer}
            category={category}
            id={id}
            handleCategorySelect={handleCategorySelect}
            setSlicer={setSlicer}
          />
        )}

        <SlicerCardsYks
          slicer={slicer}
          category={category}
          id={id}
          handleCategorySelect={handleCategorySelect}
          setSlicer={setSlicer}
          selectedCategories={selectedCategories}
          handleMediaItemClick={handleMediaItemClick}
          shownMedia={shownMedia}
          addToCart={addToCart}
          selectedProducts={selectedProducts}
          handleExtraServiceClick={handleExtraServiceClick}
          handleMediaClick={handleMediaClick}
          handleNoThanksClick={handleNoThanksClick}
          handleScroll={handleScroll}
        />
      </div>
    ))}
  </div>


  );
};

export default MyComponent;
