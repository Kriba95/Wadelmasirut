import React, { useState } from "react";
import LRadioGroupsOne from "./LRadioGroupsOne";
import LRadioGroupsTwoKotisivut from "./LRadioGroupsTwoKotisivut";
import LRadioGroupsTwoVerkkokaupat from "./LRadioGroupsTwoVerkkokaupat";
import {
  GlobeAltIcon,
  ShoppingCartIcon,
  UsersIcon,
} from "@heroicons/react/outline";

function ItseLaskuri({ valinta, setValinta }) {
  const [valinnat, setValinnat] = useState([[], [], [], [], [], [], []]);
  const [verkkokauppaValinnat, setVerkkokauppaValinnat] = useState([
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ]);

  const [currentStep, setCurrentStep] = useState(0);
  const [currentValinta, setCurrentValinta] = useState([]);

  function resetState() {
    setValinnat([[], [], [], [], [], [], []]);
    setVerkkokauppaValinnat([[], [], [], [], [], [], []]);
    setCurrentStep(0);
    setCurrentValinta([]);
  }

  const updateValinta = (index, newVal, isVerkkokauppa) => {
    if (isVerkkokauppa === "eka") {
      const updatedValinnat = [...currentValinta];
      updatedValinnat[index] = newVal;

      if (newVal[0] === 0) {
        setCurrentValinta(updatedValinnat);
      } else if (newVal[0] === 1) {
        setCurrentValinta(updatedValinnat);
      } else {
        setCurrentValinta([]);
      }
    } else if (isVerkkokauppa === "toka") {
      const updatedValinnat = [...currentValinta];
      updatedValinnat[index] = newVal[0];

      if (newVal[0] === 0) {
        setCurrentValinta(updatedValinnat);
      } else if (newVal[0] === 1) {
        setCurrentValinta(updatedValinnat);
      } else {
        setCurrentValinta([]);
      }
    } else if (isVerkkokauppa) {
      let currentSteps = newVal[0];

      function getStepMessage(currentStep, stepSize) {
    
        let step = Math.floor(currentStep / stepSize) + 1;
        setCurrentStep(step);
      }
      let stepSize = 3;

      if (Math.floor(newVal[0] / stepSize) + 1 > currentStep) {
        getStepMessage(currentSteps, stepSize);
      }

      const updatedValinnat = [...verkkokauppaValinnat];
      if (
        updatedValinnat[newVal[0]] &&
        updatedValinnat[newVal[0]].length === 0
      ) {
        updatedValinnat[newVal[0]] = true;
      } else {
        updatedValinnat[newVal[0]] = !updatedValinnat[newVal[0]]; // Käännetään boolean-arvo
      }

      setVerkkokauppaValinnat(updatedValinnat);
    } else {
      let currentSteps = newVal[0];

      function getStepMessage(currentStep, stepSize) {
        let step = Math.floor(currentStep / stepSize) + 1;
        setCurrentStep(step);
      }
      let stepSize = 3;

      if (Math.floor(newVal[0] / stepSize) + 1 > currentStep) {
        getStepMessage(currentSteps, stepSize);
      }

      const updatedValinnat = [...valinnat];
      if (
        updatedValinnat[newVal[0]] &&
        updatedValinnat[newVal[0]].length === 0
      ) {
        updatedValinnat[newVal[0]] = true;
      } else {
        updatedValinnat[newVal[0]] = !updatedValinnat[newVal[0]]; // Käännetään boolean-arvo
      }

      setValinnat(updatedValinnat);
    }
  };

  const medialinks = [
    {
      valinta: 0,
      mediadata: [
        {
          id: 1,
          name: "010 sivut",
          description: "Sisältää peruspaketin kotisivut",
          icon: GlobeAltIcon,
        },
        {
          id: 2,
          name: "200 sivut",
          description: "Sisältää premium-paketin kotisivut",
          icon: GlobeAltIcon,
        },
        {
          id: 3,
          name: "300 sivut",
          description: "Sisältää muut erikoissivut",
          icon: GlobeAltIcon,
        },
        {
          id: 4,
          name: "00 sivut",
          description: "Sisältää peruspaketin kotisivut",
          icon: GlobeAltIcon,
        },
        {
          id: 5,
          name: "00 sivut",
          description: "Sisältää premium-paketin kotisivut",
          icon: GlobeAltIcon,
        },
        {
          id: 6,
          name: "00 sivut",
          description: "Sisältää muut erikoissivut",
          icon: GlobeAltIcon,
        },
        {
          id: 7,
          name: "00 sivut",
          description: "Sisältää premium-paketin kotisivut",
          icon: GlobeAltIcon,
        },
        {
          id: 8,
          name: "00 sivut",
          description: "Sisältää muut erikoissivut",
          icon: GlobeAltIcon,
        },
        {
          id: 9,
          name: "00 sivut",
          description: "Sisältää premium-paketin kotisivut",
          icon: GlobeAltIcon,
        },
        {
          id: 10,
          name: "00 sivut",
          description: "Sisältää muut erikoissivut",
          icon: GlobeAltIcon,
        },
      ],
    },
    {
      valinta: 1,
      mediadata: [
        {
          id: 11,
          name: "11 sivut",
          description: "Sisältää peruspaketin kotisivut",
          icon: GlobeAltIcon,
        },
        {
          id: 12,
          name: "111 sivut",
          description: "Sisältää premium-paketin kotisivut",
          icon: GlobeAltIcon,
        },
        {
          id: 13,
          name: "111 sivut",
          description: "Sisältää muut erikoissivut",
          icon: GlobeAltIcon,
        },
        {
          id: 14,
          name: "11 sivut",
          description: "Sisältää peruspaketin kotisivut",
          icon: GlobeAltIcon,
        },
        {
          id: 15,
          name: "111 sivut",
          description: "Sisältää premium-paketin kotisivut",
          icon: GlobeAltIcon,
        },
        {
          id: 16,
          name: "111 sivut",
          description: "Sisältää muut erikoissivut",
          icon: GlobeAltIcon,
        },
      ],
    },
  ];

  const getCurrentLinks = (props) => {
    const startIndex = currentStep * 3;

    return props.slice(0, startIndex + 3);
    return medialinks[0].mediadata.slice(startIndex, startIndex + 3);
  };

  return (
    <section
      className="mx-auto relative z-10 pb-16 px-4 sm:px-6 lg:px-8"
      aria-labelledby="contact-heading"
    >
      <h2 className="sr-only" id="contact-heading">
        Verkkosivujen hintalaskuri
      </h2>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LRadioGroupsOne
          valinnat={[]}
          valinta={currentValinta}
          setValinta={(newVal) => {
            updateValinta(0, newVal, "eka");
            setCurrentValinta(newVal);
          }}
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {currentValinta[0] === 0 && (
          <LRadioGroupsTwoKotisivut
            mainadlinks={getCurrentLinks(medialinks[0].mediadata)}
            valinta={valinnat}
            setValinta={(newVal) => updateValinta(1, newVal)}
          />
        )}
        {currentValinta[0] === 1 && (
          <LRadioGroupsTwoVerkkokaupat
            mainadlinks={getCurrentLinks(medialinks[1].mediadata)}
            valinta={verkkokauppaValinnat}
            setValinta={(newVal) => updateValinta(1, newVal, true)}
          />
        )}
      </div>
      <button className="p-3 bg-red-200" onClick={resetState}>
        Reset
      </button>
      <p>Valittu sivu=currentValinta{currentValinta}-</p>
      <p>
        Sivuja:{" "}
        {currentValinta.length !== 0 &&
          Math.floor(
            medialinks[currentValinta.length !== 0 ? [0] : [1]].mediadata
              .length / 3
          )}{" "}
      </p>
      <p>currentStep: {currentStep}</p>


  

      {medialinks[1].mediadata &&
      currentValinta.length !== 0 &&
      Math.floor(medialinks[currentValinta[0]].mediadata.length / 3) ? (
        <LRadioGroupsOne
          valinnat={currentValinta === 0 ? [0] : [1]}
          valinta={currentValinta.length !== 1 ? [currentValinta[1]] : []}
          setValinta={(newVal) => {
            // updateValinta(1, newVal,"toka");
            let arr = [currentValinta[0]];
            if (newVal[0] === 0) {
              arr = [currentValinta[0], newVal[0] === 1 ? 0 : 1];
            }
            setCurrentValinta([arr]);
          }}
        />
      ) : (
        "ei vielä"
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {currentValinta[1] === 0 && (
          <LRadioGroupsTwoKotisivut
            mainadlinks={getCurrentLinks(medialinks[0].mediadata)}
            valinta={valinnat}
            setValinta={(newVal) => updateValinta(1, newVal)}
          />
        )}
        {currentValinta[1] === 1 && (
          <LRadioGroupsTwoVerkkokaupat
            mainadlinks={getCurrentLinks(medialinks[1].mediadata)}
            valinta={verkkokauppaValinnat}
            setValinta={(newVal) => updateValinta(1, newVal, true)}
          />
        )}
      </div>
    </section>
  );
}

export default ItseLaskuri;
