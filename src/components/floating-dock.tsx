import React from 'react'
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconBrandInstagram,
  IconBrandLinkedin
} from "@tabler/icons-react";
import Image from "next/image";
export default function Footer() {
  const links = [
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/adityaa.kumar04/?hl=en",
    },

    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: `https://www.linkedin.com/in/aditya-kumar-88bb97260/
`,
    },
    {
      title: "Components",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Changelog",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <div className='derk:w-full text-white bg-[#000]'>
      <div className='flex justify-center items-center flex-col py-9'>
        <h1 className='text-5xl'>FullStack Developer</h1>
        <p className="w-[25rem] text-center pt-5 text-sm break-words sm:w-[65rem] md:text-xl">As a full-stack developer, I excel at creating comprehensive
          solutions that integrate front-end and back-end technologies seamlessly. By leveraging
          modern frameworks like React and Node.js, I build scalable and efficient
          applications that meet diverse client needs. My expertise in both front-end
          and back-end development ensures that each project benefits from a cohesive,
          high-quality, and responsive user experience. This holistic approach not only
          enhances functionality but also delivers exceptional results, ensuring that every
          aspect of your application performs optimally.</p>
      </div>
      <div className="flex justify-center items-center">
        <FloatingDock
          // mobileClassName="translate-y-20 " // only for demo, remove for production
          items={links}

        />
      </div>

    </div>
  )
}
