import { Link } from "react-router-dom";

function Header(){
    return <>
        <div className="navbar bg-primary text-primary-content">
            <Link className="btn btn-ghost normal-case text-xl">Awesom Auth</Link>
        </div>
    </>
}

export default Header;