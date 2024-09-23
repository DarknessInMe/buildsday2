import { IBuildCard } from '@/shared/interfaces';
import { STORAGE } from './storage';

export class InMemoryDBService {
   async fetchCards(): Promise<IBuildCard[]> {
      return new Promise((resolve) => {
         setTimeout(() => {
            resolve(STORAGE);
         }, 2000)
      });
   }
}