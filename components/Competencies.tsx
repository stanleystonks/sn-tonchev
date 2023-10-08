import Image from "next/image";
import { skills } from "@/lib/data-objects/skills";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Competencies() {
  return (
    <section
      id="competencies"
      className="grid flex-1 gap-y-24 px-6 py-24 sm:py-32 lg:px-8"
    >
      <div className="flex lg:px-32 flex-col lg:items-center lg:text-center">
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
          My Programming Skills
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-100">
          I am eager to share and apply my current knowledge, and see the
          results of my efforts. But I will also never stop learning new skills
          and concepts.
        </p>
      </div>

      <ul
        role="list"
        className="grid gap-x-8 grid-cols-2 lg:px-32"
        // gap-x-8 gap-y-12 pb-24 xl:px-48 sm:gap-y-16
      >
        {skills.map((skill, index) => (
          <li key={index} className="col-span-2 lg:col-span-1">
            <Accordion type="single" collapsible>
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger>
                    <div className="flex items-center gap-6">
                      <Image
                        className="w-16"
                        src={skill.imageUrl}
                        alt={skill.altText}
                        width={100}
                        height={100}
                      />
                      <div className="text-left">
                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-gray-50">
                          {skill.name}
                        </h3>
                        <p className="text-sm font-semibold leading-6 text-emerald-600">
                          {skill.description}
                        </p>
                      </div>
                    </div>     
                </AccordionTrigger>
                <AccordionContent>{skill.summary}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
        ))}
      </ul>

      <div className="flex flex-col items-center">
        <h3 className="my-8 text-lg leading-8 text-gray-600 dark:text-gray-100">
          Still learning...
        </h3>
        <div className="flex items-center justify-center gap-8">
          <figure className="flex flex-col items-center justify-center">
            <Image
              className="w-16"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg"
              alt="Kotlin logo"
              width={100}
              height={100}
            />
            <figcaption className="text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-gray-50">
              Kotlin
            </figcaption>
          </figure>

          <figure className="flex flex-col items-center justify-center">
            <Image
              className="w-16"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"
              alt="Swift logo"
              width={100}
              height={100}
            />
            <figcaption className="text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-gray-50">
              Swift
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
