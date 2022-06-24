import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from './Banner';
import ContacForm from './ContacForm';
import Exeptional from './Exeptional';
import Info from './Info'
import MakeAppointment from './MakeAppointment';
import Services from './Services/Services';
import Testimonial from './Testimonial';
const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Exeptional></Exeptional>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <ContacForm></ContacForm>
            <Footer></Footer>
        </div>
    );
};

export default Home;