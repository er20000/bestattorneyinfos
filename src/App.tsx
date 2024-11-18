import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Articles from './pages/Articles';
import About from './pages/About';
import Contact from './pages/Contact';
import SearchPage from './pages/SearchPage';
import NotFound from './pages/NotFound';
import CivilLaw from './pages/CivilLaw';
import CriminalLaw from './pages/CriminalLaw';
import FamilyLaw from './pages/FamilyLaw';
import BusinessLaw from './pages/BusinessLaw';
import TruckCollision from './pages/articles/TruckCollision';
import OilRigInjury from './pages/articles/OilRigInjury';
import ConstructionAccident from './pages/articles/ConstructionAccident';
import AccidentAttorneyFresno from './pages/articles/AccidentAttorneyFresno';
import TruckAccident from './pages/articles/TruckAccident';
import PedestrianAccident from './pages/articles/PedestrianAccident';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-blue-50">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/categories/civil-law" element={<CivilLaw />} />
          <Route path="/categories/criminal-law" element={<CriminalLaw />} />
          <Route path="/categories/family-law" element={<FamilyLaw />} />
          <Route path="/categories/business-law" element={<BusinessLaw />} />
          <Route path="/articles/truck-collision" element={<TruckCollision />} />
          <Route path="/articles/oil-rig-injury" element={<OilRigInjury />} />
          <Route path="/articles/construction-accident" element={<ConstructionAccident />} />
          <Route path="/articles/accident-attorney-fresno" element={<AccidentAttorneyFresno />} />
          <Route path="/articles/truck-accident" element={<TruckAccident />} />
          <Route path="/articles/pedestrian-accident" element={<PedestrianAccident />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;