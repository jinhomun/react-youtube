import React from 'react'

import { Link } from 'react-router-dom';
import { MdSlideshow} from "react-icons/md";

const Logo = () => {
    return (
        <h1 className="header__logo">
            <Link to="/">
              <em><MdSlideshow /></em>
              <span>Soccer<br />Youtube</span>
            </Link>
        </h1>
    ) 
}

export default Logo