import React from 'react';
import Heading from "./Heading";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodepen, faInstagram, faDribbble, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Card = ({ name, bgImage, hoverBgImage }) => {
  return (
    <div className="relative w-[300px] h-[379px] bg-black rounded-lg shadow-[0_70px_63px_-60px_rgba(0,0,0,1)] transition-all duration-800 overflow-hidden group">
      <div className={`absolute inset-0 rounded-lg transition-all duration-1000 border-2 border-transparent group-hover:border-white`}>
        <h2 className="font-sans text-white text-left mt-5 ml-5 opacity-0 transition-opacity duration-1000 group-hover:opacity-100">{name}</h2>
        <div className="absolute top-[226px] left-[1.5rem] transform -translate-x-1/2 flex flex-col items-left justify-around h-[130px] opacity-0 transition-opacity duration-1000 group-hover:opacity-100">
          <FontAwesomeIcon icon={faCodepen} className="text-white" />
          <FontAwesomeIcon icon={faInstagram} className="text-white" />
          <FontAwesomeIcon icon={faDribbble} className="text-white" />
          <FontAwesomeIcon icon={faTwitter} className="text-white" />
          <FontAwesomeIcon icon={faFacebook} className="text-white" />
        </div>
      </div>
      <style jsx>{`
        .group:hover {
          background-image: url(${hoverBgImage});
          background-position: left center;
          background-size: 600px;
        }
        .group {
          background-image: url(${bgImage});
          background-position: center center;
          background-size: 300px;
        }
      `}</style>
    </div>
  );
};

const App = () => {
  return (
    <>
    <section id='ourteam'>
   <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Meet Our Team "
        />
    <div className="container mx-auto h-[50vh] max-w-[1280px] flex flex-col items-center justify-center space-y-4">
    <div className="flex justify-around space-x-4 md:flex:flex-col">
          <Card
            name="Sir Mohsin"
            bgImage="https://ucp.edu.pk/wp-content/uploads/2017/04/Mr.-Mohsin-Sami.jpg"
            hoverBgImage="https://ucp.edu.pk/wp-content/uploads/2017/04/Mr.-Mohsin-Sami.jpg"
          />
          <Card
            name="Ben Stiller"
            bgImage="https://i.pinimg.com/originals/28/d2/e6/28d2e684e7859a0dd17fbd0cea00f8a9.jpg"
            hoverBgImage="https://i.pinimg.com/originals/28/d2/e6/28d2e684e7859a0dd17fbd0cea00f8a9.jpg"
          />
          <Card
            name="Patrick Stewart"
            bgImage="https://i.pinimg.com/originals/ee/85/08/ee850842e68cfcf6e3943c048f45c6d1.jpg"
            hoverBgImage="https://i.pinimg.com/originals/ee/85/08/ee850842e68cfcf6e3943c048f45c6d1.jpg"
          />
        </div>
        {/* <div className="flex justify-around space-x-4">
          <Card
            name="Sir Mohsin"
            bgImage="https://ucp.edu.pk/wp-content/uploads/2017/04/Mr.-Mohsin-Sami.jpg"
            hoverBgImage="https://ucp.edu.pk/wp-content/uploads/2017/04/Mr.-Mohsin-Sami.jpg"
          />
          <Card
            name="Ben Stiller"
            bgImage="https://i.pinimg.com/originals/28/d2/e6/28d2e684e7859a0dd17fbd0cea00f8a9.jpg"
            hoverBgImage="https://i.pinimg.com/originals/28/d2/e6/28d2e684e7859a0dd17fbd0cea00f8a9.jpg"
          />
          <Card
            name="Patrick Stewart"
            bgImage="https://i.pinimg.com/originals/ee/85/08/ee850842e68cfcf6e3943c048f45c6d1.jpg"
            hoverBgImage="https://i.pinimg.com/originals/ee/85/08/ee850842e68cfcf6e3943c048f45c6d1.jpg"
          />
        </div> */}
      
    </div>
    </section>
    </>
  );
};

export default App;
