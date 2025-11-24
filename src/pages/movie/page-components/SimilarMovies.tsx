import Film from '@/components/Film'
import { MovieType } from '@/types'
import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

const SimilarMovies: FC<{similarMovies: MovieType[]}> = ({similarMovies}) => {
    return (
        <div className="movie__similar">

            <h2>Похожие фильмы</h2>

            <Swiper
                slidesPerView={4}
                spaceBetween={10}
            >
                {
                    similarMovies.map(movie => (
                        <SwiperSlide>
                            <Film {...movie} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default SimilarMovies