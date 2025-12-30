import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import TeamPage from './components/TeamPage';
import ProductPage from './components/ProductPage';
import AboutPage from './components/AboutPage';

export default function App() {
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '');

  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}
