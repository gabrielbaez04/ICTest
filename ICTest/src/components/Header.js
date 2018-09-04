import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <div className="pageHeader flex-container">
                <div className="logo">
                    <img src={require("../assets/logo.png")} alt="InstaCarro.com"/>
                </div>
                <div className="verticalDivider"></div>
                <div className="phoneNumber">
                    <img src={require("../assets/phone.png")} alt="InstaCarro.com"/>
                    <p>(11)3569 - 3465</p>
                </div>
                <div className="menu">
                    <img className="caret" src={require("../assets/caret.png")} alt="InstaCarro.com"/>
                    <img className="user" src={require("../assets/user.png")} alt="InstaCarro.com"/>
                    <p>User Test</p>
                </div>
            </div>
        );
    }
}

export default Header;