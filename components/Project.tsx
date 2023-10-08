import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Feature {
  name: string;
  description: string;
  icon: React.ComponentType<any>;
}

interface ProjectType {
  name: string;
  description: string;
  platforms: string;
  imageUrl: StaticImageData;
  href: string;
  features: Feature[];
}

interface ProjectProps {
  project: ProjectType;
}

export default function Project({ project }: ProjectProps) {
  return (
    <article className="grid grid-cols-2 gap-x-24 gap-y-12 place-items-center">
      <div className="col-span-2 lg:col-span-1">
        <p className="text-base font-semibold leading-7 text-emerald-600">
          {project.platforms}
        </p>
        <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
          {project.name}
        </h3>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-100">
          {project.description}
        </p>    
        <dl className="mt-12 space-y-8 text-base leading-7 text-gray-600 dark:text-gray-100">
          {project.features.map((feature, index) => (
            <div key={index} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900 dark:text-gray-50">
                <feature.icon
                  className="absolute left-1 top-1 h-5 w-5 text-emerald-600"
                  aria-hidden="true"
                />
                {feature.name}
              </dt>{" "}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>

      <Link href={project.href} className="col-span-2 lg:col-span-1">
        <Image
          width={400}
          height={400}
          src={project.imageUrl}
          alt="Product screenshot"
          className="w-[48rem] rounded-xl shadow-xl ring-1 ring-gray-400/10 dark:ring-gray-400/90 sm:w-[57rem] lg:-ml-0"
          // md:-ml-4
        />
      </Link>
    </article>
  );
}
