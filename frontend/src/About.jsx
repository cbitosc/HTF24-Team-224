import React from "react";

const teamMembers = [
  {
    name: "Rishiktej Reddy",
    title: "Full Stack Developer",
    description:
      "Reddy leads our digital strategy with a focus on innovative and impactful online solutions.",
    image: "/blogos/Rishi.jpg",
    Instagram: "https://www.instagram.com/rishiktejreddy312/",
    linkedin: "https://www.linkedin.com/in/rishiktej-reddy-771574227/",
  },
  {
    name: "Snuhith Bobbala",
    title: "Lead Developer",
    description:
      "Snuhith ensures all technical aspects are up to standard, pushing the boundaries of web development.",
    image: "/blogos/Snuhith.png",
    Instagram: "https://www.instagram.com/snuhith._b/",
    linkedin: "https://www.linkedin.com/in/snuhith-reddy-032a8326a/",
  },
  {
    name: "Talakanti Sai Pranav",
    title: "Frontend Developer",
    description:
      "Sai oversees all creative aspects, ensuring our projects are both visually stunning and functional.",
    image: "/blogos/Sai.jpg",
    Instagram: "https://www.instagram.com/talakantireddy/",
    linkedin: "https://www.linkedin.com/in/talakanti-sai-pranav-99b52326b/",
  },
  {
    name: "Palle Siddeshwar Goud",
    title: "Backend Developer",
    description:
      "Siddu focuses on building robust, scalable, and secure server-side applications, integrating databases, APIs, and business logic",
    image: "/blogos/Sidhu.jpg",
    Instagram: "https://www.instagram.com/siddeshwar.07/",
    linkedin: "https://www.linkedin.com/in/siddeshwar-goud-palle-70800025b/",
  },
  {
    name: "Akhil Kumar Narayanam",
    title: "Backend Developer",
    description:
      "Akhil specializes in creating efficient, secure, and scalable server-side systems, expertly handling databases, APIs, and core application logic",
    image: "/blogos/Akhil.png",
    Instagram: "https://www.instagram.com/akhil_kumar.n/",
    linkedin: "https://www.linkedin.com/in/akhil-kumar-narayanam-8a7a9026a/",
  },
];

function TeamMember({ member }) {
  return (
    <div className="flex flex-col md:flex-row items-center p-8 bg-white shadow-lg rounded-lg mb-8 max-w-4xl mx-5 lg:mx-auto hover:scale-110 transition duration-500">
      <img
        src={member.image}
        alt={member.name}
        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mb-4 md:mb-0 md:mr-8"
      />
      <div className="text-center md:text-left">
        <h2 className="text-xl font-semibold text-gray-800 uppercase">
          {member.name}
        </h2>
        <h3 className="text-sm text-gray-600">{member.title}</h3>
        <p className="text-gray-700 mt-4">{member.description}</p>
        <div className="flex justify-center md:justify-start space-x-4 mt-4">
          <a
            href={member.Instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            Instagram
          </a>
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Meet The Team
      </h1>
      {teamMembers.map((member, index) => (
        <TeamMember key={index} member={member} />
      ))}
    </div>
  );
}

export default About;
