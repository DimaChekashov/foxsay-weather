import React from 'react';
import { Link } from 'react-router-dom';
import './Header.sass';

interface Props {

}

interface State {
    open: boolean,
}

export default class Header extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            open: false
        }
    }

    private disableScrolling = () => {
        var x = window.scrollX;
        var y = window.scrollY;
        window.onscroll = () => {
            window.scrollTo(x, y);
        };
    };

    private enableScrolling = () => {
        window.onscroll = () => {};
    };

    private onOpenSidebar = () => {
        this.setState({
            open: !this.state.open
        })
        if (this.state.open) {
            this.enableScrolling();
        } else {
            this.disableScrolling();
        }
    };

    render() {
        return (
            <header className="header">
                <button className="header__menu-btn" onClick={this.onOpenSidebar}>
                    <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 75V125H500V75H0ZM0 225V275H500V225H0ZM0 375V425H500V375H0Z" fill="white" />
                    </svg>
                </button>
                <Link to="/" className="header__title">FoxSay Weather</Link>
                <Time />
            </header>
        )
    }
}
