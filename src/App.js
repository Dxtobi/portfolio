

import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Web from './pages/Projects';




const App = () => {



  
  //console.log(od)
  return (
    <div className='container'>
      <Header />
        <Web/>
      <Home/>
    </div>
    
  );
};

export default App