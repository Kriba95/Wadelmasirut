/* This example requires Tailwind CSS v2.0+ */
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

const plans = [
  {
    name: "Ei väliä",
  },
  {
    name: "Wordpress",
    img: "https://s.w.org/style/images/about/WordPress-logotype-wmark.png",
    desc: "WordPress-alusta",
  },
  {
    name: "Node",
    img: "/nodejs.png",
    desc: "Node.js-alusta",
  },
  {
    name: "React",
    desc: "React-kirjasto",
  },
  {
    name: "NextJS",
    img: "/nextjs.256x153.png",
    desc: "Next.js-alusta",
  },
  {
    name: "PHP",
    img: "https://www.php.net/images/logos/new-php-logo.png",
    desc: "PHP-ohjelmointikieli",
  },
  {
    name: "Vanilla",
    img: "/prwino_image.png",
    desc: "Web-teknologiat: HTML, CSS, JavaScript...",
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
      radioTwo: selectedPlan,
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
      <RadioGroup.Label className="sr-only">Alusta</RadioGroup.Label>
      <div className="grid  grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  gap-2 ">
        {plans.map((plan) => (
          <RadioGroup.Option
            key={plan.name}
            value={plan}
            className={({ active, checked }) =>
              classNames(
                checked
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600"
                  : "bg-white",
                "  flex items-center justify-center relative  rounded-lg border-2 border-gray-300 shadow-sm py-2 cursor-pointer hover:border-gray-400 sm:flex sm:justify-between focus:outline-none"
              )
            }
          >
            {({ checked }) => (
              <>
                <div className=" relative w-full ">
                  <div className="flex  items-center justify-center">
                    {plan.img && (
                      <div className=" h-11 w-11 sm:h-16 sm:w-16 flex items-center">
                        <img src={plan.img} />
                      </div>
                    )}{" "}
                    {plan.name === "React" && (
                      <div className="h-11 w-11 sm:h-16 sm:w-16  flex items-center">
                        <svg
                          style={{
                            animation: "spin 4s linear infinite",
                          }}
                          width="100%"
                          height="100%"
                          viewBox="-10.5 -9.45 21 18.9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="uwu-hidden mt-4 mb-3 text-brand dark:text-brand-dark w-24 lg:w-28 self-center text-sm me-0 flex origin-center transition-all ease-in-out"
                        >
                          <circle cx={0} cy={0} r={2} fill="currentColor" />
                          <g stroke="currentColor" strokeWidth={1} fill="none">
                            <ellipse rx={10} ry="4.5" />
                            <ellipse rx={10} ry="4.5" transform="rotate(60)" />
                            <ellipse rx={10} ry="4.5" transform="rotate(120)" />
                          </g>
                        </svg>
                      </div>
                    )}
                  </div>
                  <hr  className="my-2 border-1 "/>
                  <div className="flex relative  items-center mt-auto mb-auto justify-center">
                    <div className="text-xs sm:text-sm text-center">
                      <RadioGroup.Label
                        as="p"
                        className={
                          checked
                            ? `font-medium   text-white `
                            : `font-medium  text-gray-900 `
                        }
                      >
                        {plan.name}
                      </RadioGroup.Label>
                      <RadioGroup.Description
                        as="div"
                        className={
                          checked
                            ? `font-medium text-white text-center `
                            : ` text-gray-500 text-center`
                        }
                      >
                        {plan.desc}
                      </RadioGroup.Description>
                    </div>
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
