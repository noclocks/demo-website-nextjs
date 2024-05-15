import React from "react"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { siteConfig } from "@/config/site"

interface FooterProps {
  className?: string
  logo?: string
  text?: string
  links?: {
    title: string
    items: { title: string; href: string }[]
  }[]
}

export default function Footer() {
  return (
    <>
      <footer className="bg-grey text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="xl:grid xl:grid-cols-4 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <img alt="Company Logo" className="h-10" src="/noclocks-logo-white.svg" />
              <p className="text-gray-500 text-base">
                Timeless Tech, Infinite Innovation.
              </p>
              <div className="flex space-x-6">
                <a className="text-gray-400 hover:text-gray-300" href={siteConfig.links.twitter}>
                  <TwitterIcon className="h-6 w-6" />
                </a>
                <a className="text-gray-400 hover:text-gray-300" href={siteConfig.links.github}>
                  <GithubIcon className="h-6 w-6" />
                </a>
                <a className="text-gray-400 hover:text-gray-300" href={siteConfig.links.youtube}>
                  <YoutubeIcon className="h-6 w-6" />
                </a>
                <a className="text-gray-400 hover:text-gray-300" href={siteConfig.links.linkedin}>
                  <LinkedinIcon className="h-6 w-6" />
                </a>
                <a className="text-gray-400 hover:text-gray-300" href={siteConfig.links.facebook}>
                  <FacebookIcon className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-3">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Services</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a className="text-base text-gray-300 hover:text-white" href="#">
                        Store
                      </a>
                    </li>
                    <li>
                      <a className="text-base text-gray-300 hover:text-white" href="#">
                        Features
                      </a>
                    </li>
                    <li>
                      <a className="text-base text-gray-300 hover:text-white" href="#">
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a className="text-base text-gray-300 hover:text-white" href="#">
                        Help Center
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Portfolio</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a className="text-base text-gray-300 hover:text-white" href="#">
                        Projects
                      </a>
                    </li>
                    <li>
                      <a className="text-base text-gray-300 hover:text-white" href="#">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a className="text-base text-gray-300 hover:text-white" href="#">
                        Resources
                      </a>
                    </li>
                    <li>
                      <a className="text-base text-gray-300 hover:text-white" href="#">
                        Testimonials
                      </a>
                    </li>
                    <li>
                      <a className="text-base text-gray-300 hover:text-white" href="#">
                        Customers
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a className="text-base text-gray-300 hover:text-white" href="#">
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a className="text-base text-gray-300 hover:text-white" href="#">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a className="text-base text-gray-300 hover:text-white" href="#">
                        Team
                      </a>
                    </li>
                    <li>
                      <a className="text-base text-gray-300 hover:text-white" href="#">
                        Parternships
                      </a>
                    </li>
                    <li>
                      <a className="text-base text-gray-300 hover:text-white" href="#">
                        Brand
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 xl:text-center">© 2024 No Clocks, LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

function FacebookIcon(props) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function GithubIcon(props) {
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
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}


function LinkedinIcon(props) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function TwitterIcon(props) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


function YoutubeIcon(props) {
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
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  )
}
