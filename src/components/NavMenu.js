import React, {Component} from 'react';
import {Link} from "react-router-dom";

class NavMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <h2 id="logo">Logo</h2>
                        </Link>
                    </div>
                    <ul className="nav-links">
                        <li>
                            <Link to="/">Bosh sahifa</Link>
                        </li>
                        <li>
                            <Link to="/rooms">Xonalar</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavMenu;
