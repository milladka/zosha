import localFont from 'next/font/local';
import 'react-range-slider-input/dist/style.css';
import "./globals.css";
import { HeaderDefault } from './components/layouts/default/header';
import { Footer } from './components/layouts/default/footer';
import { ToastContainer } from 'react-toastify';

const iransans = localFont({
  src: [
    {
      path: '../../public/fonts/ttf/IRANSansWeb(FaNum).ttf',
      weight: 'normal'
    },
    {
      path: '../../public/fonts/ttf/IRANSansWeb(FaNum)_Medium.ttf',
      weight: '500'
    },
    {
      path: '../../public/fonts/ttf/IRANSansWeb(FaNum)_Light.ttf',
      weight: '300'
    },
    {
      path: '../../public/fonts/ttf/IRANSansWeb(FaNum)_UltraLight.ttf',
      weight: '200'
    },
    {
      path: '../../public/fonts/ttf/IRANSansWeb(FaNum)_Bold.ttf',
      weight: '700'
    }
  ],
  variable: '--font-iransans'
});


export const metadata = {
  title: {
    default: "دکتر زوشا - رزرو نوبت پزشکان و مراکز جراحی زیبایی",
    template: "دکتر زوشا | %s",
  },
  description: "رزرو نوبت پزشکان و مراکز جراحی زیبایی",
  icons: {
    icon: "/logo.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR" dir="rtl" className='scroll-smooth'>
      <body className={`${iransans.variable} font-sans`}>
        <main className='bg-[#f4faff] flex flex-col min-h-screen'>
          <HeaderDefault />
          <div className='pt-16 lg:pt-20 flex-grow
          '>
            {children}
          </div>
          <Footer />
          <ToastContainer />
        </main>
      </body>
    </html>
  );
}