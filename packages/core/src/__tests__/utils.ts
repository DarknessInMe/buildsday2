import { ISubtree } from '../Subtree';
import { IMockedSkill } from './interfaces';

export const addSkill = (subtree: ISubtree, mock: IMockedSkill) => {
    return subtree.addSkill(
        mock.id,
        mock.name,
        mock.price,
        mock.description,
        mock.pointsToAccess,
    );
}