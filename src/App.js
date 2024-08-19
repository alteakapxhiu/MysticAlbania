import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import EventMap from './components/EventMap';
import Banner from './components/Banner';
import Attractions from './components/Attractions';
import Parallax from './components/Parallax';
import AlbTopGems from './components/AlbTopGems';
import StaticMap from './components/Map';
import MagazineSection from './components/Magazine';
import Advert from './components/Advert';
import Flag from './components/Flag';
import Footer from './components/Footer';
import NavBar2 from './components/Navbar2';
import YouTubeVideo from './components/Video';
import AboutSaranda from './Regions/Saranda';
import AboutTirana from './Regions/Tirana';
import LoginPage from './components/SignIn';
import AboutVlora from './Regions/Vlora';
import AboutDiber from './Regions/Diber';
import AboutDurres from './Regions/Durres';
import AboutGjirokastra from './Regions/Gjirokastra';
import AboutElbasan from './Regions/Elbasan';
import AboutHimare from './Regions/Himara';
import AboutKorce from './Regions/Korca';
import AboutKruje from './Regions/Kruje';
import AboutKukes from './Regions/Kukes';
import AboutShkodra from './Regions/Shkodra';
import AlbanianRiviera from './Regions/AlbanianRiviera';
import AlbanianAlps from './Regions/AlbanianAlps';
import Illyrian from './Regions/Illyrian';
import Marina from './Regions/Marina';
import Albania from './Regions/Albania';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
      <NavBar/>
        <Routes>
          <Route path="/" element={
            <>
              <Banner />
              <Attractions />
              <MagazineSection />
              <Parallax />
              <AlbTopGems />
              <Flag />
              <Advert/>
              <YouTubeVideo/>
              <Footer />              
            </>
          } />
                <Route path="/Albania" element={<Albania />} />
                <Route path="/Marina" element={<Marina />} />
                <Route path="/Illyrian" element={<Illyrian />} />
                <Route path="/AlbanianRiviera" element={<AlbanianRiviera />} />
                <Route path="/AlbanianAlps" element={<AlbanianAlps />} />
                <Route path="/Diber" element={<AboutDiber />} />
                <Route path="/Durres" element={<AboutDurres />} />
                <Route path="/Elbasan" element={<AboutElbasan />} />
                <Route path="/Himara" element={<AboutHimare />} />
                <Route path="/Korca" element={<AboutKorce />} />
                <Route path="/Kruje" element={<AboutKruje />} />
                <Route path="/Shkodra" element={<AboutShkodra />} />
                <Route path="/Kukes" element={<AboutKukes />} />
                <Route path="/Gjirokastra" element={<AboutGjirokastra />} />
                <Route path="/Vlora" element={<AboutVlora />} />
                <Route path="/Tirana" element={<AboutTirana />} />
                <Route path="/Saranda" element={<AboutSaranda />} />
                <Route path="/event-map" element={<EventMap />} />
                <Route path="/sign-in" element={<LoginPage />} />
         </Routes>
      </div>
    </Router>
  );
}

export default App;
