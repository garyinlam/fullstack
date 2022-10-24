import './App.scss';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './containers/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
