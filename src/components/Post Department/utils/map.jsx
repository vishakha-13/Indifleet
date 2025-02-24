import { useState } from 'react';

function MapDashboard({ trucks }) {
  const selectedTruck = trucks[0]; // Default to the first truck
  const [zoom, setZoom] = useState(15); // Initial zoom level

  // Adjust the zoom level in the map link
  const mapUrl = `https://www.google.com/maps?q=${selectedTruck.location.lat},${selectedTruck.location.lng}&z=${zoom}&output=embed&zoom=${zoom}`;

  return (
    <div className="relative w-[55vw] h-[80vh] rounded-lg overflow-hidden ml-4 ">
      {/* Google Map Iframe */}
      <iframe
        title="Google Map"
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>

      {/* Zoom Controls */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        <button
          className="bg-white p-2 shadow-md rounded-md"
          onClick={() => setZoom((prevZoom) => Math.min(prevZoom + 1, 21))} // Max zoom level of 21
        >
          +
        </button>
        <button
          className="bg-white p-2 shadow-md rounded-md"
          onClick={() => setZoom((prevZoom) => Math.max(prevZoom - 1, 1))} // Min zoom level of 1
        >
          -
        </button>
      </div>

      {/* Data Overlays at the Bottom */}
      <div className="absolute bottom-4 left-0 w-full flex justify-around p-2 shadow-md rounded-lg">
        <div className="text-center bg-white shadow-md p-2 rounded-md text-sm">
          <p className="font-semibold">Total Distance</p>
          <p className='flex items-end ml-2'><p className='text-lg font-bold'>{selectedTruck.distanceCovered}</p> /km</p>
        </div>
        <div className="text-center bg-white shadow-md p-2 rounded-md text-sm">
          <p className="font-semibold">Average Speed</p>
          <p className='flex items-end ml-2'><p className='text-lg font-bold'> {selectedTruck.avgSpeed}</p> km/h</p>
        </div>
        <div className="text-center bg-white shadow-md p-2 rounded-md text-sm">
          <p className="font-semibold">Time to Destination</p>
          <p className='flex items-end ml-2'><p className='text-lg font-bold'>{selectedTruck.timeToDestination}</p>min</p>
        </div>
      </div>
    </div>
  );
}

export default MapDashboard;
