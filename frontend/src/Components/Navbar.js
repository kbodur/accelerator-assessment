


import { Link } from "react-router-dom"
export default function Navbar() {
    return (
        <nav className='navbar'>
            <section className='navbar-main-section'>
                <h1 className='title'>Animania</h1>
            </section>
            <section className='navbar-sub-section'>
                <p>Anime</p>
                <p>Cartoons</p>
                <p>random</p>
                <button><Link to="/animes/new">New Anime</Link></button>
            </section>
        </nav>
    )
}