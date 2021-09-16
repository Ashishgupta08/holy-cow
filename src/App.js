import './App.css';
import { useEffect, useState, useRef } from "react";
import { Page } from "./Page";
import { PageOne } from "./PageOne";

function App() {

  const [divLeftWidth, setDivLeftWidth] = useState(window.innerWidth * 0.5)
  const [heightValue, setHeightValue] = useState(window.innerHeight);
  const [divRightWidth, setDivRightWidth] = useState(window.innerWidth * 0.5)
  const [rotateVal, setRotateval] = useState({ x: 15, y: -9, z: 32, scaleX: 0.8, scaleY: 0.8, scaleZ: 1 })
  const textBox = useRef()
  const imgBox = useRef()

  useEffect(() => {
    const scroll = document.addEventListener("scroll", (e) => {
      // console.log("Scroll from top value 1", window.scrollY)
      function clamp(min, max, value) {
        return Math.min(Math.max(value, min), max);
      };
      var x = 0;
      var y = 100;
      if (window.scrollY === 0) {
        x = 0;
        y = 100;
      } else {
        x = clamp(0, window.innerWidth * 0.5, window.scrollY * 1.5);
        y = clamp(100, window.innerHeight * 0.5, window.scrollY * 1.5)
      }
      var _actualValue = (window.innerWidth * 0.5) - x;
      var _heightValue = (window.innerHeight * 0.5) - y;
      setDivLeftWidth(_actualValue);
      setHeightValue(_heightValue)
      if (divLeftWidth < 20) {
        const div = document.getElementById("#left-div");
        div.style.display = "none"
      }
      setDivRightWidth(window.innerWidth - _actualValue);

      var _x = clamp(0, 15, 15 - window.scrollY * 0.3);
      var _y = clamp(0, 9, 9 - window.scrollY * 0.3);
      var _z = clamp(0, 32, 32 - window.scrollY * 0.3);
      setRotateval(values => { return { ...values, x: _x, y: -_y, z: _z } })
      // console.log(clamp(100, 200, window.scrollY*0.5))
      // console.log(clamp(0, 100, window.scrollY))
    })
    return () => {
      document.removeEventListener("scroll", scroll)
    }
  }, [])

  console.log(heightValue)

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <div className="header-text" id="left-div" ref={textBox} style={{ width: `${divLeftWidth}px` }}>
    //       <h1>HOLY COWS</h1>
    //       <p>
    //         9,999 Holy Cows grazing the heavenly green pastures of the metaverse
    //         have entered the pearly white gates of the Ethereum blockchain.
    //         The Holy Cows community accepts all shapes, sizes and cultures.
    //         Join on a quest filled with cow tipping rewards and adventures!
    //       </p>
    //     </div>
    //     <div className="header-img" ref={imgBox} style={{
    //       width: `${divRightWidth}px`, top: `${imgBox}`
    //     }}>
    //       <div className="img-wrapper">
    //         <div className="img-div" style={{
    //           transform: `translate3d(0px, 0px, 0px) scale3d(${rotateVal.scaleX}, ${rotateVal.scaleY}, ${rotateVal.scaleZ}) rotateX(${rotateVal.x}deg)
    // rotateY(${rotateVal.y}deg) rotateZ(${rotateVal.z}deg) skew(0deg, 0deg)`
    //         }}>
    //           <img src="https://global-uploads.webflow.com/612e20fc5129789cecdf1cb8/612e368e686100b5f4c080b4_%D0%A1%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%2010007-p-1600.png" alt="pic" className="side-img" />
    //           <img src="https://global-uploads.webflow.com/612e20fc5129789cecdf1cb8/612e368e686100b5f4c080b4_%D0%A1%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%2010007-p-1600.png" alt="pic" className="side-img" />
    //           <img src="https://global-uploads.webflow.com/612e20fc5129789cecdf1cb8/612e368e686100b5f4c080b4_%D0%A1%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%2010007-p-1600.png" alt="pic" className="side-img" />
    //           <img src="https://global-uploads.webflow.com/612e20fc5129789cecdf1cb8/612e368e686100b5f4c080b4_%D0%A1%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%2010007-p-1600.png" alt="pic" className="side-img" />
    //           <img src="https://global-uploads.webflow.com/612e20fc5129789cecdf1cb8/612e368e686100b5f4c080b4_%D0%A1%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%2010007-p-1600.png" alt="pic" className="side-img" />
    //           <img src="https://global-uploads.webflow.com/612e20fc5129789cecdf1cb8/612e368e686100b5f4c080b4_%D0%A1%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%2010007-p-1600.png" alt="pic" className="side-img" />
    //           <img src="https://global-uploads.webflow.com/612e20fc5129789cecdf1cb8/612e368e686100b5f4c080b4_%D0%A1%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%2010007-p-1600.png" alt="pic" className="side-img" />
    //           <img src="https://global-uploads.webflow.com/612e20fc5129789cecdf1cb8/612e368e686100b5f4c080b4_%D0%A1%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%2010007-p-1600.png" alt="pic" className="side-img" />
    //           <img src="https://global-uploads.webflow.com/612e20fc5129789cecdf1cb8/612e368e686100b5f4c080b4_%D0%A1%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%2010007-p-1600.png" alt="pic" className="side-img" />
    //         </div>
    //       </div>
    //     </div>
    //   </header>
    //   <main>
    //     <p className="test">
    //       9,999 Holy Cows grazing the heavenly green pastures of the metaverse
    //       have entered the pearly white gates of the Ethereum blockchain.
    //       The Holy Cows community accepts all shapes, sizes and cultures.
    //       Join on a quest filled with cow tipping rewards and adventures!
    //     </p><p>
    //       9,999 Holy Cows grazing the heavenly green pastures of the metaverse
    //       have entered the pearly white gates of the Ethereum blockchain.
    //       The Holy Cows community accepts all shapes, sizes and cultures.
    //       Join on a quest filled with cow tipping rewards and adventures!
    //     </p><p>
    //       9,999 Holy Cows grazing the heavenly green pastures of the metaverse
    //       have entered the pearly white gates of the Ethereum blockchain.
    //       The Holy Cows community accepts all shapes, sizes and cultures.
    //       Join on a quest filled with cow tipping rewards and adventures!
    //     </p><p>
    //       9,999 Holy Cows grazing the heavenly green pastures of the metaverse
    //       have entered the pearly white gates of the Ethereum blockchain.
    //       The Holy Cows community accepts all shapes, sizes and cultures.
    //       Join on a quest filled with cow tipping rewards and adventures!
    //     </p>
    //     <p>
    //       9,999 Holy Cows grazing the heavenly green pastures of the metaverse
    //       have entered the pearly white gates of the Ethereum blockchain.
    //       The Holy Cows community accepts all shapes, sizes and cultures.
    //       Join on a quest filled with cow tipping rewards and adventures!
    //     </p><p>
    //       9,999 Holy Cows grazing the heavenly green pastures of the metaverse
    //       have entered the pearly white gates of the Ethereum blockchain.
    //       The Holy Cows community accepts all shapes, sizes and cultures.
    //       Join on a quest filled with cow tipping rewards and adventures!
    //     </p><p>
    //       9,999 Holy Cows grazing the heavenly green pastures of the metaverse
    //       have entered the pearly white gates of the Ethereum blockchain.
    //       The Holy Cows community accepts all shapes, sizes and cultures.
    //       Join on a quest filled with cow tipping rewards and adventures!
    //     </p><p>
    //       9,999 Holy Cows grazing the heavenly green pastures of the metaverse
    //       have entered the pearly white gates of the Ethereum blockchain.
    //       The Holy Cows community accepts all shapes, sizes and cultures.
    //       Join on a quest filled with cow tipping rewards and adventures!
    //     </p>
    //     <p>
    //       9,999 Holy Cows grazing the heavenly green pastures of the metaverse
    //       have entered the pearly white gates of the Ethereum blockchain.
    //       The Holy Cows community accepts all shapes, sizes and cultures.
    //       Join on a quest filled with cow tipping rewards and adventures!
    //     </p><p>
    //       9,999 Holy Cows grazing the heavenly green pastures of the metaverse
    //       have entered the pearly white gates of the Ethereum blockchain.
    //       The Holy Cows community accepts all shapes, sizes and cultures.
    //       Join on a quest filled with cow tipping rewards and adventures!
    //     </p><p>
    //       9,999 Holy Cows grazing the heavenly green pastures of the metaverse
    //       have entered the pearly white gates of the Ethereum blockchain.
    //       The Holy Cows community accepts all shapes, sizes and cultures.
    //       Join on a quest filled with cow tipping rewards and adventures!
    //     </p><p>
    //       9,999 Holy Cows grazing the heavenly green pastures of the metaverse
    //       have entered the pearly white gates of the Ethereum blockchain.
    //       The Holy Cows community accepts all shapes, sizes and cultures.
    //       Join on a quest filled with cow tipping rewards and adventures!
    //     </p>
    //   </main>
    // </div>

    <Page />
    // <PageOne />
  );
}

export default App;
