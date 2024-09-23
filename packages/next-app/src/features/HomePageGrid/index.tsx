import { InMemoryDBService } from "@/_db/service";
import { BuildsGrid } from "@/components/BuildsGrid";

export async function HomePageGrid() {
   const db = new InMemoryDBService();
   const builds = await db.fetchCards();

   return <BuildsGrid items={builds}/>
};