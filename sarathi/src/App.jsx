import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Outlet /> 
      </div>
      <Footer/>
    </div>
  );
}
