import React, { useState } from "react";
import Time from "../Time/Time";
import Sidebar from "../Sidebar/Sidebar";

import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
    const [open, setOpen] = useState(false);

    const disableScrolling = () => {
        var x = window.scrollX;
        var y = window.scrollY;
        window.onscroll = function () {
            window.scrollTo(x, y);
        };
    };

    const enableScrolling = () => {
        window.onscroll = function () {};
    };

    const onOpenSidebar = () => {
        setOpen(!open);
        if (open) {
            enableScrolling();
        } else {
            disableScrolling();
        }
    };

    return (
        <div className="header-bar">
            <Sidebar open={open} onOpen={onOpenSidebar} />
            <button className="menu-btn" onClick={onOpenSidebar}>
                <svg
                    viewBox="0 0 500 500"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0 75V125H500V75H0ZM0 225V275H500V225H0ZM0 375V425H500V375H0Z"
                        fill="white"
                    />
                </svg>
            </button>
            <Link to="/" className="header-title">
                <h3>FoxSay Weather</h3>
            </Link>
            <Time />
        </div>
    );
}

export default Header;
