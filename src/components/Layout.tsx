import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <>
      <Header 
        name="Amanbol Moldash" 
        tagline="IWAMAD Student" 
      />
      
      <div style={{ minHeight: '60vh', padding: '20px' }}>
        <Outlet />
      </div>
      
      <Footer 
        year={2026} 
        name="Amanbol" 
      />
    </>
  );
}