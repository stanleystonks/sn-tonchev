import { Separator } from "@/components/ui/separator";

import Project from "./Project";
import ProjectsHeading from "./ProjectsHeading";

import { playlist124 } from "@/lib/data-objects/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="grid flex-1 gap-y-24 px-6 py-24 sm:py-32 lg:px-8"
    >
      <ProjectsHeading />
      <Project project={playlist124} />
    </section>
  );
}
