import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="nav">
            <Link to="/" style={{ color: "lightgreen", margin: "15px" }}>Home</Link>
            <Link to="/songs" style={{ margin: "15px", color: "skyblue" }}>Songs</Link>
        </div >
    );
}

export default Navbar;
