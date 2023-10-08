import Image from "next/image";

import { roles } from "@/lib/data-objects/roles";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function About() {
  return (
    <section
      id="about"
      className="flex-1 grid grid-cols-3 gap-x-24 gap-y-24 px-6 lg:px-8 py-24 sm:py-32"
      // mx-auto grid w-full gap-x-8 gap-y-20 px-6 py-24 sm:py-32 md:max-w-7xl lg:px-8 xl:grid-cols-3
    >
      <div className="col-span-3 lg:col-span-1 flex flex-col justify-center" >
        {/* max-w-2xl */}
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
          That's me in the corner.
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-100">
          I have an insatiable desire to learn the inner workings of everything
          that surrounds me. This is why, I take various roles in life, as
          needed, and continue to add more to the list.
        </p>
      </div>

      <ul
        role="list"
        className="grid gap-x-8 gap-y-8 grid-cols-2 col-span-3 lg:col-span-2 lg:align-items-center"
      >
        {roles.map((role, index) => (
          <li key={index} className="col-span-2 lg:col-span-1">
            <Accordion type="single" collapsible>
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger>
                  <div className="flex items-center gap-6 text-left">
                    <Image
                      className="h-16 w-16 rounded-full"
                      src={role.imageUrl}
                      alt=""
                      // width={100}
                      // height={100}
                    />
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-gray-50">
                        {role.name}
                      </h3>
                      <p className="text-sm font-semibold leading-6 text-emerald-600">
                        {role.role}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent>{role.description}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
        ))}
      </ul>
    </section>
  );
}
