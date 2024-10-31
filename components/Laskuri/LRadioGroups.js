/* This example requires Tailwind CSS v2.0+ */
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

const plans = [
  {
    name: 'Verkkosivut',
    packages: [
      { name: 'Peruspaketti', price: '500 €', description: 'Yksinkertainen yhden sivun verkkosivu' },
      { name: 'Laajennettu paketti', price: '1500 €', description: 'Monisivuiset verkkosivut (esim. etusivu, palvelut, yhteystiedot, blogi)' },
      { name: 'Premium-paketti', price: '3000 €', description: 'Laajat monisivuiset verkkosivut, räätälöity ja edistyksellinen design' },
      { name: 'Perus verkkokauppa', price: '1000 €', description: 'Yhden sivun verkkokauppa' },
    ]
  },
  {
    name: 'Verkkokauppa',
    packages: [
      { name: 'Perus verkkokauppa', price: '1000 €', description: 'Yhden sivun verkkokauppa' },
      { name: 'Perus verkkokauppa', price: '1000 €', description: 'Yhden sivun verkkokauppa' },
      { name: 'Laajennettu verkkokauppa', price: '2500 €', description: 'Monisivuinen verkkokauppa, laaja tuotteiden hallinta' },
      { name: 'Laajennettu verkkokauppa', price: '2500 €', description: 'Monisivuinen verkkokauppa, laaja tuotteiden hallinta' },
    ]
  },
  {
    name: 'Digitaalinen markkinointi',
    packages: [
      { name: 'Perusmarkkinointi', price: '500 €/kk', description: 'Perus sosiaalisen median hallinta (Facebook, Instagram)' },
      { name: 'Perus verkkokauppa', price: '1000 €', description: 'Yhden sivun verkkokauppa' },
      { name: 'Laajennettu verkkokauppa', price: '2500 €', description: 'Monisivuinen verkkokauppa, laaja tuotteiden hallinta' },
    ]
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [selected, setSelected] = useState(plans[0].packages[0])

  return (
    <div className="w-full">
      <RadioGroup value={selected} onChange={setSelected}>
        <RadioGroup.Label className="sr-only">Palvelut</RadioGroup.Label>
        <div className="space-y-4">
          {plans.map((planCategory) => (
            <div key={planCategory.name} className="space-y-2">
              <h3 className="text-lg font-medium text-gray-900">{planCategory.name}</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
                {planCategory.packages.map((plan) => (
                  <RadioGroup.Option
                    key={plan.name}
                    value={plan}
                    className={({ active, checked }) =>
                      classNames(
                        active ? 'ring-1 ring-offset-2 ring-indigo-500' : '',
                        checked ? 'border-indigo-500' : 'border-gray-300',
                        'relative block rounded-lg border bg-white shadow-sm px-6 py-4 cursor-pointer hover:border-gray-400 focus:outline-none'
                      )
                    }
                  >
                    {({ checked }) => (
                      <>
                        <div className="flex   items-center justify-between">
                          <div className="text-sm">
                            <RadioGroup.Label as="p" className="font-medium text-gray-900">
                              {plan.name}
                            </RadioGroup.Label>
                            <RadioGroup.Description as="div" className="text-gray-500 py-2 pb-7">
                              <span>{plan.description}</span>
                            </RadioGroup.Description>
                          </div>
                        </div>
                        <div
                          className={classNames(
                            checked ? '' : 'border-transparent',
                            'absolute -inset-px rounded-lg border-2 pointer-events-none '
                          )}
                          aria-hidden="true"
                        />
                        <div   className="w-full  left-0  px-4  bg-gray-100 insent-0  rounded-b-lg  border-t  absolute bottom-0 ">
                          <RadioGroup.Description style={{float:"right"}} as="div" className="flex justify-between text-">
                            <div  className="font-medium text-gray-900">{plan.price}</div>
                          </RadioGroup.Description>
                        </div>
                      </>
                    )}
                  </RadioGroup.Option>
                ))}
              </div>
            </div>
          ))}
        </div>
      </RadioGroup>
    </div>
  )
}
