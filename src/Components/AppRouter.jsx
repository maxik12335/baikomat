import { Routes, Route, Navigate } from 'react-router-dom';
import Loader from './loader/Loader';
import { lazy, Suspense } from 'react';

// Импорты страниц
const Main =  lazy(() => import('../Pages/Main/Main'));
const Rides =  lazy(() => import('../Pages/Rides/Rides'));



const AppRouter = () => {

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/en/*" element={<Main />} />
        <Route path="/vn/*" element={<Main />} />

        <Route path="/rides" element={<Rides />} />
        <Route path="/en/rides" element={<Rides />} />
        <Route path="/vn/rides" element={<Rides />} />

        {/* 404 */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;