import { FC } from 'react'
import { Link } from 'react-router'

const Header: FC = () => {
    return (
        <header className='header'>
            <div className="header__blur"></div>
            <div className="header__content container">
                <Link className='header__logo' to={"/"}>CinemaStream</Link>

                <nav className="header__nav">
                    <ul>
                        <li><Link to={"/catalog/movie"}>Фильмы</Link></li>
                        <li><Link to={"/catalog/tv-series"}>Сериалы</Link></li>
                        <li><Link to={"/catalog/cartoon"}>Мультфильмы</Link></li>
                        <li><Link to={"/catalog/animated-series"}>Мультсериалы</Link></li>
                    </ul>
                </nav>

                <button className='header__profile-button'>

                </button>
            </div>
        </header>
    )
}

export default Header