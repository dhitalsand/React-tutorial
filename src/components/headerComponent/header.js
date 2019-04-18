import React, {
    Component
} from "react";

class Header extends Component {
    render() {
        return (
            <header >
                <div className="logo">
                    LOGO
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="#">HOME</a>
                        </li>
                        <li>
                            <a href="#">PRODUCTS</a>
                        </li>
                        <li>
                            <a href="#">CONTACT</a>
                        </li>
                    </ul>
                </nav>
            </header>

        );

    }
}

export default Header;
