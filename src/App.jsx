
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Landing from "./layouts/Landing.jsx";


import SignInTD from './components/auth/truckerDrivers/SignInTD';
import SignUpTD from './components/auth/truckerDrivers/SignUpTD';
import OtpPageTD from './components/auth/truckerDrivers/OtpPageTD';
import SignUpDetailsTD from './components/auth/truckerDrivers/SignUpDetailsTD';
import SignUpDetailsP from './components/auth/postal/SignUpDetailsP';
import SignUpP from './components/auth/postal/SignUpP';
import SignInP from './components/auth/postal/SignInP';
import SignUpDetailsB from './components/auth/business/SignUpDetailsB';
import SignUpB from './components/auth/business/SignUpB';
import SignInB from './components/auth/business/SignInB';
import SignInCard from './components/auth/SignCard/SignInCard';
import SignUpCard from './components/auth/SignCard/SignUpCard';
import MISReport from './components/misReport/misReports';

import TruckPage from './components/Post Department/pages/truckDetails.jsx';
import DriverList from "./components/Post Department/pages/driverList.jsx";
import LogisticsPage from './components/Post Department/pages/companyDetails.jsx';
import InboxPage from "./components/Post Department/pages/inboxPage.jsx";
import Warehouse from "./components/Post Department/pages/wareHouse.jsx";
import Soon from "./components/comingSoon.jsx";

import TruckReservation from "./components/Companies/pages/truckReservation.jsx";
import YourTruck from "./components/Drivers/pages/yourTruck.jsx";
import Analysis from "./components/Drivers/pages/surveryForm.jsx";


import DopLayouts from './layouts/DopLayouts.jsx';
import DriverLayout from "./layouts/DriverLayout.jsx"

import 'leaflet/dist/leaflet.css';
import './index.css';

function App() {
 

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing/>
    },
    // Auth routes
    {
      path: "/auth",
      children: [
        {
          path: "signincard",
          element: <SignInCard />
        },
        {
          path: "signupcard",
          element: <SignUpCard />
        },
        {
          path: "signint-driver",
          element: <SignInTD />
        },
        {
          path: "signupt-driver",
          element: <SignUpTD />
        },
        {
          path: "otppagetd",
          element: <OtpPageTD />
        },
        {
          path: "signupdetailst-driver",
          element: <SignUpDetailsTD />
        },
        {
          path: "signup-company",
          element: <SignUpP />
        },
        {
          path: "signin-company",
          element: <SignInP />
        },
        {
          path: "signupdetails-company",
          element: <SignUpDetailsP />
        },
        {
          path: "signup-partner",
          element: <SignUpB />
        },
        {
          path: "signin-partner",
          element: <SignInB />
        },
        {
          path: "signupdetails-partner",
          element: <SignUpDetailsB />
        }
      ]
    },
    // Department of Posts (DOP) routes
    {
      path: "/company",
      element: <DopLayouts />,
      children: [
        {
          path: "truck",
          element: <TruckPage />
        },
        {
          path: "drivers",
          element: <DriverList />
        },
        {
          path: "third-party-logistics",
          element: <LogisticsPage />
        },
        {
          path: "inbox",
          element: <InboxPage />
        },
        {
          path: "warehouse",
          element: <Warehouse />
        }
      ]
    },
    // Driver routes
    {
      path: "/driver",
      element: <DriverLayout />,
      children: [
        {
          path: "your-truck",
          element: <YourTruck />
        },
        {
          path: "analysis",
          element: <Analysis />
        }
      ]
    },
    // Business routes
    {
      path: "/business",
      children: [
        {
          path: "truck-reservation",
          element: <TruckReservation />
        }
      ]
    },
    // Miscellaneous routes
    {
      path: "/misreports",
      element: <MISReport />
    },
    {
      path: "/coming-soon",
      element: <Soon />
    }
  ]);

  return (
    <>

      <RouterProvider router={router} />
    </>
  );
}

export default App;