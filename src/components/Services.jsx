import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import FontAwesome styles
import Hanan from "../assets/Hanan.jpeg"
import Shireen from "../assets/Shireen.jpg"
import Salar from "../assets/Salar.jpeg"
const ProfileCard = () => {
  // Define an array of team members
  const teamMembers = [
    {
      name: 'Abdul Hanan Khan',
      title: 'Vice President',
      image: Hanan,
    },
    {
      name: 'Muhmmad Salar Haris ',
      title: 'President',
      image: Salar,
    },
    {
      name: 'Shireen Iftikhar',
      title: 'Vice President',
      image: Shireen,
    },
  ];

  return (
    <div className='flex justify-around items-center text-center h-[50vh] flex-col'>
      <h1 className='text-n-1 text-[60px]'>Meet Our Team</h1>
      <div className='flex justify-center  w-full'>
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center p-4 mx-15 bg-inherit  w-[35vh] h-[35vh] flex justify-center items-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-[18vh] h-[18vh] rounded-full object-cover transition duration-200 hover:scale-110"
            />
            <div className="text-n-1 text-lg font-bold mt-2">{member.name}</div>
            <div className="text-n-1">{member.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
