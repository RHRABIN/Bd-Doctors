import React from 'react';

const InfoCard = ({ card }) => {
    const { img, className, title, description } = card;
    return (


        <div className={`card lg:card-side bg-accent  shadow-xl p-4 ${className}`}>
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title ">{title}</h2>
                <p>{description}</p>

            </div>
        </div>

    );
};

export default InfoCard;