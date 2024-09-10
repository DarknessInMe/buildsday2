export interface IMockedSkill {
    id: string,
    name: string,
    price: [number, number],
    description: [string, string],
    pointsToAccess: [number, number],
}

export const MOCKED_SKILL: IMockedSkill = {
    id: 'SKILL_ID',
    name: 'Testing Skill',
    price: [1, 2],
    description: ['Basic version', 'Aced version'],
    pointsToAccess: [0, 0],
};

export const MOCKED_SKILL_2: IMockedSkill = {
    ...MOCKED_SKILL,
    id: 'SKILL_ID_2',
    name: 'Testing Skill 2',
};