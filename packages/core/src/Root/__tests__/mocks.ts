import { Changes } from '../PubSub';
import { IChangeableSKill, IChangeableSubtree } from '../../shared/interfaces';
import { 
    MOCKED_TREE, 
    IMockedTree, 
    MOCKED_SUBTREE, 
    IMockedSubtree, 
    MOCKED_SKILL, 
    IMockedSkill,
} from '../../__tests__';
import { IRootSerialized } from '../Root';
import { INITIAL_POINTS_COUNT } from '../../shared/constants';

const MOCKED_CHANGEABLE_SKILL: IChangeableSKill = {
    id: 'SKILL_ID',
    getStatus: () => -1,
};
const MOCKED_CHANGEABLE_SUBTREE: IChangeableSubtree = {
    id: 'SUBTREE_ID',
    getWastedPoints: () => 0,
};
export const MOCKED_CHANGES = new Changes(0, false, MOCKED_CHANGEABLE_SKILL, MOCKED_CHANGEABLE_SUBTREE);

export const MOCKED_TREE_2: IMockedTree = {
    ...MOCKED_TREE,
    id: 'MOCKED_TREE_2',
    name: 'Mocked Tree 2'
};
export const MOCKED_SUBTREE_2: IMockedSubtree = {
    ...MOCKED_SUBTREE,
    id: 'MOCKED_SUBTREE_2',
    name: 'Mocked Subtree 2'
};

export const MOCKED_SKILL_2: IMockedSkill = {
    ...MOCKED_SKILL,
    id: 'MOCKED_SKILL_2',
    name: 'Mocked Skill 2'
};

export const MOCKED_ROOT_SERIALIZED: IRootSerialized = {
    points: INITIAL_POINTS_COUNT,
    isInfamyBonus: false,
    trees: {
        [MOCKED_TREE.id]: {
            id: MOCKED_TREE.id,
            name: MOCKED_TREE.name,
            subtrees: {
                [MOCKED_SUBTREE.id]: {
                    id: MOCKED_SUBTREE.id,
                    name: MOCKED_SUBTREE.name,
                    pointsWasted: 0,
                    skills: {
                        [MOCKED_SKILL.id]: {
                            id: MOCKED_SKILL.id,
                            status: -1,
                            pointsToAccess: MOCKED_SKILL.pointsToAccess,
                            name: MOCKED_SKILL.name,
                            description: MOCKED_SKILL.description,
                            price: MOCKED_SKILL.price,
                        },
                    }
                }
            }
        },
        [MOCKED_TREE_2.id]: {
            id: MOCKED_TREE_2.id,
            name: MOCKED_TREE_2.name,
            subtrees: {
                [MOCKED_SUBTREE_2.id]: {
                    id: MOCKED_SUBTREE_2.id,
                    name: MOCKED_SUBTREE_2.name,
                    pointsWasted: 0,
                    skills: {
                        [MOCKED_SKILL_2.id]: {
                            id: MOCKED_SKILL_2.id,
                            status: -1,
                            pointsToAccess: MOCKED_SKILL_2.pointsToAccess,
                            name: MOCKED_SKILL_2.name,
                            description: MOCKED_SKILL_2.description,
                            price: MOCKED_SKILL_2.price,
                        },
                    }
                }
            }
        }
    }
}