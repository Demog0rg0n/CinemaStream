import { FC } from 'react'


import { useGetMoviesQuery } from '@/api/movies'
import Film from '@/components/Film'
import { isValidType, Type } from '@/types'
import { useParams } from 'react-router'
import "./catalog.scss"

const Catalog: FC = () => {

    const types = ["movie","tv-series","cartoon","animated-series","anime"]

    let {type} = useParams<{type: Type}>()

    if(!isValidType(type || "")) {
        type = "movie"
    } 
    if(!type) {
        type = "movie"
    }

    const {data, isLoading, error} = useGetMoviesQuery({type, sortField: "votes.imdb", sortType: -1, limit: 20})


    return (
        <section className='catalog'>
            <div className="container">
                <h1 className="visually-hidden">Каталог</h1>

                <div className='catalog__items'>

                    {
                        data && !isLoading &&
                        data.docs.map(film => ((
                            <Film {...film}/>
                        )))
                    }
                    {
                        isLoading &&
                            [...new Array(15)].map(() => (
                                <div className="film loader"></div>
                            ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Catalog