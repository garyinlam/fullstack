import './App.scss';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './containers/Home/Home';
import Footer from './components/Footer/Footer';
import Characters from './containers/Characters/Characters';
import CharacterInfo from './containers/CharacterInfo/CharacterInfo';
import Weapons from './containers/Weapons/Weapons';
import Weapon from './components/Weapon/Weapon';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path='/characters' element={<Characters />}/>
          <Route path='/characters/:characterId' element={<CharacterInfo />}/>

          <Route path='/weapons' element={<Weapons />}/>
          <Route path='/weapons/:weaponId' element={<Weapon/>}/>

          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
