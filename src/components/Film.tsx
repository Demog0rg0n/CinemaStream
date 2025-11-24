import { MovieType } from '@/types'
import { FC } from 'react'
import { Link } from 'react-router-dom'

const Film: FC<MovieType> = (movie) => {
    return (
        <Link to={"/movie/" + movie.id} className="film">
            <img src={movie.poster.url} alt={movie.name} className='film__image' />
            <div className="film__info">
                <h3 className="film__title">{movie.name}</h3>
                <div className="film__details">
                    <span className="film__rating">{movie.rating.imdb}</span>
                    <span className="film__year">{movie.year}</span>
                    <span className="film__age">{movie.ageRating}+</span>
                </div>
            </div>
        </Link>
    )
}

export default Film