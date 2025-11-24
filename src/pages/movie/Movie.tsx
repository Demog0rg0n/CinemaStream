import { useGetMovieDetailsQuery } from '@/api/movies'
import { FC } from 'react'
import { useParams } from 'react-router'

import "./movie.scss"
import AboutMovie from './page-components/AboutMovie'
import MainInfo from './page-components/MainInfo'
import Persons from './page-components/Persons'
import SimilarMovies from './page-components/SimilarMovies'

const Movie: FC = () => {

    const {id} = useParams()

    const {data, isLoading, error} = useGetMovieDetailsQuery(id)

    return (
        <>
        {
            !isLoading && data ?
            <article className='movie'>
                <MainInfo {...data}/>
                <div className="movie__content container">
                    <div className="movie__content__left">
                        {
                            data.description &&
                            <AboutMovie description={data.description}/> 
                            
                        }
                        <embed src={"https://moviesapi.club/movie/" + data.externalId.imdb} type="video/mp4" height={600} width={"100%"} />
                        <Persons persons={data.persons} />
                        {
                            data.similarMovies &&
                            <SimilarMovies similarMovies={data.similarMovies} />
                        }
                    </div>
                    
                    <div className="movie__content__right">
                    </div>
                </div>
            </article>:
            <span>Загрузка</span>
            }
            {
                error && <div>Bad Request</div>
            }
        </>
    )
}

export default Movie