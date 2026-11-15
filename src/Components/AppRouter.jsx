import { Routes, Route, Navigate } from 'react-router-dom';
import Loader from './loader/Loader';
import { lazy, Suspense } from 'react';

// Импорты страниц
const Main =  lazy(() => import('../Pages/Main/Main'));
const Catalog =  lazy(() => import('../Pages/Catalog/Catalog'));
const Product =  lazy(() => import('../Pages/Product/Product'));


const AppRouter = () => {

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* Публичные */}

        {/* menu */}
          <Route path="/" element={<Main />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<Product />} />

        {/* 404 */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;