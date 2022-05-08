import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import CoffeeComponent from './CoffeePage/coffee'
import WalletComponent from './NFT-Page/wallet';

const Coffee = () => {
  return (
    <div className="App">
    <header className="App-header">
      <div>
        <CoffeeComponent></CoffeeComponent>
      </div>
    </header>
  </div>
  )
}

function App() {

  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Coffee></Coffee>}/>
          <Route path="/nft" element={<WalletComponent></WalletComponent>}/>
        </Routes>
    </Router>

  );
}

export default App;
