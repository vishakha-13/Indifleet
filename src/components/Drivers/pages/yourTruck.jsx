import Map from "../../Post Department/utils/map.jsx"
import TruckLoad from "../../Post Department/utils/loadDetails.jsx"
// import QR from "../../../assets/QR.svg"





function TruckDetails() {

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

    const truckLoadPercentage = 92;
    const truckDetails = {
        number: 'MH12 AB1234',
        deliveryStatus: 'In Transit',
        maxLoad: 10000, // Max load in kg
        currentLoad: 8600,
        maintenance: "12-Dec-03", // Current load in kg
    };


    return (
        <>

            <div className=''>

                <div className="">
                    <div>
                        <div className="flex gap-4">
                            <Map trucks={truckData} />
                            <div>
                                <div>
                                    <div className="flex flex-col flex-wrap shadow-lg rounded-lg p-4 border border-gray-300 ">
                                        <p className="text-xl font-bold">Alerts</p>
                                        <div className="flex flex-col gap-2 mt-4">
                                            <div>Expected Delay due to Heavy Traffic..</div>
                                            <div className="text-orange-700 font-bold">Rerouting For a New Route</div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col shadow-lg flex-wrap rounded-lg p-4 border border-gray-300 mt-4">
                                        <p>Next Checkpoint: <span className="text-xl font-bold">Kota</span></p>
                                        <p>Expected Arrival: <span className="text-xl font-bold">8:00PM</span></p>
                                        <p>Amout to Offload : <span className="text-xl font-bold"> 435Kg</span></p>
                                        <p>Amount To Onload: <span className="text-xl font-bold">324Kg</span></p>
                                    </div>
                                </div>

                                {/* sos button */}
                                <button className="w-full mt-4 h-[15vh] text-[300%] text-white font-bold rounded-lg relative bg-transparent outline-none transition-all duration-250 shadow-2xl hover:brightness-110" style={{ padding: 0 }}>
                                    <span className="absolute top-0 left-0 w-full h-full rounded-lg bg-black opacity-25 transition-transform duration-600 transform translate-y-2 will-change-transform shadow"></span>
                                    <span className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-l from-[#da0032] to-[#e6406d]"></span>
                                    <span className="relative block px-8 py-4 rounded-lg text-white bg-[#FF0404] transform translate-y-[-4px] transition-transform duration-600 will-change-transform hover:translate-y-[-6px] active:translate-y-[-2px]">
                                        SOS
                                    </span>
                                </button>

                            </div>





                            <div>
                                <TruckLoad loadPercentage={truckLoadPercentage} truckDetails={truckDetails} />
                                <div className="w-[20%]">
                                    <div className="bg-[#020073] mt-4 rounde-sm w-[18vw] h-[40vh] p-4 rounded-md">
                                        <p className="text-lg text-white font-semibold">Truck QR</p>
                                        <img src="  `" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="w-[70%]">

                            </div>

                        </div>
                    </div>





                </div>

            </div>
        </>
    )
}



export default TruckDetails