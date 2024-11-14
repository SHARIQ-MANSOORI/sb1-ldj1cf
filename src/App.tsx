import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import ProductionHouses from './pages/ProductionHouses';
import TrendingPage from './pages/TrendingPage';
import TradeHistory from './pages/TradeHistory';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import Support from './pages/Support';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/productions" element={<ProductionHouses />} />
          <Route path="/trending" element={<TrendingPage />} />
          <Route path="/history" element={<TradeHistory />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;