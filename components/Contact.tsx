import Image from "next/image";
import { contactPlatforms } from "@/lib/data-objects/contact-platforms";

export default function Contact() {
  return (
    <section id="contact" className="flex-1 grid gap-y-24 px-6 lg:px-8 py-24 sm:py-32">
      <div className="md:text-center lg:px-32">
        {/* mx-auto max-w-2xl px-6 py-24 sm:py-32 lg:px-8 lg:text-center */}
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
          Contact
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-100">
          Thanks for taking the time to view my portfolio. Let's get in touch and achieve great things together!
        </p>
      </div>

      <ul
        role="list"
        className="flex flex-col md:flex-row gap-12 md:gap-24 justify-center md:items-center"
        // grid gap-x-8 gap-y-12 pb-24 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2
      >
        {contactPlatforms.map((contactPlatform, index) => (
          <li key={index}>
            <a href={contactPlatform.href} className="flex items-center gap-6">
              <Image
                className="w-16"
                src={contactPlatform.imageUrl}
                alt={contactPlatform.altText}
                width={100}
                height={100}
              />
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-gray-50">
                  {contactPlatform.name}
                </h3>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
