import React from 'react';


const Nav = () => {
    return (

        <nav className="navbar navbar-expand-lg">
            <div className="p-3 mb-2 name">Rachel Sakles</div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="ml-auto nav navbar-nav navbar-right">
                    <li className="nav-item">
                        <a className="nav-link" href="index.html">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="portfolio.html">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="contact.html">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


export default Nav