"use client";

import Image from "next/image";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Nothing yet",
      description: ".",
      image: "",
      link: "#",
    },
    {
      title: "Been real lazy lately",
      description: "",
      image: "/placeholder.jpg", // replace with a real image
      link: "#",
    },
    {
      title: "maybe ill get around to it",
      description: "",
      image: "/website-project.jpg",
      link: "",
    },
  ];

  return (
    <main className="bg-black min-h-screen text-white px-6 py-16">
      {/* Page header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold">My Projects</h1>
        <p className="mt-4 text-lg text-gray-300">
          Here are some of the things I&apos;ve worked on!
        </p>
      </div>

      {/* Grid of projects */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
          >
            {project.image && (
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-t-2xl"
                  priority={true} // optional for faster LCP
                />
              </div>
            )}
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-400 mb-4">{project.description}</p>
              {project.link && project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full font-medium transition"
                >
                  View Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
