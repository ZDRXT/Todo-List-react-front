import "./Header.scss"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__logo">
                        Tdo LIST
                    </div>

                    <nav>
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/profile">Profile</Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header