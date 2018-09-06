import React from 'react';

class Auction extends React.Component {

    state = {  
        bidOffer : this.props.auction.bids.length ? this.props.auction.bids.sort((prev,curr)=>{return curr.amount - prev.amount})[0].amount : 0,
        remainingTime : this.props.auction.remainingTime
    }
    
    handleBidClick=()=>{
        this.props.handleBidClick(this.props.auction.id);
        this.setState({bidOffer:this.state.bidOffer + 250});
    }
    componentDidMount() {
        this.forceUpdateInterval = setInterval(() => {this.setState({remainingTime: this.state.remainingTime-1000}); this.forceUpdate();}, 1000);
      }
    
      componentWillUnmount() {
        clearInterval(this.forceUpdateInterval);
      }

    render() {
        const elapsedString = window.helpers.renderElapsedString(this.state.remainingTime);
        return (
            <div>
                <div className="card">
                    <div className="image">
                        <img src={this.props.auction.imageUrl} alt="vehicle"/>
                        <div className="tag">
                            <a href="#">ver detalhes</a>
                        </div>
                    </div>
                    <div className="content">
                        <div className="splitContainer">
                            <div className="splitContainerData">
                                <p className="bidHeader">TEMPO RESTANTE</p>
                                <p className="bidTimeInfo bidInfo">{elapsedString}</p>
                            </div>
                            <div className="verticalDivider"></div>
                            <div className="splitContainerData">
                                <p className="bidHeader">ULTIMA OFERTA</p>
                                <p className="bidOfferInfo bidInfo">R$ {window.helpers.formatNumber(this.state.bidOffer)}</p>
                            </div>
                        </div>
                        <div className="horizontalDivider"></div>
                        <div className="carInfo">
                            <p>{this.props.auction.make} {this.props.auction.model} {this.props.auction.version} {this.props.auction.year}</p>
                        </div> 
                        <div className="horizontalDivider"></div>
                        <div className="splitContainer">
                            <div className="splitContainerData">
                                <p className="year">{this.props.auction.year}</p> 
                            </div>
                            <div className="verticalDivider"></div>
                            <div className="splitContainerData">
                                <p className="kilometers">{window.helpers.formatNumber(this.props.auction.km)} KM</p>
                            </div>
                        </div>
                        <div className="horizontalDivider"></div>
                        <input className="bidButton" type="button" value="FAZER OFERTA" onClick={this.handleBidClick} disabled={elapsedString=='00:00:00'} style={{ background: elapsedString=='00:00:00' ? 'gray' : '#3eb871' }}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Auction;
