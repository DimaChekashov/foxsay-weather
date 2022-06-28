import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../const/routes";
import Sidebar from "../Sidebar/Sidebar";
import Time from "../Time/Time";
import "./Header.sass";

interface Props {

}

interface State {
    open: boolean;
}

export default class Header extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            open: false
        }
    }

    private disableScrolling = () => {
        const { scrollX, scrollY } = window;
        window.onscroll = () => window.scrollTo(scrollX, scrollY);
    };

    private enableScrolling = () => {
        window.onscroll = () => {};
    };

    private onOpenSidebar = () => {
        this.setState((prevState) => ({ open: !prevState.open }));

        if (this.state.open) {
            this.enableScrolling();
        } else {
            this.disableScrolling();
        }
    };

    render() {
        return (
            <header className="header">
                <Sidebar open={this.state.open} onOpen={this.onOpenSidebar} />
                <button type="button" className="header__menu-btn" onClick={this.onOpenSidebar}>
                    <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 75V125H500V75H0ZM0 225V275H500V225H0ZM0 375V425H500V375H0Z" fill="white" />
                    </svg>
                </button>
                <Link to={ROUTES.DASHBOARD} className="header__title">FoxSay Weather</Link>
                <Time />
            </header>
        )
    }
}
