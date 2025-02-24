import Map from "../../Post Department/utils/map.jsx"
import TruckLoad from "../../Post Department/utils/loadDetails.jsx"
import Location from "../../Post Department/utils/loaction.jsx"
import Graph from "../../Post Department/utils/graphComp.jsx"
import DriverCard from '../../Post Department/utils/driverCard.jsx'
import SideBar from "../../Global/sideBar.jsx"
// import QR from "../../../assets/QR.svg"

import { useNavigate } from "react-router-dom"





function TruckDetails() {
    const navigate = useNavigate()

    const truckData = [
        {
            id: 1,
            number: "DL-01-AA-1234",
            driver: "Rajesh Kumar",
            status: "In Transit",
            location: { lat: 28.7041, lng: 77.1025 },  // Example coordinates for Delhi
            distanceCovered: 150,
            avgSpeed: 60,
            timeToDestination: "45"
        }
    ];

    const truckLoadPercentage = 80;
    const truckDetails = {
        number: 'MH12 AB1234',
        deliveryStatus: 'In Transit',
        maxLoad: 10000, // Max load in kg
        currentLoad: 8600,
        maintenance: "12-Dec-03", // Current load in kg
    };


    const sampleCheckpoints = [
        { name: 'Checkpoint 1', position: '5%' },
        { name: 'Checkpoint 2', position: '25%' },
        { name: 'Checkpoint 3', position: '45%' },
        { name: 'Checkpoint 4', position: '65%' },
        { name: 'Checkpoint 5', position: '85%' },
    ];



    const dates = [
        { x: new Date('2024-01-01').getTime(), y: 1000000 },
        { x: new Date('2024-02-01').getTime(), y: 1500000 },
        { x: new Date('2024-03-01').getTime(), y: 1200000 },
        // Add more data points as needed
    ];

    const trucks = [
        { id: 1, number: 'HP06B4587', driver: 'Shyan Lal', status: 'In Transit', image: "" },
        { id: 2, number: 'PB08N1234', driver: 'Raj Kumar', status: 'Delivered', image: "" },
        { id: 3, number: 'DL05G6789', driver: 'Mohit Singh', status: 'In Transit', image:"" },
        { id: 4, number: 'RJ10C7890', driver: 'Suresh Mehta', status: 'Delivered', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2lQnH22TeMP8lVoZ8RIvXmV0pnQJ9PtfEXw&usqp=CAU" },
      ];


    return (
        <>

            <div className='grid grid-cols-[20%_80%]'>
                <SideBar trucks={trucks} />

                <div className="">
                    <div>
                        <div className="flex gap-4">
                            <Map trucks={truckData} />
                            <div>
                                <TruckLoad loadPercentage={truckLoadPercentage} truckDetails={truckDetails} />
                                <div className="w-[20%]">
                                    <div className="bg-[#020073] mt-4 rounde-sm w-[18vw] h-[40vh] p-4 rounded-md">
                                        <p className="text-lg text-white font-semibold">Truck QR</p>
                                        <img src="" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="w-[70%]">
                                <div
                                 className="w-full"
                                 onClick={() => navigate('/driver-details')}
                                >
                                    <DriverCard />
                                </div>

                                <div className="w-full">
                                    <Graph />
                                </div>

                            </div>


                            <div className="ml-8 mt-4 pl-8">
                                <Location checkpoints={sampleCheckpoints} />
                            </div>
                        </div>
                    </div>





                </div>

            </div>
            </>
            )
}



            export default TruckDetails