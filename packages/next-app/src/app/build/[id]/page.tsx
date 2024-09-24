import { NextPageProps } from "@/shared/interfaces";

interface ISlug {
   id: string;
}

export default function BuildPage({ params }: NextPageProps<ISlug>) {
   console.log(params);
   return <h1>Build Page {params.id}</h1>
}