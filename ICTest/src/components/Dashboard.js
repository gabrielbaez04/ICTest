import React from 'react'
import Header from '../components/Header';
import AuctionList from './AuctionList';

class Dashboard extends React.Component {
    state = {  }
    render() {
        return (
            <div>
                <Header/>
                <AuctionList/>
            </div>
        );
    }
}

export default Dashboard;