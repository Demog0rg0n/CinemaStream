import { useGetMoviesQuery } from "@/api/movies";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const PopularSwiper: FC<{typeNumber: 1 | 2 | 3| 4 | 5}> = ({typeNumber}) => {

    const {data, isLoading, error} = useGetMoviesQuery({typeNumber, sortField: "votes.imdb", sortType: -1});

    return (
        <Swiper 
            spaceBetween={20}
            slidesPerView={5}
        >
            {
                data && !error && !isLoading &&
                    data.docs.map((movie) => (
                        <SwiperSlide key={movie.id}>
                            <div className="popular__item">
                                <img src={movie.poster.url} alt={movie.name} className='popular__item__image' />
                                <div className="popular__item__info">
                                    <h3 className="popular__item__title">{movie.name}</h3>
                                    <div className="popular__item__details">
                                        <span className="popular__item__rating">{movie.rating.imdb}</span>
                                        <span className="popular__item__year">{movie.year}</span>
                                        <span className="popular__item__age">{movie.ageRating}+</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
            }
        </Swiper>
    )
}

export default PopularSwiper