import { Routes, Route, Navigate } from 'react-router-dom';
import Loader from './loader/Loader';
import { lazy, Suspense } from 'react';

// Импорты страниц
const MainRu =  lazy(() => import('../Pages/Main/Main'));
const MainEn =  lazy(() => import('../PagesEn/Main/Main'));
const MainVn =  lazy(() => import('../PagesVn/Main/Main'));



const AppRouter = () => {

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<MainRu />} />
        <Route path="/en/*" element={<MainEn />} />
        <Route path="/vn/*" element={<MainVn />} />

        {/* 404 */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;