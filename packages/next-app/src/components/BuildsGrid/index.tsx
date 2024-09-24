"use client";

import { FC } from 'react';
import { IBuildCard } from '@/shared/interfaces';
import { BuildCard } from '@/ui/BuildCard';
import { useRouter } from 'next/navigation'
import { ROUTER } from '@/shared/constants';

interface IBuildsGridProps {
   items: IBuildCard[];
}

export const BuildsGrid: FC<IBuildsGridProps> = ({ items }) => {
   const router = useRouter();

   const onClick = (cardId: string) => {
      router.push(ROUTER.BUILD(cardId))
   };

   return (
      <div className='grid grid-cols-4 gap-4'>
         {items.map(({ name, description, id }) => (
            <BuildCard
               key={id}
               name={name}
               description={description}
               onClick={() => onClick(id)}
            />
         ))}
      </div>
   )
};