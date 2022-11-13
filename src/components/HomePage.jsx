import { useEffect, useState } from 'react';
import '../style/HomePage.css';

const HomePage = (props) => {
  let [currImg, setImg] = useState(0);
  let srcArray = [
    'assets/images/main-page/background1.jpg',                
    'assets/images/main-page/background2.jpg',                 
    'assets/images/main-page/background3.jpg',                
    'assets/images/main-page/background4.jpg',  
    'assets/images/main-page/background5.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if(currImg === srcArray.length - 1) setImg(0)
      else setImg(currImg + 1)
    }, 4000)
    return () => clearInterval(interval)
  }, [currImg]);
  
  return (
    <div>
      <div className='main'>
        <img alt="library" src={srcArray[currImg]} height="100%" width="100%"/>
        <div className='welcome'><span>Welcome to the Booknest</span></div>
        <a href='#random'><div className='welcome' id='btn'><span>Get started</span></div></a>
      </div>
      <div id='random' className='random-book'>

      </div>
    </div>
  )
}

export default HomePage;