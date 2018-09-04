import React from 'react';

class Auction extends React.Component {
    state = {  }
    render() {
        return (
            <div>
                <div className="card">
                    <div className="image">
                        <img src="https://uploads.instacarro.com/JPEG_20180825_1305445b79a2d044791c001a61224a313739693525860090.jpg"/>
                        <div className="tag">
                            <a href="#">ver detalhes</a>
                        </div>
                    </div>
                    <div className="content">
                        <div className="splitContainer">
                            <div className="splitContainerData">
                                <p className="bidHeader">TEMPO RESTANTE</p>
                                <p className="bidTimeInfo bidInfo">15:55:55</p>
                            </div>
                            <div className="verticalDivider"></div>
                            <div className="splitContainerData">
                                <p className="bidHeader">ULTIMA OFERTA</p>
                                <p className="bidOfferInfo bidInfo">R$ 29.250</p>
                            </div>
                        </div>
                        <div className="horizontalDivider"></div>
                        <div className="carInfo">
                            <p>CITROËN C3 1.4 I XTR 8V FLEX 4P MANUAL</p>
                        </div>
                        <div className="horizontalDivider"></div>
                        <div className="splitContainer">
                            <div className="splitContainerData">
                                <p className="year">2007</p> 
                            </div>
                            <div className="verticalDivider"></div>
                            <div className="splitContainerData">
                                <p className="kilometers">92.610 km</p>
                            </div>
                        </div>
                        <div className="horizontalDivider"></div>
                        <input className="bidButton" type="button" value="FAZER OFERTA"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Auction;
