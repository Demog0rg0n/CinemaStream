import { formattingMovieLength } from '@/helpers/formattingMovieLength'
import LikeIcon from '@/icons/LikeIcon'
import PlusIcon from '@/icons/PlusIcon'
import { ExtendetMovieType } from '@/types'
import { FC } from 'react'

const MainInfo: FC<ExtendetMovieType> = ({name, year, ageRating, movieLength, shortDescription, genres, persons, backdrop, poster}) => {

    const formatedLength = formattingMovieLength(movieLength)

    return (
        <section className="movie__main-info">
            {
                backdrop.url &&
                <img src={backdrop.url} alt={name} className="movie__backdrop" />
            }
            <div className="container">

                <img src={poster.previewUrl} alt="" className="movie__poster" />

                <div className="movie__text-content">
                    <h1 className="movie__title">{name}</h1>

                    <div className="movie__main-info__details">
                        <span className="movie__year">{year}</span>
                        <span className="movie__age">{ageRating}+</span>
                        {
                            movieLength &&
                            <span className="movie__length">{formatedLength.hours + "ч " + formatedLength.minutes + "м"}</span>
                        }
                    </div>
                    <div className="movie__main-info__details">
                        <button className="fill-button">Смотреть</button>
                        <button className="movie__main-info__action-button"><LikeIcon/></button>
                        <button className="movie__main-info__action-button"><PlusIcon /></button>
                    </div>

                    <p className='movie__main-info__description'>{shortDescription}</p>

                    <p><span>В ролях: {persons.slice(0, 5).map(person => person.name).join(", ")}</span> </p>
                    <p><span>Жанр: {genres.map(genre => genre.name).join(", ")}</span> </p>
                </div>

            </div>
        </section>
    )
}

export default MainInfo