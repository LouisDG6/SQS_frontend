import {Link} from "react-router-dom"

const Header = (props) => {
    return (
        <nav className="nav">
            <Link to="/">
                <h1>Safe Queer Spaces</h1>
            </Link>
        </nav>
    )
}

export default Header;