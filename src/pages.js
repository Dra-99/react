import { NavLink } from "react-router-dom";
import "./pages.css"

export function NavBar() {
    return (
        <div className="bar">
            <NavLink to="/" exact>首页</NavLink>
            <NavLink to="/set" exact>设置</NavLink>
            <NavLink to="/personal" exact>个人中心</NavLink>
        </div>
    )
}

export function Home() {
    return (
        <div className="page home">
            <h1>首页</h1>
        </div>
    )
}

export function Set() {
    return (
        <div className="page set">
            <h1>设置</h1>
        </div>
    )
}

export function Personal() {
    return (
        <div className="page personal">
            <h1>个人中心</h1>
        </div>
    )
}