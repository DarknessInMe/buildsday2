import { FC } from 'react';

interface IBuildCardProps {
   name: string;
   description: string;
   onClick: () => void;
} 

export const BuildCard: FC<IBuildCardProps> = ({ name, description, onClick }) => {
   return (
      <div 
         className='border-2 border-slate-500 border-solid p-4 cursor-pointer'
         onClick={onClick}
      >
         <div>
            <h4>{name}</h4>
            <p>{description}</p>
         </div>
      </div>
   )
};