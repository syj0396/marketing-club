import { Link } from 'react-router-dom'
import './style.css'
export function Navbar() {
    return(
        <div className="nav shadow-sm">
            <Link className="nav-title" to="/"><li><h1>Marketing Club</h1></li></Link>
            <ul className="nav-links">
                <Link className="nav-link" to = "/class"><li className="nav-list">CLASS</li></Link>
                <Link className="nav-link" to = "/community"><li className="nav-list">COMMUNITY</li></Link>
                <Link className="nav-link" to = "/myPage"><li className="nav-list">MY</li></Link>
            </ul>
        </div>
    )
}