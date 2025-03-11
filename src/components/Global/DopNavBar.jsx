import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Assets
import logo from "/logo1.svg";
import settingIcon from "/settings-icon.svg";
import contactIcon from "/contact-icon.svg";
import profileIcon from "/profile-icon.svg";

function DopNav() {
  const navigate = useNavigate();
  const location = useLocation();

  // Define options and route map at the top level
  const options = ['Truck', 'Third Party Logistics', 'Drivers', 'Warehouse', 'Inbox'];

  const routeMap = {
    'Truck': '/truck',
    'Third Party Logistics': '/third-party-logistics',
    'Drivers': '/drivers',
    'Warehouse': '/warehouse',
    'Inbox': '/inbox'
  };

  // Get current active option based on path
  const getCurrentOption = () => {
    const path = location.pathname.split('/').pop();
    const currentOption = options.find(option =>
      routeMap[option].substring(1) === path
    );
    return currentOption || options[0];
  };

  const [activeOption, setActiveOption] = useState(getCurrentOption());

  const handleOptionClick = (option) => {
    setActiveOption(option);
    const path = `/company${routeMap[option]}`;
    navigate(path);
  };

  return (
    <nav className="flex items-center justify-between px-6 py-2 bg-white shadow-md ">
      
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-12 bg-red" onClick={() => navigate('/')} />

        {/* Navigation Options */}
        <div className="flex items-center justify-center gap-5">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleOptionClick(option)}
              className={`font-semibold text-sm px-8 border-2 border-[#020073] shadow-xl py-2 rounded-xl cursor-pointer transition duration-300 ${activeOption === option
                  ? 'bg-[#020073] text-white'
                  : 'bg-white text-black'
                }`}
            >
              {option}
            </button>
          ))}
        </div>
      

      {/* Right side icons */}
      <div className="flex items-center space-x-4">
        <img src={settingIcon} alt="Settings" className="h-6 w-6 cursor-pointer" />
        <img src={contactIcon} alt="Contact" className="h-6 w-6 cursor-pointer" />
        <img src={profileIcon} alt="Profile" className="h-6 w-6 cursor-pointer" />
      </div>
    </nav>
  );
}

export default DopNav;