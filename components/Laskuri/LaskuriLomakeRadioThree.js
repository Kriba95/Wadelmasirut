/* This example requires Tailwind CSS v2.0+ */
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
const plans = [
  {
    name: "En tiedä",
  },
  {
    name: "Yhdensivun sivut",
    descr: "Yksinkertaiset, mutta vaikuttavat yhdensivun sivustot.",
  },
  {
    name: "Alle 3 sivua",
    descr:
      "Pienet ja tehokkaat sivustot, jotka palvelevat tiiviisti tarkoitustaan.",
  },
  {
    name: "Alle 10 sivua",
    descr:
      "Monipuoliset sivustot, jotka tarjoavat kattavat yritystäsi ja palveluasi.",
  },
  {
    name: "Yli 20 sivua",
    descr:
      "Laajat sivustot, joissa on tilaa kertoa tarinasi ja esitellä laajaa valikoimaasi.",
  },
  {
    name: "Yli 1000 sivua",
    descr:
      "Monimutkaiset ja dynaamiset sivustot, jotka skaalautuvat suurillekin tarpeille ja käyttäjämäärille.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function LaskuriLomakeRadioTwo({ formData, setFormData }) {
  const [selected, setSelected] = useState(plans[0]);

  const handleInputChange = (selectedPlan) => {
    setFormData({
      ...formData,
      radioThree: selectedPlan,
    });
  };

  return (
    <RadioGroup
      value={selected}
      onChange={(value) => {
        setSelected(value);
        handleInputChange(value);
      }}
    >
      <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  gap-2 ">
        {plans.map((plan) => (
          <RadioGroup.Option
            key={plan.name}
            value={plan}
            className={({ active, checked }) =>
              classNames(
                active ? "ring-1 ring-offset-2 ring-indigo-500" : "",
                checked
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border "
                  : "bg-white",

                "relative block rounded-lg border border-gray-300 shadow-sm px-2 sm:px-6 py-4 cursor-pointer hover:border-gray-400 sm:flex sm:justify-between focus:outline-none"
              )
            }
          >
            {({ checked }) => (
              <>
                <div className="flex items-center">
                  <div className="text-xs sm:text-sm">
                    <RadioGroup.Label
                      as="p"
                      className={
                        checked
                          ? `font-medium text-white `
                          : `font-medium text-gray-900 `
                      }
                    >
                      {plan.name}
                    </RadioGroup.Label>
                    <RadioGroup.Description
                      as="div"
                      className={checked ? ` text-white ` : ` text-gray-500  `}
                    >
                      <p className="sm:inline">{plan.descr}</p>{" "}
                    </RadioGroup.Description>
                  </div>
                </div>
                <div
                  className={classNames(
                    checked ? "border-white" : "border-transparent",
                    "absolute -inset-px rounded-lg border-2 pointer-events-none"
                  )}
                  aria-hidden="true"
                />
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}
