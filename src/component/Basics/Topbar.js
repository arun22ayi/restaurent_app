import React from 'react';
import {Link} from 'react-router-dom';



const Topbar = () => {
    return(

        <React.Fragment>
        <nav className="navbar bg-primary">
        <h1>
        <i className="fa fa-github"></i>
        Resturant Application
        </h1>
        <ul class="for_routing">
        <li>
        <Link to ="/">Home</Link>
        </li>
        <li>
        <Link to ="/about">About</Link>
        </li>
        </ul>
        </nav>
        </React.Fragment>

    )
}

export default Topbar;

