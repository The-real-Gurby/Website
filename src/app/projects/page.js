"use client";

export default function ProjectsPage() {
  // Example project list
  const projects = [
    {
      title: "Nothing yet",
      description: "Fun little creatures I modeled and printed on my 3D printer.",
      image: "/worm-project.jpg",
      link: "",
    },
    {
      title: "Been real lazy lately",
      description: "Custom pins I designed and laser cut.",
      image: "/",
      link: "",
    },
    {
      title: "Cool Website",
      description: "This portfolio itself! Built with Next.js and Tailwind.",
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
          Here are some of the things I've worked on!
        </p>
      </div>

      {/* Grid of projects */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition transform"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full font-medium transition"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
