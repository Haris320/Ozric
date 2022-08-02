import React from 'react';
import linkden from '../../images/linkedin.png';

const Brand = () => (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-8 ">
        <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0">
            <div className=' cursor-pointer w-20 sm:w-36'>
                
                <a href={"https://www.linkedin.com/in/harisahmed04/"} target="_blank">
                    <img src={'https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Wordmark-Black-Logo.wine.svg'} />
                </a>

            </div>
            <div className=' cursor-pointer w-20 sm:w-32'>
                <a href='https://github.com/Haris320' target="_blank">
                    <img src={'https://logos-world.net/wp-content/uploads/2020/11/GitHub-Emblem.png'} />
                </a>
                
            </div>
            <div className=' cursor-pointer w-20 sm:w-36'>
                <img src={'https://www.logo.wine/a/logo/YouTube/YouTube-Almost-Black-Logo.wine.svg'} />
            </div>
            <div className='cursor-pointer w-20 sm:w-36'>
                <a href='https://paste-bin.xyz/72013'target='_blank'>
                    <img src={'https://www.logo.wine/a/logo/Discord_(software)/Discord_(software)-Logo%26Wordmark-Black-Logo.wine.svg'} />
                </a>
                
            </div>
            
        </div>
    </div>
);

export default Brand;