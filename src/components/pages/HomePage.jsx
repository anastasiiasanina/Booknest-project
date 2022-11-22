import { useEffect, useState } from 'react';
import '../../style/HomePage.css';
import RandomBook from '../RandomBook';

const HomePage = ({apiKey}) => {
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
      <div style={{backgroundImage: `url(${srcArray[currImg]})`, backgroundSize: '100% 100%'}} className='main'>
        <div className='welcome'>
          <span className='main-btn'>Welcome to the Booknest</span> <br/>
          <a style={{textDecoration: 'none'}} id='btn' href='#random'><span className='main-btn'>Get started</span></a>
        </div>
      </div>
      <RandomBook apiKey={apiKey}/>
    </div>
  )
}

export default HomePage;