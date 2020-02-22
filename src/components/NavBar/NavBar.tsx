import React from 'react';
import {NavLink, withRouter} from 'react-router-dom'

class NavBar extends React.Component {
    getNavLinkClass = (path: any) => {
        // @ts-ignore
        return this.props['location'].pathname === path ? 'nav-item nav-link active' : 'nav-item nav-link';
    };

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">EXAMEN</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className={this.getNavLinkClass('/home')} href="/home">Home<span className="sr-only">(current)</span></a>
                        <a className={this.getNavLinkClass('/transfer')} href="/otro">transfer</a>
                    </div>
                </div>
            </nav>
        )
    }
};
// @ts-ignore
NavBar = withRouter(NavBar);
export default NavBar;
