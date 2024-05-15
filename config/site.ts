export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "No Clocks, LLC",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Services",
      href: "/services",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "About",
      href: "/about",
    }
  ],
  links: {
    twitter: "https://twitter.com/noclocksdev",
    github: "https://github.com/noclocks",
    docs: "https://docs.noclocks.dev",
    youtube: "https://youtube.com/noclocks",
    linkedin: "https://linkedin.com/company/noclocks",
    facebook: "https://facebook.com/noclocks",
  },
}
