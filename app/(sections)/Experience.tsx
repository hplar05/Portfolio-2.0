import { JSX, SVGProps } from "react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full flex justify-center items-center h-[110vh] max-sm:mb-[7rem]"
    >
      <div className="container px-4 md:px-6 z-0">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              My Professional Journey
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A timeline of my career experiences and accomplishments.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-12 py-12 lg:grid-cols-1 lg:gap-12">
          <div className="relative pl-6 after:absolute after:inset-y-0 after:w-px after:bg-muted-foreground/20 after:left-0 grid gap-10">
            <div className="grid gap-1 text-sm relative">
              <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
              <div className="font-medium">Freelance AI Automation Specialist</div>
              <div className="text-muted-foreground">
                 Dec 2024 - Present
              </div>
              <div className="text-muted-foreground  text-justify ">
                Using N8N for Automating.
                Communicating with client to satisfy their needs.
                Have a proper deep testing and stress test to define if the system meet the required user experienced.
              </div>
            </div>
            <div className="grid gap-1 text-sm relative">
              <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
              <div className="font-medium">
                Freelance Web Developer 
              </div>
              <div className="text-muted-foreground">
                Jun 2024 - Present
              </div>
              <div className="text-muted-foreground text-justify tracking-tighter">
                Proper Implementing of function in the system with the help used language
              </div>
            </div>
            <div className="grid gap-1 text-sm relative">
              <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
              <div className="font-medium">Shoppedia UX Designer</div>
              <div className="text-muted-foreground">
                 Dec 2024 - July 2025
              </div>
              <div className="text-muted-foreground text-justify tracking-tighter">
                Proper Implementing of function in the system with the help used
                Creating the initial design of Viogram
                Presentating the design thru the investors.
                Using Figma as a tool for the initial design
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BriefcaseIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}
