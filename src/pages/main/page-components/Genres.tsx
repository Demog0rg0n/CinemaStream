import { ActionIcon, AdventureIcon, CartoonIcon, ComedyIcon, CrimeIcon, DocumentaryIcon, DramaIcon, FantasticIcon, FantasyIcon, HorrorIcon, RomanceIcon, ThrillerIcon } from "@/icons/GenresIcons"
import { Link } from "react-router"

const Genres = () => {
    return (
        <ul className="genres__items">
            <li className="genres__item">
                <Link to="/action" className="genres__link">
                    <ActionIcon />
                    <span>Боевик</span>
                </Link>
            </li>
            <li className="genres__item">
                <Link to="/action" className="genres__link">
                    <DramaIcon />
                    <span>Драмы</span>
                </Link>
            </li>
            <li className="genres__item">
                <Link to="/action" className="genres__link">
                    <ComedyIcon />
                    <span>Комедия</span>
                </Link>
            </li>
            <li className="genres__item">
                <Link to="/action" className="genres__link">
                    <FantasticIcon />
                    <span>Фантастика</span>
                </Link>
            </li>
            <li className="genres__item">
                <Link to="/action" className="genres__link">
                    <HorrorIcon />
                    <span>Ужасы</span>
                </Link>
            </li>
            <li className="genres__item">
                <Link to="/action" className="genres__link">
                    <ThrillerIcon />
                    <span>Триллеры</span>
                </Link>
            </li>
            <li className="genres__item">
                <Link to="/action" className="genres__link">
                    <CartoonIcon />
                    <span>Мультфильмы</span>
                </Link>
            </li>
            <li className="genres__item">
                <Link to="/action" className="genres__link">
                    <DocumentaryIcon />
                    <span>Документальные</span>
                </Link>
            </li>
            <li className="genres__item">
                <Link to="/action" className="genres__link">
                    <RomanceIcon />
                    <span>Романтика</span>
                </Link>
            </li>
            <li className="genres__item">
                <Link to="/action" className="genres__link">
                    <CrimeIcon />
                    <span>Криминал</span>
                </Link>
            </li>
            <li className="genres__item">
                <Link to="/action" className="genres__link">
                    <AdventureIcon />
                    <span>Приключения</span>
                </Link>
            </li>
            <li className="genres__item">
                <Link to="/action" className="genres__link">
                    <FantasyIcon />
                    <span>Фэнтези</span>
                </Link>
            </li>
        </ul>
    )
}

export default Genres