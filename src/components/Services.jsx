import React, { useState } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import FontAwesome styles
import Hanan from "../assets/ACM/Hanan.jpeg";
import Shireen from "../assets/ACM/Shireen.jpg";
import Salar from "../assets/ACM/Salar.jpg";
import Sir from "../assets/ACM/Sir.jfif";
import Mam from "../assets/ACM/mam.jfif";

const ProfileCard = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // State to track hovered index

  const teamMembers = [
    {
      name: "Mohsin Sami",
      title: "Patron",
      image: Sir,
      message: "This is Mohsin Sami, the Patron of our team.", // Add a message for hover
    },
    {
      name: "Ramsha Saeed",
      title: "Co-Patron",
      image: Mam,
      message: "This is Ramsha Saeed, the Co-Patron of our team.", // Add a message for hover
    },
    {
      name: "Abdul Hanan Khan",
      title: "Vice President",
      image: Hanan,
      message: "This is Abdul Hanan Khan, our Vice President.", // Add a message for hover
    },
    {
      name: "Muhmmad Salar Haris ",
      title: "President",
      image: Salar,
      message: "This is Muhmmad Salar Haris, our President.", // Add a message for hover
    },
    {
      name: "Shireen Iftikhar",
      title: "Vice President",
      image: Shireen,
      message: "This is Shireen Iftikhar, our Vice President.", // Add a message for hover
    },
  ];

  return (
    <section id="ourteam">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-n-1 lg:text-[60px] mb-8 text-[40px] mt-[10vh]">
          Meet Our Team
        </h1>

        {/* 2 team members on top */}
        <div className="flex justify-center w-full">
          {teamMembers.slice(0, 2).map((member, index) => (
            <div
              key={index}
              className="flex-col p-4 mx-12 bg-inherit w-[35vh] h-[35vh] flex justify-center items-center"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={member.image}
                alt={member.name}
                className="lg:w-[18vh] lg:h-[18vh] h-[8vh] w-[8vh] rounded-full object-cover transition duration-200 hover:scale-110"
              />
              <div className="text-n-1 lg:text-lg text-sm font-bold mt-2">
                {member.name}
              </div>
              <div className="text-n-1">{member.title}</div>

              {/* Message box shown on hover */}
              {hoveredIndex === index && (
                <div className="absolute w-70 p-2 mt-2 bg-blue-400 border rounded shadow-lg">
                  <div className="flex items-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-10 h-10 rounded-full mr-2"
                    />
                    <span>{member.message}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* ---------------------------------------------------------------------------------------------------------------- */}
        {/* 3 team members on the bottom */}
        <div className="flex justify-center w-full">
          {teamMembers.slice(2, 5).map((member, index) => (
            <div
              key={index}
              className="flex-col p-4 mx-12 bg-inherit w-[35vh] h-[35vh] flex justify-center items-center"
              onMouseEnter={() => setHoveredIndex(index + 2)} // Adjust for the bottom row
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-[18vh] h-[18vh] rounded-full object-cover transition duration-200 hover:scale-110"
              />
              <div className="text-n-1 text-lg font-bold mt-2">
                {member.name}
              </div>
              <div className="text-n-1">{member.title}</div>

              {/* Message box shown on hover */}
              {hoveredIndex === index + 2 && ( // Adjust for the bottom row
                <div className="absolute w-70 p-2 mx-2 bg-blue-400 border rounded shadow-lg">
                  <div className="flex items-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-10 h-10 rounded-full mr-2 object-cover"
                    />
                    <span>{member.message}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
