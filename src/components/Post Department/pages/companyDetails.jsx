import Map from "../utils/map.jsx"
import TruckLoad from "../utils/loadDetails.jsx"

import Graph from "../utils/graphComp.jsx"

import SideBar from "../../Global/sideBar.jsx"
import DeliveryStatus from "../utils/deliverStatus.jsx"
import CompanyCard from "../utils/companyCard.jsx"
import TruckList from "../utils/truckList.jsx"
import CompanyHistory from "../utils/companyHistory.jsx"





function TruckDetails() {

    const companyDetails = {
        companyName: 'Tech Solutions Pvt. Ltd.',
        companyEmail: 'contact@techsolutions.com',
        companyNumber: '9876543210',
        companyAddress: '123 Innovation Lane, Silicon Valley, CA',
        companyImage: 'path-to-company-logo', // Optional; can use null or an empty string if no custom image is provided
        companyStatus: 'Active', // Example status
        yearsInOperation: 25,
    };


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

    const orderDetails = {
        orderId: '12345ABC',
        pickDate: '2024-09-15',
        dropOffEstimation: '2024-09-18',
        insuranceStatus: 'Active',
        pickUpLocation: '123 Main St, Springfield',
        dropOffLocation: '456 Elm St, Shelbyville'
    }


    const companies = [
        {
            id: 1,
            driver: "TechSoft Solutions",
            number: "TS123456",
            status: "Active",
            image: ""
        },
        {
            id: 2,
            driver: "BrightSpark Technologies",
            number: "BST987654",
            status: "Inactive",
            image: ""
        },
        {
            id: 3,
            driver: "InnoVentures LLC",
            number: "IV567891",
            status: "Pending",
            image: ""
        },
    ];



    const trucks = [
        { id: 1, number: 'HP06B4587', driver: 'Shyan Lal', status: 'In Transit', image: "" },
        { id: 2, number: 'PB08N1234', driver: 'Raj Kumar', status: 'Delivered', image: "" },
        { id: 3, number: 'DL05G6789', driver: 'Mohit Singh', status: 'In Transit', image: "" },
        { id: 4, number: 'RJ10C7890', driver: 'Suresh Mehta', status: 'Delivered', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2lQnH22TeMP8lVoZ8RIvXmV0pnQJ9PtfEXw&usqp=CAU" },
        { id: 1, number: 'HP06B4587', driver: 'Shyan Lal', status: 'In Transit', image: "" },
        { id: 2, number: 'PB08N1234', driver: 'Raj Kumar', status: 'Delivered', image: "" },
        { id: 3, number: 'DL05G6789', driver: 'Mohit Singh', status: 'In Transit', image: "" },

    ];

    const orders =[
        {
          "orderNumber": "A1234567890546",
          "deliveryDate": "14-03-24",
          "status": "Successfully Delivered"
        },
        {
          "orderNumber": "B463294634325",
          "deliveryDate": "12-03-24",
          "status": "Successfully Delivered"
        },
        {
          "orderNumber": "G1234542355366",
          "deliveryDate": "10-03-24",
          "status": "Successfully Delivered"
        },
        {
          "orderNumber": "D12344354654465",
          "deliveryDate": "10-03-24",
          "status": "Successfully Delivered"
        },
        {
          "orderNumber": "L123451234556765",
          "deliveryDate": "09-03-24",
          "status": "Successfully Delivered"
        },
        {
          "orderNumber": "Z54643567545675",
          "deliveryDate": "03-03-24",
          "status": "Successfully Delivered"
        },
        {
          "orderNumber": "T123455432465555",
          "deliveryDate": "02-03-24",
          "status": "Successfully Delivered"
        },
        {
          "orderNumber": "Y145637578762345",
          "deliveryDate": "02-03-24",
          "status": "Successfully Delivered"
        },
        {
          "orderNumber": "N/A",  // No order number provided for this entry
          "deliveryDate": "01-03-24",
          "status": "Successfully Delivered"
        }
      ];
      


    return (
        <>

            <div className='grid grid-cols-[20%_80%]'>
                <SideBar trucks={companies} />

                <div className=" flex">
                    <div className=" gap-4">
                        <DeliveryStatus currentStage="shipped" orderDetails={orderDetails} />


                        <div className="w-[80%] flex">
                            <div className="w-[80%]">
                                <div className="w-full">
                                    <CompanyCard companyDetails={companyDetails} />
                                </div>

                                <div className="w-full">
                                    <Graph />
                                </div>
                            </div>

                            <div className="ml-8 mt-4 h-full w-[20%]">
                                <TruckList trucks={trucks} />
                            </div>

                        </div>
                    </div>

                    <div>


                        <div>
                            <TruckLoad loadPercentage={truckLoadPercentage} truckDetails={truckDetails} />
                        </div>



                        <div>
                            <CompanyHistory orders={orders}/>
                        </div>


                    </div>

                </div>

            </div>
        </>
    )
}



export default TruckDetails