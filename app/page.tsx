import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

import HeroSection from "@/components/Hero/HeroSection"
import Footer from "@/components/footer"

export default function IndexPage() {
  return (
    <>
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            No Clocks, LLC
          </h1>
          <p className="max-w-[1200px] text-lg text-muted-foreground">
            We are a new, cutting-edge, technology-based agency startup that seamlessly blends the expertise of seasoned
            Software Engineers, Application Developers, and Data Engineers.
          </p>
          <hr></hr>
          <p className="max-w-[1200px] text-lg text-muted-foreground">
            Our agency embodies a rich and diverse background, navigating through dynamic and progressive environments to deliver unparalleled services.
          </p>
        </div>
        <hr></hr>
        <div className="flex justify-center gap-4">
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants()}
          >
            Learn More
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants({ variant: "outline" })}
          >
            Visit Our GitHub
          </Link>
        </div>
      </section>

      <hr></hr>

      <HeroSection />

      <Footer />
    </>
  )
}
