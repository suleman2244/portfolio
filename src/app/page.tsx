import '@fortawesome/fontawesome-free/css/all.min.css'
import Portfolio from "@/components/Portfolio";
import ScrollToTopButton from "@/components/ScrollToTop";
import NavBar from '@/components/Navbar';

export default function Home() {
  
  return (
    <>
    <NavBar />
    <Portfolio />
    <ScrollToTopButton />
    </>
  );
}
