export interface IMockedSkill {
   id: string,
   name: string,
   price: [number, number],
   description: [string, string],
   tier: number,
   pointsToAccess: [number, number],
}

export interface IMockedSubtree {
    id: string,
    name: string,
}

export interface IMockedTree {
    id: string,
    name: string,
}