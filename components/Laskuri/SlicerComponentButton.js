import React from 'react';

const SlicerComponent = ({ slicer, category, id, handleCategorySelect, setSlicer }) => {
  return (
    <div className="">
      {slicer.kolmas === false ? (
        <button
        className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
        onClick={() => {
            handleCategorySelect(category, id);
          }}
        >
          Valitse {category.name}
        </button>
      ) : (
        <button
        className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
        onClick={() => {
            setSlicer({
              eka: [0, 2],
              toka: [0, 19],
              kolmas: false,
            });
          }}
        >
          Valitse toinen paketti
        </button>
      )}
    </div>
  );
};

export default SlicerComponent;
