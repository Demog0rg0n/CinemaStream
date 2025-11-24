import { Route, Routes } from 'react-router-dom';
import Catalog from './pages/catalog/Catalog';
import Main from './pages/main/Main';
import Movie from './pages/movie/Movie';

function Router() {
    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/movie/:id' element={<Movie />} />
            <Route path='/catalog/:type' element={<Catalog />} />
        </Routes>
    );
}

export default Router