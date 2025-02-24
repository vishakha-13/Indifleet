import { useState, useEffect } from 'react';
import './style.css';  // Import custom CSS for the scrollbar

function SideBar({ trucks, filter = 'All Shipping' }) {  // Added default value for filter
    const [selectedTruck, setSelectedTruck] = useState(null);

    // Set the first truck as selected by default
    useEffect(() => {
        if (trucks?.length > 0) {  // Added optional chaining
            setSelectedTruck(trucks[0].id);
        }
    }, [trucks]);

    // Guard clause for when trucks is undefined or empty
    if (!trucks || trucks.length === 0) {
        return (
            <div className="h-[calc(100vh)] w-[20vw] shadow-xl mt-1 flex items-center justify-center">
                <p className="text-gray-500">No trucks available</p>
            </div>
        );
    }

    const filteredTrucks = trucks.filter((truck) => 
        filter === 'All Shipping' || truck.status === filter
    );

    return (
        <div className="h-[calc(100vh)] w-[20vw] shadow-xl mt-1">
            {/* Scrollable Truck List */}
            <div className="truck-list overflow-y-auto h-[calc(100%-160px)] p-2">
                {filteredTrucks.map((truck) => (
                    <div
                        key={truck.id}
                        onClick={() => setSelectedTruck(truck.id)}
                        className={`
                            cursor-pointer p-4 mb-4 rounded-md shadow-md 
                            transition-all duration-200 hover:shadow-lg
                            ${selectedTruck === truck.id 
                                ? 'bg-[#020073] text-white' 
                                : 'bg-white text-black hover:bg-gray-50'
                            }
                        `}
                    >
                        <div className="flex items-center gap-4">
                            {/* Truck Image with error handling */}
                            <div className="w-10 h-10 flex-shrink-0">
                                <img
                                    src={truck.image}
                                    alt={`Truck ${truck.number}`}
                                    className="w-full h-full object-cover rounded-md"
                                    onError={(e) => {
                                        e.target.src = '/placeholder-truck.png';  // Replace with your placeholder image
                                        e.target.onerror = null;  // Prevent infinite loop
                                    }}
                                />
                            </div>
                            
                            {/* Truck Details */}
                            <div className="flex flex-grow justify-between items-start">
                                <div>
                                    <p className="font-bold text-xs mb-1">{truck.number}</p>
                                    <p className="text-xs">{truck.driver}</p>
                                </div>
                                
                                {/* Status Badge */}
                                <div className="ml-2">
                                    <span className={`
                                        px-2 py-1 rounded-full text-xs font-semibold
                                        ${truck.status === 'In Transit' 
                                            ? 'bg-yellow-100 text-yellow-800' 
                                            : 'bg-green-100 text-green-800'
                                        }
                                        ${selectedTruck === truck.id 
                                            ? truck.status === 'In Transit'
                                                ? 'bg-yellow-200 text-yellow-900'
                                                : 'bg-green-200 text-green-900'
                                            : ''
                                        }
                                    `}>
                                        {truck.status}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SideBar;