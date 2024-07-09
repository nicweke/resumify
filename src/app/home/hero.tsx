import { FlexboxSpacer } from "@/components/flexbox-spacer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="lg:flex  lg:h-[825px] lg:justify-center">
      <FlexboxSpacer maxwidth={75} minWidth={0} className="hidden lg:block" />
      <div className="mx-auto max-w-xl pt-8 text-center lg:kx-0 lg:grow lg:pt-32 lg:text-left">
        <h1 className="pb-2 text-4xl font-bold lg:text-5xl text-primary">
          Effortlessly craft
          <br />
          Professional resumes
        </h1>
        <p className="mt-3 text-lg lg:mt-5 lg:text-xl ">
          With this powerful resume builder
        </p>
        <Button asChild>
          <Link href="/resume-import" className="mt-6 lg:mt-14 text-white">
            Create Resume
          </Link>
        </Button>
        <p className="mt-3 text-sm text-gray-600 ">No sign up required</p>
        <p className="mt-3 text-sm text-gray-600 lg:mt-36">
          Have a resume? Check its ATS compatibility with the{" "}
          <Link href="/resume-parser" className="underline underline-offset-2">
            Resume Parser
          </Link>
        </p>
      </div>
      <FlexboxSpacer maxwidth={100} minWidth={50} className="hidden lg:block" />

      <div className="mt-6 flex justify-center lg:mt-4 lg:block lg:grow">
        <>
          <h1>Auto Typing Resume</h1>
        </>
      </div>
    </section>
  );
};
