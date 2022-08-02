import React, { useRef }  from 'react'
import ozric from '../../images/Ozric.mp4';
import "./main.css";
import {Link} from 'react-scroll';
import {FaArrowDown} from 'react-icons/fa';

export const Main = () => {

    const headerRef = useRef(null);
    const [opacity, setOpacity] = React.useState(1);

    
    React.useEffect(() => { 
        const headerHeight = headerRef.current?.clientHeight;
        console.log(headerHeight);
        const range = 200;
        const offset = headerHeight / 2 +350;
        var adder = 300;
        if(headerHeight<600){
          adder+=100;
        }

    const changeBg = () => {

        
        let calc = 1 - (((window.scrollY+adder) - offset + range) / range)*.5;
        
        if (calc > 1) {
            calc = 1;
          } else if (calc < 0) {
            calc = 0;
          }

          setOpacity(calc);
        
        //240 start 700 end
    }
    
      window.addEventListener('scroll', changeBg)


    },[])



  return (
      <div className="flex w-full h-full justify-center items-center " ref={headerRef} style={{opacity: opacity}} id="main">
          <video className ="w-full h-full" src={ozric} autoPlay loop muted />
          <div className="flex content-center object-cover font-sem font-manrope absolute h-full text-white  items-center">
            <div className=' flex flex-col'>
                <h1 className='mr-auto ml-auto text-2xl lg:text-7xl mt-16 sm:mt-10 lg:mt-0 md:text-6xl xl:text-8xl'>Welcome</h1>
                <h2 className='text-2xl text-center sm:text-left lg:text-7xl md:text-5xl xl:text-8xl'>To the Future of Currency</h2>
                
                <Link to="services" spy={true} smooth={true} offset={-10} duration={1000}>
                  <div className='text-center mr-auto ml-auto mt-10 text-2xl sm:mt-10 lg:mt-32 md:mt-32'>
                    <li className="button-28 cursor-pointer">
                      <p className="font-thin text-2xl">Start Your Journey</p>
                    </li>
                  </div>
                </Link>
                
            </div>
              
          </div>
      </div>
    
  )
}

export default Main;
