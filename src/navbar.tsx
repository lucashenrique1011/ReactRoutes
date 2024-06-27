import { Link } from "react-router-dom"
import './navbar.css'

function Navbar() {
    return (
        <div>
            <div className="link">
                <Link to={"/primeira"} className="dentro" >primeira</Link>
            </div>
            <div className="link">
                <Link to={"/segunda"} className="dentro">segunda</Link>
            </div>
            <div className="link">
                <Link to={"/"} className="dentro">inicial</Link>
            </div>
        </div>
    )
}

export default Navbar