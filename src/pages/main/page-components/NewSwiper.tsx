import { FC, useEffect } from 'react';

import { useGetMoviesQuery } from '@/api/movies';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const NewSwiper: FC = () => {

    const {data, isLoading, error} = useGetMoviesQuery({typeNumber: 1, sortField: "votes.imdb", sortType: -1, year: 2025, notNullFields: ["backdrop.url"]});

    useEffect(() => {
        if (!isLoading && data) {
            console.log(data.docs)
        }
    }, [isLoading])

    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={1}
        >
            {
                data && !error && !isLoading &&
                    data.docs.map((movie) => (
                        <SwiperSlide key={movie.id}>
                            <div className="new__slide">
                                <div className="new__slide__container container">
                                    <img src={movie.backdrop.url} alt={movie.name} className='new__slide__bg-image'/>
                                    <h3 className="new__slide__title">{movie.name}</h3>
                                    <p className="new__slide__description">{movie.shortDescription || movie.description}</p>

                                    <div className="new__slide__buttons">
                                        <button className="fill-button">
                                            <span>Смотреть</span>
                                        </button>
                                        <button className="fill-button fill-button_gray">
                                            <span>Подробнее</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
            }

        </Swiper>
    )
}

export default NewSwiper