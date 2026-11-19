import './styles/App.css'
import { BrowserRouter, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/NavbarBase/NavbarBase';
import AppRouter from './Components/AppRouter';
import ScrollToTop from './Components/UI/ScrollToTop';

function App() {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  )
}

export default App;
