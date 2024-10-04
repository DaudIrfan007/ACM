import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import FontAwesome styles
import Hanan from "../assets/ACM/Hanan.jpeg";
import Shireen from "../assets/ACM/Shireen.jpg";
import Salar from "../assets/ACM/Salar.jpg";
import Sir from "../assets/ACM/Sir.jfif";
import Mam from "../assets/ACM/mam.jfif";

const ProfileCard = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // State to track hovered index
  const [showMessage, setShowMessage] = useState(true); // State to track if we should show hover message

  const teamMembers = [
    {
      name: "Mohsin Sami",
      title: "Patron",
      image: Sir,
      message:
        "Everything you've ever wanted is sitting on the other side of fear.",
    },
    {
      name: "Ramsha Saeed",
      title: "Co-Patron",
      image: Mam,
      message:
        "You may be disappointed if you fail, but you are doomed if you don't try.",
    },
    {
      name: "Abdul Hanan Khan",
      title: "Vice President",
      image: Hanan,
      message:
        "The only person you are destined to become is the person you decide to be.",
    },
    {
      name: "Muhmmad Salar Haris",
      title: "President",
      image: Salar,
      message: "Don't compare.",
    },
    {
      name: "Shireen Iftikhar",
      title: "Vice President",
      image: Shireen,
      message: "Find your passion and live it.",
    },
  ];

  // Handle screen size changes to show/hide hover message
  useEffect(() => {
    const handleResize = () => {
      setShowMessage(window.innerWidth > 600); // Hide hover message if screen width is <= 600px
    };

    window.addEventListener("resize", handleResize);

    // Check screen size on initial render
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="ourteam">
      <div className="flex flex-col items-center text-center mb-12 lg:border-t-[1px] border-black">
        <h1 className="text-n-1 lg:text-[60px] mb-10 lg:mb-12 text-[40px] mt-[10vh]">
          Meet Our Team
        </h1>

        {/* 2 team members on top */}
        <div className="flex justify-center w-full ">
          {teamMembers.slice(0, 2).map((member, index) => (
            <div
              key={index}
              className="flex-col p-4 lg:mx-12 bg-inherit lg:w-[35vh] lg:h-[35vh] w-[50vh] h-[20vh] flex justify-center items-center "
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={member.image}
                alt={member.name}
                className="lg:w-[18vh] lg:h-[18vh] h-[8vh] w-[8vh] rounded-full object-cover transition duration-200 hover:scale-110"
              />
              <div className="text-n-1 lg:text-lg text-lg font-bold mt-2">
                {member.name}
              </div>
              <div className="text-n-1 text-sm ">{member.title}</div>

              {/* Hover message only shown if screen is large enough */}
              {hoveredIndex === index && showMessage && (
                <div className="absolute w-70 p-2 mt-20 bg-blue-400 border rounded shadow-lg border-black ">
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

        {/* 3 team members on the bottom */}
        <div className="flex justify-center w-full ">
          {teamMembers.slice(2, 5).map((member, index) => (
            <div
              key={index}
              className="flex-col p-4 mx:2 lg:mx-12 bg-inherit w-[33vh] h-[20vh] flex justify-center items-center"
              onMouseEnter={() => setHoveredIndex(index + 2)} // Adjust for the bottom row
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={member.image}
                alt={member.name}
                className="lg:w-[18vh] lg:h-[18vh] h-[7vh] w-[7vh] rounded-full object-cover transition duration-200 hover:scale-110"
              />
              <div className="text-n-1 lg:text-lg text-sm font-bold mt-2">
                {member.name}
              </div>
              <div className="text-n-1 text-[13px] lg:text-large">
                {member.title}
              </div>

              {hoveredIndex === index + 2 && showMessage && (
                <div className="absolute w-70 p-2 mt-20 bg-[#8FD14F] border rounded shadow-lg">
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
