import './App.css';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import FirstPage from './component/FirstPage/FirstPage';
import SecondPage from './component/SecondPage/SecondPage';
import ThirdPage from './component/ThirdPage/ThirdPage';
import FourthPage from './component/FourthPage/FourthPage';
import SixPage from './component/SixPage/SixPage';
import SeventhPage from './component/SeventhPage/SeventhPage';
import Slider from './component/Slider/Slider';

function App() {
  return (
    <div className="App">
        <Header/>
      <div className = "firstPage"> <FirstPage/> </div>
      <div className = "secondPage" id = "SecondPage"> <SecondPage/> </div>
      <div className = "thirdPage" id = "ThirdPage"> <ThirdPage/> </div>
      <div className = "fourthPage" id = "FourthPage"> <FourthPage/> </div>
      <div className = "slider" id = "Slider"> <Slider/> </div>
      <div className = "sixPage" id = "SixPage"> <SixPage/> </div>
      <div className = "seventhPage" id = "SeventhPage"> <SeventhPage/> </div>
      <div className = "footer"> <Footer/> </div>
    </div>
  );
}

export default App;
