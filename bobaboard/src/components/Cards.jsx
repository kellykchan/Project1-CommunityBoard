import React from "react";
import shops from './Shops';

const BobaBoard = () => {
    return (
        <div className="cards-container">
            {shops.map((shop, index) => (
                <div key={index} className="card">
                    <img src={shop.image} alt={`${shop.name} store front`} />
                    <h3>{shop.name}</h3>
                    <p>{shop.location}</p>
                    <p>{shop.phone}</p>
                    <p>
                        <a href={shop.website} target="_blank" rel="noopener noreferrer">
                            <button>Visit Website</button>
                        </a>
                    </p>
                </div>
            ))}
        </div>
    );
};

export default BobaBoard;