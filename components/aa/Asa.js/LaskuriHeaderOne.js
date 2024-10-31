import React, { useState } from "react";

export default function LaskuriHeaderOne() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [price, setPrice] = useState(50); // Alkuarvo on 50

  const handleChange = (event) => {
    setPrice(event.target.value);
  };
  return (
    <div className="-mt-32">
     

      {/* Overlapping cards */}
      <section
        className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Palvelumme
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          asdadasdsafsa
        </div>
      </section>
    </div>
  );
}
