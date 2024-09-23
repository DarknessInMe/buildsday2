import { FC } from 'react';
import { IBuildCard } from '@/shared/interfaces';

export const BuildCard: FC<IBuildCard> = ({ name, description }) => {
   return (
      <div className='border-2 border-slate-500 border-solid'>
         <div>
            
         </div>
         <div>
            <h4>{name}</h4>
            <p>{description}</p>
         </div>
      </div>
   )
};