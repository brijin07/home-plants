
import './App.css';
import Footer from './main/Footer';
import Header from './main/Header';
import Homepage from './pages/Homepage';
import Images from './pages/Images';
import Shop from './pages/Shop';

function App() {
  return (

    <>
      <div className="App">
       
        <Header />
        <Homepage/>
        <Images/>
        <Shop/>
        <Footer/>
        

      </div>
    </>

  );
}

export default App;
