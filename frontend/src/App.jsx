import './App.scss';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './containers/Home/Home';
import Footer from './components/Footer/Footer';
import Characters from './containers/Characters/Characters';
import CharacterInfo from './containers/CharacterInfo/CharacterInfo';
import Weapons from './containers/Weapons/Weapons';
import Weapon from './containers/Weapon/Weapon';
import Items from './containers/Items/Items';
import Item from './containers/Item/Item';
import AddItem from './containers/AddItem/AddItem';
import UpdateItem from './containers/UpdateItem/UpdateItem';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className='content'>
          <Routes>
            <Route path='/characters' element={<Characters />}/>
            <Route path='/characters/:characterId' element={<CharacterInfo />}/>

            <Route path='/weapons' element={<Weapons />}/>
            <Route path='/weapons/:weaponId' element={<Weapon/>}/>

            <Route path='/items' element={<Items />}/>
            <Route path='/items/:itemId' element={<Item/>}/>
            <Route path='/items/:itemId/edit' element={<UpdateItem/>}/>
            <Route path='/additem' element={<AddItem />}/>


            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
