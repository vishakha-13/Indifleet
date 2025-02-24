import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// assets
import logo from "../../assets/logo1.svg";
import settingIcon from "../../assets/settings-icon.svg";
import contactIcon from "../../assets/contact-icon.svg";
import profileIcon from "../../assets/profile-icon.svg";

function TopNav({ options = ['Your Truck', 'Sentiment Analysis'] }) {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Define a route map to associate options with paths
  const routeMap = {
    'Your Truck': '/driver/your-truck',
    'Sentiment Analysis': '/driver/analysis',
  };

  // Set initial active option based on current path
  const getCurrentOption = () => {
    const path = location.pathname;
    const option = options.find(opt => path.includes(routeMap[opt].split('/').pop()));
    return option || options[0];
  };

  const [activeOption, setActiveOption] = useState(getCurrentOption());

  const handleOptionClick = (option) => {
    setActiveOption(option);
    if (routeMap[option]) {
      navigate(routeMap[option]);
    }
  };

  return (
    <div className="grid grid-cols-[20%_60%_20%] px-2">
      <div className="flex justify-center items-center">
        <img src={logo} alt="logo" className="w-[7rem] mt-[2px]" onClick={() => navigate('/')} />
      </div>

      {/* Options */}
      <ul className="flex items-center justify-center gap-5">
        {options.map((option, index) => (
          <li
            key={index}
            className={`font-semibold text-sm px-8 border-2 border-[#020073] shadow-xl py-2 rounded-xl cursor-pointer transition duration-300 ${
              activeOption === option 
                ? 'bg-[#020073] text-white' 
                : 'bg-white text-black'
            }`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-center gap-5">
        <img src={settingIcon} alt="settings" className="w-6" />
        <img src={contactIcon} alt="contact" className="w-6" />
        <div className="rounded-full w-[3rem] h-[3rem]">
          <img src={profileIcon} alt="profile" className="w-[4rem]" />
        </div>
      </div>
    </div>
  );
}

export default TopNav;