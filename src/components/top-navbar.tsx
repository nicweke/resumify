"use client";

import { cx } from "@/lib/cx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const TopNavBar = () => {
  const pathName = usePathname();

  const isHomePage = pathName === "/";

  return (
    <header
      aria-label="Site Header"
      className={cx(
        "flex h-[3.5rem] items-center border-b-2 border-gray-100 px-3 lg:px-12 ",
        isHomePage && "bg-dot"
      )}
    >
      {" "}
      <div className="h-10 flex w-full items-center justify-between">
        <Link href="/">
          <div className="flex items-center justify-center gap-1">
            <Image
              src="/assets/resume.svg"
              alt="logo"
              width={16}
              height={16}
              className="h-8 w-full priority"
            />
            <h1 className="text-xl whitespace-nowrap text-primary font-bold">
              Resumify
            </h1>
          </div>
        </Link>
        <nav
          aria-label="Site Nav Bar"
          className="flex items-center gap-2 text-base font-medium"
        >
          {[
            ["resume-builder", "Builder"],
            ["resume-parser", "Parser"],
          ].map(([href, text]) => (
            <Link
              key={text}
              href={href}
              className="rounded-md px-1.5 py-2 text-gray-800 hover:bg-gray-200 focus-visible:bg-gray-100 lg:px-4"
            >
              {text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
