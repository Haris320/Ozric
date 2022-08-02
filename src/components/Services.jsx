import React, { useRef, useState }  from 'react'
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

  const ServiceCard = ({ icon, subtitle, right}) => (

    <div>
      {!right && (
          <div className=" flex flex-1 w-5/6  mr-10 flex-row blue-glassmorphism p-3 rounded-md hover:shadow-2xl text-xs md:text-sm xl:text-lg 2xl:text-2xl justify-center items-center">         
            <img src={icon} className="w-28"></img>
            <div className="ml-5">Each new block connects to all the blocks before it in a cryptographic chain in such a way that it's nearly <span className="text-red-600 font-semibold">impossible </span> 
            to tamper with. All transactions within the blocks are validated and agreed upon by a consensus mechanism, ensuring that each transaction is 
            <span className="text-red-600 font-semibold"> true
             and correct</span>.</div>
          </div>
        )}
      {right && (
          <div className=" flex flex-1 w-5/6  mr-10 
flex-row blue-glassmorphism p-3 rounded-md hover:shadow-2xl text-xs md:text-sm xl:text-lg 2xl:text-2xl justify-center items-center">
            <div className="pl-3">{subtitle}</div>
            <img src={icon} className="w-28"></img>
          </div>
        )}

    </div> 
  );

  const ServiceCard2 = ({ icon, subtitle, right}) => (

    <div>
      {!right && (
          <div className=" flex flex-1 w-5/6  mr-10 flex-row blue-glassmorphism p-3 rounded-md hover:shadow-2xl text-xs md:text-sm xl:text-lg 2xl:text-2xl justify-center items-center">         
            <img src={icon} className="w-28"></img>
            <div className="ml-5">{subtitle}</div>
          </div>
        )}
      {right && (
          <div className=" flex flex-1 w-5/6  mr-10 
        flex-row blue-glassmorphism p-3 rounded-md hover:shadow-2xl text-xs md:text-sm xl:text-lg 2xl:text-2xl justify-center items-center">
            <div className="pl-3">Blockchain technology produces a structure of data with inherent <span className="text-red-600 font-semibold">security </span>  qualities.
             It's based on principles of cryptography, decentralization and consensus, which ensure <span className="text-red-600 font-semibold">trust </span>  in transactions.</div>
            <img src={icon} className="w-28"></img>
          </div>
        )}

    </div> 
  );


const Services = () =>{

 

      const reveal = () => {
        var reveals = document.querySelectorAll('.reveal')

        for(var i=0; i < reveals.length; i++){
          var windowheight = window.innerHeight;
          var revealtop = reveals[i].getBoundingClientRect().top
          var revealpoint = 150;
        

          if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active')
          }
          else{
            reveals[i].classList.remove('active')
          }
        }
      }

      window.addEventListener('scroll', reveal)

      const headerRef = useRef(null);
       const [size, setSize] = useState(true)

      React.useEffect(() => {
        const headerWidth = headerRef.current?.clientWidth;
        console.log("HW: "+headerWidth)
        if(headerWidth<1050){
            setSize(false)
          }
          console.log("Size: "+size);
       })


    return(
      <div id="services" ref={headerRef}>
        {size &&
        <div className="flex w-full h-full items-center ">
          <img src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2021/08/04022409/WHAT-IS-BLOCKCHAIN.png" className="w-full h-full "/>
            <div className="flex flex-col md:flex-row content-center object-cover font-sem font-manrope absolute w-full text-white  items-center">
              <div className="flex w-full md:text-3xl lg:text-4xl text-2xl md:mb-96 font-extrabold md:ml-20">
                <div className="blue-glassmorphism p-10 reveal">
                  <span className="text-red-600">Security </span>
                   is our number one priority
                  </div>
                </div>
              <div className="flex flex-col justify-end w-full mt-4 reveal">
                <div className="pl-24">
                  <ServiceCard2
                    icon="https://img.icons8.com/nolan/344/ethereum.png"
                    right={true}/>
                </div>
              <div className="pl-7 mt-5 mr-6">
                <ServiceCard subtitle="Each new block connects to all the blocks before it in a cryptographic chain in such a
                 way that it's nearly impossible to tamper with. All transactions within the blocks are validated and agreed upon
                 by a consensus mechanism, ensuring that each transaction is true and correct."
                 icon="https://img.icons8.com/external-two-tone-chattapat-/344/external-secure-cyber-monday-two-tone-chattapat-.png"
                 right={false}/>
              </div>
              </div>
            </div>
          </div>
          }
            
          <div className="flex w-full h-full items-center">
            <img src="https://cdn.mos.cms.futurecdn.net/xcLR5HMU2kxskdAy3ZVuTf.jpg" className="w-full h-full "/>
            <div className="flex content-center object-cover flex-col justify-center font-sem font-manrope absolute h-full text-white  items-center w-full">
              <h1 className='mr-auto ml-auto text-2xl mt-16 sm:mt-10 lg:mt-0 md:text-5xl lg:text-6xl xl:text-7xl'>Send Ethereum across the globe</h1>
              <h2 className='mr-auto ml-auto text-2xl lg:text-7xl mt-16 sm:mt-10 lg:mt-0 md:text-6xl xl:text-8xl font-bold reveal'>In under 30 seconds</h2>
            </div>
          </div>




      </div>
    )
}

export default Services;