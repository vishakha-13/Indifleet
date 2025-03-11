import Home from '../components/Landing/Home.jsx';
import MyFooter from '../components/Landing/MyFooter.jsx';
import Navbar from '../components/Landing/Navbar.jsx';
import Services from '../components/Landing/Services';
import RealTime from '../components/Landing/RealTime';
import Testimonial from '../components/Landing/Testimonial';
import Demo from '../components/Landing/Demo';
import HowItWorks from '../components/Landing/HowItWorks';


const Landing = () => {
    return (
        <>
            <Navbar />
            <Home />
            <Services />
            <HowItWorks />
            <RealTime />
            <Testimonial />
            <Demo />
            <MyFooter />
        </>
    )
}


export default Landing