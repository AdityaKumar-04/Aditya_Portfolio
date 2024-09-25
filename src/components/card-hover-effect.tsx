'use client'
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect';

export const projects = [
  {
    title: "React",
    description:
      "A JavaScript library for building user interfaces, commonly used for developing web applications.",
    link: "https://reactjs.org",
  },
  {
    title: "Bootstrap",
    description:
      "A popular open-source CSS framework used for building responsive and mobile-first websites.",
    link: "https://getbootstrap.com",
  },
  {
    title: "HTML, CSS, JS",
    description:
      "The fundamental technologies for building and styling web pages: HTML structures content, CSS styles it, and JavaScript adds interactivity.",
    link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
  },
  {
    title: "Next.js",
    description:
      "A React framework that enables server-side rendering and static site generation for building high-performance applications.",
    link: "https://nextjs.org",
  },
  {
    title: "Shopify",
    description:
      "A leading e-commerce platform that allows businesses to create online stores and manage their sales.",
    link: "https://shopify.com",
  },
  {
    title: "GitHub",
    description:
      "A platform for version control and collaboration that lets you and others work together on projects from anywhere.",
    link: "https://github.com",
  },
  {
    title: "Node.js",
    description:
      "A JavaScript runtime built on Chrome's V8 engine, used for building scalable network applications.",
    link: "https://nodejs.org",
  },
  {
    title: "MySQL",
    description:
      "An open-source relational database management system, widely used for storing and managing data.",
    link: "https://mysql.com",
  },
  {
    title: "MongoDB",
    description:
      "A NoSQL database program that uses JSON-like documents with optional schemas, designed for scalability and flexibility.",
    link: "https://mongodb.com",
  },
];
export default function Card_hover_effect() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  )
}
