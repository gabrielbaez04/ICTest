import React from 'react'
import Auction from './Auction'
class AuctionList extends React.Component {
    state = {  }
    render() {
        return (
            <div className="auctionList">
                <div className="auctionContainer">
                    <Auction/>
                    <Auction/>
                    <Auction/>
                    <Auction/>
                    <Auction/>
                    <Auction/>
                    <Auction/>
                    <Auction/>
                </div>
            </div>
        );
    }
}

export default AuctionList;