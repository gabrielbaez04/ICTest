import React from 'react';
import Auction from './Auction';

class AuctionList extends React.Component {
    state = {  
        auctions : [],
    }
    timerStop() {
        window.client.timerStop();
    }

    componentDidMount() {
        this.loadAuctionsFromServer();
        window.client.timerStart();
        setInterval(this.loadAuctionsFromServer, 5000);    
        window.addEventListener("beforeunload", this.timerStop);
    }
    
    componentWillUnmount() {
        window.removeEventListener("beforeunload", this.timerStop)
    }
    //called every 5 seconds in case someone else do a modification on the server (IE:other tab)
      loadAuctionsFromServer = () => {
        window.client.getAuctions((serverAuctions) => (
            this.setState({ auctions: serverAuctions })
          )
        );
      };
      handleBidClick = (auctionId) => {
        this.bid(auctionId);
      };

      bid = (auctionId) => {
        const defaultDealer = "Instacarro";
        const channel = window.helpers.detectmob==true ? "Mobile" : "Web";
        this.setState({
          auctions: this.state.auctions.map((auction) => {
            if (auction.id === auctionId) {
              return Object.assign({}, auction, {
                lastBid: auction.lastBid + 250
              });
            } else {
              return auction;
            }
          }),
        });
    
        window.client.bid(
          { id: auctionId, dealership: defaultDealer, channel:channel  }
        );
      };

    render() {
        return (
            <div className="auctionList">
                <div className="auctionContainer">
                    {this.state.auctions.map((auction)=>{
                        return <Auction
                            key={auction.id}
                            auction={auction}
                            handleBidClick={this.handleBidClick}
                        />
                    })}
                </div>
            </div>
        );
    }
}

export default AuctionList;