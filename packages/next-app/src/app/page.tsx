import { HomePageGrid } from "@/features/HomePageGrid";
import { Suspense } from "react";

export default function Home() {
   return (
      <div>
         <Suspense fallback={<h1>Loading...</h1>}>
            <HomePageGrid />
         </Suspense>
      </div>
   );
}
