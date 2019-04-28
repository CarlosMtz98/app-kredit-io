import React from 'react';
import './HomeStyles.css';

const Home = () => {
      const imagePath = '../assets/images/background-home.png';
    return (
          <div className="kredit-home-header">
                <div className="kredit-header-ghost"></div>
                <div className="kredit-home-bg" style={{backgroundImage: `url(${imagePath})`}}>
                        <div className="kredit-home-jumbo">
                                    <h1>Adquiere tu crédito</h1>
                                    <h1 className="kredit-green">cuando lo necesitas,</h1>
                                    <h1>en minutos.</h1>
                        </div>
                </div>
          </div>


      
    );
} 

export default Home;