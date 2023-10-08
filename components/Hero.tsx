"use client";

export default function Hero() {
  return (
    <section className="isolate relative flex-1 px-6 py-32 sm:py-48 lg:px-8 lg:py-56">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:text-gray-100 dark:ring-gray-50/30 dark:hover:ring-gray-50/50">
          Brand new Spotify app just released.{" "}
          <a href="#projects" className="font-semibold text-emerald-600">
            <span className="absolute inset-0" aria-hidden="true" />
            See more <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>

      <div className="text-center lg:px-48">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-6xl">
          I'm Stanley, and this is my portfolio.
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600  dark:text-gray-100">
          This is the place where you can browse all my projects, learn more
          about me, and get in touch. So, let's get started!
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#projects"
            className="rounded-md bg-emerald-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:text-gray-900"
          >
            See projects
          </a>
          <a
            href="#competencies"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50"
          >
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
