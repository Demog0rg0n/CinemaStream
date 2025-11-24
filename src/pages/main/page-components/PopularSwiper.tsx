import { useGetMoviesQuery } from "@/api/movies";
import Film from "@/components/Film";
import FilmLoader from "@/components/FilmLoader";
import { Type } from "@/types";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const PopularSwiper: FC<{type: Type}> = ({type}) => {

    const {data, isLoading, error} = useGetMoviesQuery({type, sortField: "votes.imdb", sortType: -1});

    return (
        <Swiper 
            spaceBetween={20}
            slidesPerView={5}
        >
            {
                isLoading &&
                    [...new Array(10)].map((index) => (
                        <SwiperSlide>
                            <FilmLoader />
                        </SwiperSlide>
                    ))
            }
            {
                !isLoading && data && !error &&
                data.docs.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <Film {...movie}/>
                    </SwiperSlide>
                ))
            }

            
        </Swiper>
    )
}

export default PopularSwiper