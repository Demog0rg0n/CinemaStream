import { FC } from 'react';

import 'swiper/css';

import "./main.scss";

import Genres from './page-components/Genres';
import NewSwiper from './page-components/NewSwiper';
import PopularSwiper from './page-components/PopularSwiper';

const Main: FC = () => {
    return (
        <main>
            <section className='new'>
                <h2 className="visually-hidden">Популярные новинки</h2>
                <NewSwiper />
            </section>
            <section className="popular">
                <div className="container">
                    <h2 className='popular__title'>Популярные фильмы</h2>
                    <PopularSwiper type={"movie"}/>
                    <h2 className='popular__title'>Популярные сериалы</h2>
                    <PopularSwiper type={"tv-series"}/>
                </div> 
            </section>
            <section className="genres">
                <div className="container">
                    <h2 className="genres__title">Жанры</h2>
                    <Genres />
                </div>
            </section>
        </main>
    )
}

export default Main