
import { InboxIcon } from "@/components/Icons/InboxIcon"
import { MergeIcon } from "@/components/Icons/MergeIcon"
import { SettingsIcon } from "@/components/Icons/SettingsIcon"
import { SearchIcon } from "@/components/Icons/SearchIcon"
import { LockIcon } from "@/components/Icons/LockIcon"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "../ui/button"


export default function HeroSection() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6">
          <div className="flex flex-col justify-center space-y-8 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
                Discover Our Services
              </h1>
              <p className="mx-auto max-w-[600px] text-zinc-200 dark:text-zinc-100 md:text-xl">
                Our services are designed to enhance your productivity and streamline your workflow.
              </p>
            </div>
            <div className="mx-auto w-full max-w-full space-y-4">
              <div className="grid grid-cols-3 gap-8">
                <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-4">
                  <div className="bg-opacity-50/50 rounded-full bg-black p-2">
                    <InboxIcon className="mb-2 size-6 text-white opacity-75" />
                  </div>
                  <h2 className="text-xl font-bold text-white">Engineering</h2>
                  <p className="text-zinc-200 dark:text-zinc-100">
                    Out Software Engineering Services will help you build and maintain high-quality software solutions.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-4">
                  <div className="bg-opacity-50/50 rounded-full bg-black p-2">
                    <MergeIcon className="mb-2 size-6 text-white opacity-75" />
                  </div>
                  <h2 className="text-xl font-bold text-white">Seamless Integrations</h2>
                  <p className="text-zinc-200 dark:text-zinc-100">
                    Our services always allow seamless integrations with your existing technologies.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-4">
                  <div className="bg-opacity-50/50 rounded-full bg-black p-2">
                    <SettingsIcon className="mb-2 size-6 text-white opacity-75" />
                  </div>
                  <h2 className="text-xl font-bold text-white">Customization and Personalization</h2>
                  <p className="text-zinc-200 dark:text-zinc-100">
                    Our services are fully customizable to meet your unique needs and requirements.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-4">
                  <div className="bg-opacity-50/50 rounded-full bg-black p-2">
                    <SearchIcon className="mb-2 size-6 text-white opacity-75" />
                  </div>
                  <h2 className="text-xl font-bold text-white">Business Consulting</h2>
                  <p className="text-zinc-200 dark:text-zinc-100">
                    Our Services include business consulting offerings such as strategy development, business process optimization, and more.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-4">
                  <div className="bg-opacity-50/50 rounded-full bg-black p-2">
                    <LockIcon className="mb-2 size-6 text-white opacity-75" />
                  </div>
                  <h2 className="text-xl font-bold text-white">Reliable Security</h2>
                  <p className="text-zinc-200 dark:text-zinc-100">
                    With Reliable Security, your data is always safe and protected.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-4">
                  <div className="bg-opacity-50/50 rounded-full bg-black p-2">
                    <MergeIcon className="mb-2 size-6 text-white opacity-75" />
                  </div>
                  <h2 className="text-xl font-bold text-white">Effective Collaboration</h2>
                  <p className="text-zinc-200 dark:text-zinc-100">
                    Collaboration is paramount to our services, and we make it easy for you to work with us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="flex justify-center gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Learn About Our Services
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href="#" // siteConfig.links.pricing
          className={buttonVariants({ variant: "outline" })}
        >
          View Pricing
        </Link>
      </div>
      <hr></hr>
    </section>
  )
}
