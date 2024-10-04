import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/80">
        Collaborators & Event Partners
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className={`flex items-center justify-center flex-1 h-[5.5rem] bg-[#B7E0FF]/50 p-4 border-t-[1px] border-b-[1px] border-black ${
              index === 0 ? "rounded-l-xl border-l-[1px]" : ""
            } ${
              index === companyLogos.length - 1
                ? "rounded-r-xl border-r-[1px]"
                : ""
            }`}
            key={index}
          >
            <img src={logo} width={84} height={18} alt={`Logo ${index}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
