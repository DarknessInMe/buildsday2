import { BuilderProvider } from '@/context/BuilderContext';
import { Tree } from '@/components/Tree';
import { TreePicker } from '@/components/TreePicker';

export default function CreationPage() {
   return (
      <BuilderProvider>
         <TreePicker />
         <Tree />
      </BuilderProvider>
   )
}