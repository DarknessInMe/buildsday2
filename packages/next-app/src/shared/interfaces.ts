export interface IBuildCard {
   id: string;
   name: string;
   description: string;
};

export interface NextPageProps<T extends object> {
	params: T;
}