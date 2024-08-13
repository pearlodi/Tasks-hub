import React from 'react';

import { Link } from 'react-router-dom';

interface CustomCardProps {
  src: string;
  buttonComponent?: React.ReactNode;  
  linkTo?: string;
}

const CustomCard: React.FC<CustomCardProps> = ({ src,  buttonComponent, linkTo }) => {
  return (
    <div
      className="transparent-background mt-10 w-full max-w-full md:w-[400px] rounded-4xl "
    >
      <div className='w-full flex flex-col h-[150px]'>
       <div className='px-2 mt-2 flex justify-center items-center h-full'>
       <img src={src} alt='icons' />
       </div>
        <div className=''>
        {buttonComponent && (
          <div className='self-end'>
            {buttonComponent}
          </div>
        )}
        {linkTo && (
           <Link to={linkTo} >
           <button className='w-full gradient-background p-1 self-end font-bold text-base'>
             Create Table Manually
           </button>
         </Link>
        )}
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
