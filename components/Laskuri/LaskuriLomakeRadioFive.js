import { useState } from "react";

const plans = [
  { name: "Uutiskirjeen tilaus", descr: "Mahdollisuus tilata uutiskirje sähköpostitse." },
  { name: "Yhteydenottolomake", descr: "Helppokäyttöinen ja selkeä yhteydenottolomake." },
  { name: "Blogialusta", descr: "Täysin toimiva blogialusta." },
  { name: "Somefiidi", descr: "Integroitu somefiidi sosiaalisen median tileiltä." },
  { name: "Kuvagalleria", descr: "Tyylikäs ja toimiva kuvagalleria." },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function LaskuriLomakeCheckbox({ formData, setFormData }) {
  const [selectedPlans, setSelectedPlans] = useState([]);

  const toggleSelection = (plan) => {
    let updatedPlans;
    if (selectedPlans.includes(plan)) {
      updatedPlans = selectedPlans.filter((p) => p !== plan);
    } else {
      updatedPlans = [...selectedPlans, plan];
    }
    setSelectedPlans(updatedPlans);
    handleInputChange(updatedPlans);
  };

  const handleInputChange = (updatedPlans) => {
    setFormData({
      ...formData,
      radioFive: updatedPlans,
    });
  };

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        {plans.map((plan) => (
          <div
            key={plan.name}
            onClick={() => toggleSelection(plan)}
            className={classNames(
              selectedPlans.includes(plan) ? "bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border" : "bg-white",
              "relative block rounded-lg border-2 border-white shadow-sm px-2 sm:px-6 pb-6 pt-2 cursor-pointer hover:border-gray-400 sm:flex sm:justify-between focus:outline-none"
            )}
          >
            <div className="flex">
              <div className="text-xs sm:text-sm">
                <p className={selectedPlans.includes(plan) ? "font-medium text-white" : "font-medium text-gray-900"}>
                  {plan.name}
                </p>
                <div className={selectedPlans.includes(plan) ? "text-white" : "border-transparent text-gray-500"}>
                  <p className="sm:inline">{plan.descr}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
