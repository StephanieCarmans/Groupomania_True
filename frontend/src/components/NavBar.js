import React from 'react';
import { NavLink } from 'react-router-dom';
import Logout from './log/LogOut';


const Navbar = () => {
    

    return (
        <nav>
            <div>
                <div>
                    <NavLink to="/">
                        <div>
                            <img
                                src="./img/icon-left-font-monochrome-black.svg"
                                alt="Groupomania"
                                className="homepage __logo"
                            />
                        </div>
                    </NavLink>
                </div>

                <div>
                    <Logout />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
