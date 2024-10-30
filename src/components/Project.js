import React, { useState, useEffect } from "react";
import sanityClient from "../client"; // Ensure this is properly configured

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
          title,
          date,
          place,
          description, 
          projectType,
          link,
          tags
        }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="min-h-screen p-12 bg-gradient-to-b from-purple-100 to-slate-300">
      <section className="container mx-auto">
        <h1 className="flex justify-center text-5xl font-bold tracking-wide text-gray-800">
          My Projects
        </h1>
        <h2 className="flex justify-center mb-12 text-lg italic font-light text-gray-600">
          Explore my work and contributions
        </h2>
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projectData &&
            projectData.map((project, index) => (
              <article
                key={index}
                className="relative max-w-md p-8 mx-auto transition duration-300 transform rounded-lg shadow-xl bg-gray-50 hover:scale-105"
              >
                <h3 className="mb-4 text-2xl font-semibold text-gray-900 transition duration-300 hover:text-indigo-600">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="space-y-2 text-sm text-gray-500">
                  <span className="block">
                    <strong className="font-bold">Finished on: </strong>
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span className="block">
                    <strong className="font-bold">Company: </strong>
                    {project.place}
                  </span>
                  <span className="block">
                    <strong className="font-bold">Type: </strong>
                    {project.projectType}
                  </span>
                  <p className="mt-4 leading-relaxed text-gray-700">
                    {project.description}
                  </p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 mt-6 text-sm font-bold tracking-wide text-white uppercase transition duration-300 bg-indigo-600 rounded-lg hover:bg-indigo-500"
                >
                  View Project{" "}
                  <span role="img" aria-label="right pointer">
                    👉
                  </span>
                </a>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}
