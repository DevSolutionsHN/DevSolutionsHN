import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { cn } from '../../lib/cn';

export function MainLayout() {
  return (
    <div className={cn('min-h-screen flex flex-col')}>
      <Header />
      <main className="flex-1 pt-16 lg:pt-18" id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}