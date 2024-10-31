/* This example requires Tailwind CSS v2.0+ */
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

const plans = [
  {
    name: "Ei tarvitse",
  },
  {
    name: "Kyllä, useita kieliä",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({ formData, setFormData }) {
  const [selected, setSelected] = useState(plans[0]);



  const handleInputChange = (selectedPlan) => {
    setFormData({
      ...formData,
      radioFour: selectedPlan,
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
                checked
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border "
                  : "bg-white",
                "relative block rounded-lg border-2 border-gray-300 shadow-sm px-2 sm:px-6 py-4 cursor-pointer hover:border-gray-400 sm:flex sm:justify-between focus:outline-none"
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
                    <RadioGroup.Description as="div" className="text-gray-500">
                      {plan.desc}
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
