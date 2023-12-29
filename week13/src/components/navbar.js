import React from 'react'; 

export default class Navbar extends React.Component {
    //Creating the funtion for the navbar with an option for help. not much on the navbar as in this instance the user has not logged in yet.
    render () {
        return (
            <nav id="navBar" className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand fs-2 text-white" href="#">KL</a>
                        <div className="navbar nav">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link text-white" href='#'>Help</a>
                                </li>
                            </ul>     
                        </div>
                </div>
            </nav>
        )
    }
}

