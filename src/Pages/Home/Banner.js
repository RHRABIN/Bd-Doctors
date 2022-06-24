import React from 'react';
import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'
import PrimaryButton from '../../Shared/PrimaryButton';
const Banner = () => {
    const styles = {
        section: {
            backgroundImage: `url(${bg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%'
        }
    }
    return (
        <div style={styles.section}>
            <div className="hero min-h-screen px-12">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="lg:max-w-lg sm:max-w-sm  rounded-lg shadow-2xl" />
                    <div className='px-12'>
                        <h1 className="text-5xl font-bold">Your Next Smile Start Here!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;