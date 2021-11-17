import React from "react";
import "./Sidebar.scss";

function Sidebar({ open, onOpen }) {

    return (
        <>
            <div className={`sidebar ${open ? "active" : ""}`}>
                <div className="sidebar__header">
                    <button
                        className="menu-btn menu-btn_sidebar"
                        onClick={onOpen}
                    >
                        <svg
                            viewBox="0 0 500 500"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0 75V125H500V75H0ZM0 225V275H500V225H0ZM0 375V425H500V375H0Z"
                                fill="white"
                            />
                        </svg>
                    </button>
                    <h3 className="sidebar-title">FoxSay Weather</h3>
                </div>
                <ul>
                    <li>Link 1</li>
                    <li>Link 1</li>
                    <li>Link 1</li>
                    <li>Link 1</li>
                    <li>Link 1</li>
                    <li>Link 1</li>
                    <li>Link 1</li>
                    <li>Link 1</li>
                </ul>
            </div>
            <div
                className={`sidebar-overflow ${open ? "overflow-active" : ""}`}
                onClick={onOpen}
            />
        </>
    );
}

export default Sidebar;
