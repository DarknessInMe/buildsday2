import { IBuildCard } from '@/shared/interfaces';
import { BuildCard } from '@/ui/BuildCard';
import { FC } from 'react';

interface IBuildsGrid {
   items: IBuildCard[];
}

export const BuildsGrid: FC<IBuildsGrid> = ({ items }) => {
   return (
      <div className='grid grid-cols-4 gap-4'>
         {items.map(({ name, description }, index) => (
            <BuildCard 
               name={name}
               description={description}
               key={`builds-grid-item-${index}`}
            />
         ))}
      </div>
   )
};