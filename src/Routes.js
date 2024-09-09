import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing';
import LocationDetailPage from './Pages/PotterDetail';
import { SmoothScrollHero } from './Pages/test';
import ScrollToTop from './ScrollToTop';  // Import the new component

const AppRoutes = () => (
  <Router>
    <ScrollToTop />  {/* Add this line */}
    <Routes>
      <Route path="/test" element={<SmoothScrollHero />} />
      <Route path="/" element={<Landing />} />
      <Route path="/:title" element={<LocationDetailPage />} />
    </Routes>
  </Router>
);

export default AppRoutes;