import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import  AppBar  from '../AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px', }}>
      <AppBar />
      <Suspense fallback={null}>
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px', display: 'flex', justifyContent: 'center', minHeight: 'calc(100vh - 50px)' }}>
        <Outlet />
       </div>
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
